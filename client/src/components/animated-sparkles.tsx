import { Star, Sparkles } from "lucide-react";

interface AnimatedSparklesProps {
  className?: string;
}

export function AnimatedSparkles({ className = "" }: AnimatedSparklesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute top-10 left-10 w-4 h-4 text-dd-yellow animate-sparkle">
        <Star className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-20 right-20 w-3 h-3 text-white animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 text-dd-cream animate-sparkle" style={{ animationDelay: '1s' }}>
        <Star className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 text-dd-yellow animate-sparkle" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-1/3 right-10 w-3 h-3 text-white animate-sparkle" style={{ animationDelay: '2s' }}>
        <Star className="w-full h-full fill-current" />
      </div>
    </div>
  );
}
