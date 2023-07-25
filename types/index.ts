import { Breakpoint } from "@mui/material";
import { ReactNode } from "react";

export interface MediaProps {
    link?: string;
    icon: ReactNode
}

export interface ModalProps {
    title?: string;
    subtitle?: string;
    contents?: ReactNode;
    open: boolean;
    onClose?: (event: any) => void;
    maxWidth?: Breakpoint;
    closeIcon?: boolean;
}

export interface InputProps {
    label?: string;
    value?: string | number;
    name?: string;
    handleChange?: (e?: any) => void;
    inputType?: 'text' | 'select';
    placeholder?: string 
    selectOptions?: {
       value: string
       label: string
    }[]
}