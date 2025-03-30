export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outline" | "ghost";
  onClick?: () => void;
}
