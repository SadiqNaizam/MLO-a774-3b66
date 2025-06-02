import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface PasswordInputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id = 'password',
  value,
  onChange,
  placeholder = 'Password',
  className,
}) => {
  return (
    <Input
      id={id}
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn('w-full placeholder:text-muted-foreground', className)}
      autoComplete="current-password"
    />
  );
};

export default PasswordInput;
