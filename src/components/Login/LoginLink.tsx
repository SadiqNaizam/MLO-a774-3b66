import React from 'react';
import { cn } from '@/lib/utils';

interface LoginLinkProps {
  onClick?: () => void;
  href?: string; 
  text?: string;
  className?: string;
}

const LoginLink: React.FC<LoginLinkProps> = ({
  onClick,
  href,
  text = 'or, sign up',
  className,
}) => {
  const linkContent = (
    <span className="hover:underline">
      {text}
    </span>
  );

  const baseClasses = cn(
    'text-sm text-muted-foreground hover:text-primary transition-colors',
    className
  );

  if (onClick && !href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
      >
        {linkContent}
      </button>
    );
  }

  return (
    <a
      href={href || '#'}
      onClick={onClick} // Allows handling SPA navigation or other actions even with an href
      className={baseClasses}
    >
      {linkContent}
    </a>
  );
};

export default LoginLink;
