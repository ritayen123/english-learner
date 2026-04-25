import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "bg-bg-card border border-border text-text-primary hover:bg-bg-input",
  ghost: "text-text-muted hover:text-accent",
  danger: "bg-danger-light text-danger hover:bg-danger hover:text-white",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`py-3 rounded-xl font-medium text-sm transition-colors disabled:opacity-50 ${
        fullWidth ? "w-full" : "px-5"
      } ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
