import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps {
  onClick?: () => void; 
  isLoading?: boolean;
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  isLoading = false,
  text = 'Log in',
  className,
  type = 'button', // Default to 'button' to prevent accidental form submission if not intended
                  // The LoginCard form handles submission logic, this button triggers it via onClick.
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded-md',
        // Shadcn default radius is applied, py-2 px-4 are common for buttons but Shadcn may have own sizing.
        // Explicitly setting font-bold as per requirement.
        // Default button variant from Shadcn for primary should use primary colors from theme.
        className
      )}
    >
      {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
      {text}
    </Button>
  );
};

export default LoginButton;
