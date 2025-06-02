import React from 'react';
import { cn } from '@/lib/utils';

interface LoginHeadingProps {
  text?: string;
  className?: string;
}

const LoginHeading: React.FC<LoginHeadingProps> = ({
  text = 'Log in',
  className,
}) => {
  return (
    <h1
      className={cn(
        'text-2xl font-bold text-card-foreground text-left w-full',
        className
      )}
    >
      {text}
    </h1>
  );
};

export default LoginHeading;
