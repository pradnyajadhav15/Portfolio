'use client';

import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

type IconVariant = 'outline' | 'solid';
type IconName =
  | keyof typeof HeroIcons
  | keyof typeof HeroIconsSolid
  | (string & {});

interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height' | 'onClick'> {
  name: IconName;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  disabled?: boolean;
}

export default function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;

  const IconComponent = iconSet[
    name as keyof typeof iconSet
  ] as React.ElementType<React.SVGProps<SVGSVGElement>> | undefined;

  const isInteractive = Boolean(onClick) && !disabled;

  const iconClassName = [
    disabled && 'cursor-not-allowed opacity-50',
    isInteractive && 'cursor-pointer transition-opacity hover:opacity-80',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sharedProps = {
    width: size,
    height: size,
    className: iconClassName,
    onClick: isInteractive ? onClick : undefined,
    'aria-disabled': disabled || undefined,
    'aria-hidden': ariaLabel ? undefined : true,
    role: ariaLabel ? 'img' : undefined,
    ...props,
  };

  if (!IconComponent) {
    return (
      <QuestionMarkCircleIcon
        {...sharedProps}
        className={`text-gray-400 ${iconClassName}`}
      />
    );
  }

  return <IconComponent {...sharedProps} />;
}