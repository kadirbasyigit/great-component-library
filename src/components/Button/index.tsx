import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link-color'
  | 'link-gray'
  | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium border rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-700 text-white border-indigo-700 hover:bg-indigo-800 hover:border-indigo-800 focus:ring-indigo-100 shadow-sm',
        secondary:
          'bg-white text-neutral-900 border-neutral-200 border-[0.5px] border-solid hover:bg-neutral-50 hover:border focus:ring-neutral-100 focus:ring-4 focus:ring-offset-0 shadow-sm',
        tertiary:
          'bg-transparent text-gray-900 border-transparent hover:bg-gray-100 focus:ring-gray-500 shadow-sm',
        'link-color':
          'bg-transparent text-blue-600 border-transparent hover:text-blue-700 hover:underline focus:ring-blue-500 p-0 border-none shadow-none',
        'link-gray':
          'bg-transparent text-gray-600 border-transparent hover:text-gray-700 hover:underline focus:ring-gray-500 p-0 border-none shadow-none',
        destructive:
          'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700 focus:ring-red-500 shadow-sm',
      },
      size: {
        sm: 'px-4 py-2.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-base',
        xl: 'px-6 py-4 text-lg',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'sm',
        class: 'h-8 w-8 p-1',
      },
      {
        iconOnly: true,
        size: 'md',
        class: 'h-10 w-10 p-2',
      },
      {
        iconOnly: true,
        size: 'lg',
        class: 'h-12 w-12 p-2.5',
      },
      {
        iconOnly: true,
        size: 'xl',
        class: 'h-14 w-14 p-3',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  color?: string;
  backgroundColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  iconOnly,
  color,
  backgroundColor,
  leftIcon,
  rightIcon,
  children,
  className,
  style,
  disabled,
  ...props
}) => {
  const customStyle = {
    ...(color && { color }),
    ...(backgroundColor && { backgroundColor }),
    ...style,
  };

  if (iconOnly && !leftIcon && !rightIcon) {
    console.warn('Button: iconOnly is true but no icon provided');
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, iconOnly }), className)}
      style={customStyle}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <span
          className={cn('flex items-center', {
            'mr-2': !iconOnly && children,
          })}
        >
          {leftIcon}
        </span>
      )}
      {!iconOnly && children}
      {rightIcon && (
        <span
          className={cn('flex items-center', {
            'ml-2': !iconOnly && children,
          })}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
