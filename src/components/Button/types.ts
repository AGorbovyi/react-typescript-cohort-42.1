export type ButtonTypes = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  type?: ButtonTypes;
  name: string;
<<<<<<< HEAD
  onClick: () => void;
  isDeleteVariant?: boolean;
=======
  onClick?: () => void;
>>>>>>> 2eb31e324a277084b00b6d8c94665f7831d80ead
}