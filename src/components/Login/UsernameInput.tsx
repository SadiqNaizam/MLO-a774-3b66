import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface UsernameInputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  id = 'username',
  value,
  onChange,
  placeholder = 'Username',
  className,
}) => {
  return (
    <Input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn('w-full placeholder:text-muted-foreground', className)}
      autoComplete="username"
    />
  );
};

export default UsernameInput;
