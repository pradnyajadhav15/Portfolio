'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional) — leave undefined until a real logo exists
  iconName?: string; // Icon name shown when no image src is provided
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src,
  iconName = 'SparklesIcon',
  size = 40,
  className = '',
  onClick,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center gap-2'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="Pradnya Jadhav logo"
          width={size}
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <>
          <AppIcon name={iconName} size={size * 0.7} className="flex-shrink-0 text-primary" />
          <span className="font-display font-bold text-lg text-foreground">Pradnya</span>
        </>
      )}
    </div>
  );
});

export default AppLogo;
