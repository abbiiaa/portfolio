import { useState } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  href: string;
  label: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const DownloadButton = ({ 
  href, 
  label, 
  variant = 'outline', 
  size = 'sm',
  className = ''
}: DownloadButtonProps) => {
  const [showFallback, setShowFallback] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(href, { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, trigger download
        const link = document.createElement('a');
        link.href = href;
        link.download = href.split('/').pop() || 'documento.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setShowFallback(true);
      }
    } catch {
      setShowFallback(true);
    }
  };

  if (showFallback) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">
          Documento no disponible
        </p>
        <Button variant="outline" size={size} className={`gap-2 ${className}`} asChild>
          <a href="#contacto">
            <MessageCircle className="w-4 h-4" />
            Solicitar documentación
          </a>
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={`gap-2 ${className}`}
      onClick={handleDownload}
    >
      <Download className="w-4 h-4" />
      {label}
    </Button>
  );
};

export default DownloadButton;