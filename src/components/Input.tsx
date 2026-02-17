import { forwardRef } from "react";

export interface inputprops {
    placeholder: string;
    name?: string;
    type?: string;
    required?: boolean;
}

export const InputComponent = forwardRef<HTMLInputElement, inputprops>(
    ({ placeholder, name, type = "text", required }, ref) => {
        return (
            <input
                ref={ref}
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                className={`w-full
                h-[2.5rem]
                pl-[0.8em]
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

InputComponent.displayName = "InputComponent";