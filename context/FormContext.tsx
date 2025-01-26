"use client"
import React, { createContext, useState, ReactNode } from "react";

export interface FormField {
    id: string;
    label: string;
    type: "text" | "checkbox" | "select" | "radio" | "textarea" | "number" | "date";
    required: boolean;
    options?: string[];
}

interface Theme {
    color: string;
    fontSize: string;
    fontFamily: string;
}

interface FormContextProps {
    formFields: FormField[];
    setFormFields: React.Dispatch<React.SetStateAction<FormField[]>>;
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const FormContext = createContext<FormContextProps | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formFields, setFormFields] = useState<FormField[]>([]);
    const [theme, setTheme] = useState<Theme>({
        color: "#000000",
        fontSize: "16px",
        fontFamily: "Arial",
    });

    return (
        <FormContext.Provider value={{ formFields, setFormFields, theme, setTheme }}>
            {children}
        </FormContext.Provider>
    );
};
