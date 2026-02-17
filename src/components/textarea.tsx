import { forwardRef } from "react";

export interface textprops {
    placeholder: string;
    name?: string;
    required?: boolean;
}

export const TextComponent = forwardRef<HTMLTextAreaElement, textprops>(
    ({ placeholder, name, required }, ref) => {
        return (
            <textarea
                ref={ref}
                name={name}
                placeholder={placeholder}
                required={required}
                className={`w-full
                h-40
                pl-[0.8em]
                pt-[0.8em]
                rounded-[10px]
                border-2 border-transparent
                bg-gray-600
                outline
                overflow-hidden
                transition-all duration-500
                hover:border-[#4A9DEC]
                hover:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]
                hover:bg-gray-500

                focus:border-[#4A9DEC]
                focus:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]
                focus:bg-gray-400`}
            />
        );
    }
);

TextComponent.displayName = "TextComponent";