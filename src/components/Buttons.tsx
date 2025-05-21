import { ReactNode } from "react";

interface buttonProps {
    padding?: string;
    margin?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
    buttonTextColor?: string;
    mediaTextSize?: string;
    extraStyle?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
}

const BasicButton = ({ padding = "p-3 md:p-4", margin = "m-1", buttonColor = "bg-gray-700", buttonHoverColor = "hover:bg-gray-600", buttonTextColor = "text-white", mediaTextSize = "text-sm md:text-base", extraStyle = "", onClick, children } : buttonProps) => {
    const buttonStyle = padding + " " + margin + " " + buttonColor + " " + buttonHoverColor + " disabled:bg-grey-300 " + buttonTextColor + " " + mediaTextSize + " " + extraStyle;
    
    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
}

export const GreenButton = ({ extraStyle, onClick, children } : buttonProps) => {
    const buttonStyle = "p-4 m-1 bg-green-400 hover:bg-green-300 disabled:bg-gray-300 text-white text-sm md:text-base" + " " + extraStyle;
    
    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
}

export const RedButton = ({ extraStyle, onClick, children } : buttonProps) => {
    const buttonStyle = "p-4 m-1 bg-red-400 hover:bg-red-300 disabled:bg-gray-300 text-white text-sm md:text-base" + " " + extraStyle;
    
    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
}

export const BlackButton = ({ extraStyle, onClick, children } : buttonProps) => {
    const buttonStyle = "p-4 m-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-300 text-white text-sm md:text-base" + " " + extraStyle;
    
    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
}

export default BasicButton; 