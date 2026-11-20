import { useState } from 'react';
import { Code2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-200 via-zinc-100 to-emerald-500/10 dark:from-zinc-900 dark:via-zinc-950 dark:to-emerald-950/30 text-zinc-600 dark:text-zinc-400 p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Code2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <span className="text-sm font-medium text-center text-zinc-700 dark:text-zinc-300">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
