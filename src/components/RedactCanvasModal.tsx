import React, { useRef, useState, useEffect } from 'react';
import { Lock, Download, RotateCcw, ShieldCheck, Upload, Trash2, Eye, Paintbrush, Square } from 'lucide-react';

interface RedactCanvasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedactCanvasModal: React.FC<RedactCanvasModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [history, setHistory] = useState<ImageData[]>([]);
  const [mode, setMode] = useState<'blackout' | 'blur'>('blackout');

  useEffect(() => {
    if (!isOpen) {
      setImageLoaded(false);
      setHistory([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Scale proportionally to max dimensions
        let width = img.width;
        let height = img.height;
        const maxDim = 800;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = (height * maxDim) / width;
            width = maxDim;
          } else {
            width = (width * maxDim) / height;
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        setImageLoaded(true);

        // Save initial snapshot to history
        setHistory([ctx.getImageData(0, 0, width, height)]);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!imageLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setIsDrawing(true);
    setStartPos({ x, y });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !imageLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    const width = endX - startPos.x;
    const height = endY - startPos.y;

    if (Math.abs(width) > 4 && Math.abs(height) > 4) {
      if (mode === 'blackout') {
        ctx.fillStyle = '#0f172a'; // solid dark mask
        ctx.fillRect(startPos.x, startPos.y, width, height);
      } else {
        // Redaction bar with label
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(startPos.x, startPos.y, width, height);
        ctx.strokeStyle = '#4f46e5';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(startPos.x, startPos.y, width, height);
        ctx.fillStyle = '#818cf8';
        ctx.font = '10px monospace';
        ctx.fillText('[REDACTED]', startPos.x + 4, startPos.y + 14);
      }

      // Save new state
      const current = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory((prev) => [...prev, current]);
    }

    setIsDrawing(false);
  };

  const handleUndo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = history.slice(0, history.length - 1);
    const previousState = newHistory[newHistory.length - 1];
    ctx.putImageData(previousState, 0, 0);
    setHistory(newHistory);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `sanitized_evidence_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden text-[#F8FAFC]">
        {/* Header */}
        <div className="p-6 border-b border-[#262626] flex items-start justify-between gap-4 bg-[#181818]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 flex items-center justify-center rounded font-bold">
                <Lock className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                Privacy Redactor &amp; Masking Engine
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">Mask Sensitive Records</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Drag &amp; draw privacy boxes over PAN numbers, bank account details, phone numbers, and private names.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#222222] rounded-lg text-lg font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Canvas Toolbar */}
        <div className="p-4 bg-[#161616] border-b border-[#262626] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-xs">
              <Upload className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{imageLoaded ? 'Replace Image' : 'Upload Evidence File'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {imageLoaded && (
              <>
                <button
                  onClick={() => setMode('blackout')}
                  className={`flex items-center gap-1 px-3 py-2 font-semibold rounded-xl border transition-all cursor-pointer ${
                    mode === 'blackout'
                      ? 'bg-indigo-950/80 text-indigo-300 border-indigo-700 shadow-xs'
                      : 'bg-[#181818] text-slate-400 border-[#262626] hover:bg-[#222222] hover:text-white'
                  }`}
                >
                  <Square className="w-3 h-3" />
                  <span>Solid Mask</span>
                </button>
                <button
                  onClick={() => setMode('blur')}
                  className={`flex items-center gap-1 px-3 py-2 font-semibold rounded-xl border transition-all cursor-pointer ${
                    mode === 'blur'
                      ? 'bg-indigo-950/80 text-indigo-300 border-indigo-700 shadow-xs'
                      : 'bg-[#181818] text-slate-400 border-[#262626] hover:bg-[#222222] hover:text-white'
                  }`}
                >
                  <Lock className="w-3 h-3" />
                  <span>[REDACTED] Label</span>
                </button>
              </>
            )}
          </div>

          {imageLoaded && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleUndo}
                disabled={history.length <= 1}
                className="flex items-center gap-1 px-3 py-2 bg-[#181818] text-slate-300 hover:bg-[#222222] hover:text-white border border-[#262626] rounded-xl disabled:opacity-40 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download Masked Image</span>
              </button>
            </div>
          )}
        </div>

        {/* Canvas Area */}
        <div className="p-6 flex-1 overflow-auto bg-[#0D0D0D] flex items-center justify-center min-h-[360px]">
          {!imageLoaded ? (
            <div className="text-center space-y-3 p-8 border-2 border-dashed border-[#262626] rounded-2xl max-w-md bg-[#141414]">
              <div className="w-12 h-12 bg-indigo-950/80 text-indigo-400 rounded-xl flex items-center justify-center mx-auto border border-indigo-800/60">
                <Upload className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-sm font-bold text-[#F8FAFC]">Upload screenshot to mask PII</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                PNG, JPG, or screenshot files. Click and drag across the image to draw protective black bars over sensitive personal data.
              </p>
            </div>
          ) : (
            <div className="relative border border-[#262626] rounded-xl overflow-hidden shadow-md bg-[#181818]">
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="cursor-crosshair block max-w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#262626] bg-[#181818] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Client-Side: Redacted images never leave your browser unmasked</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 font-bold rounded-xl bg-[#262626] hover:bg-[#333333] text-white cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
