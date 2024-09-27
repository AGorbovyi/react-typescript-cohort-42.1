export type InputTypes = "checkbox" | "email" | "number" | "password" | "radio" | "search" | "tel" | "text" | "time" | "url";

export interface InputProps {
    id: string;
    name: string;
    type?: InputTypes;
    placeholder: string;
    label: string;
}