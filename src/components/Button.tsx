import { motion } from "framer-motion";

interface buttonProps {
    title?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children?: React.ReactNode;
}

export function Button({ title, type = "button", disabled = false, children }: buttonProps) {
    return (
        <motion.button
            type={type}
            disabled={disabled}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: disabled ? 0 : -4
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            className={`bg-blue-500 w-full font-sans font-semibold px-4 py-2 rounded-md cursor-pointer transition-opacity ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            {children || title}
        </motion.button>
    );
}