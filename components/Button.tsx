import React from "react";

//! WARNING: Demo Component, not in use.

type ButtonProps = {
    size: 'sm' | 'md' | 'lg';
    style: 'primary' | 'secondary' | 'ghost';
    text?: string
    icon?: string
};

const Button: React.FC<ButtonProps> = ({size, style, text, icon}) => {
    const ContentTextOnly: React.FC = () => {
        return (
            <p>{text!}</p>
        );
    }

    const ContentIconOnly: React.FC = () => {
        return (
            <p>{icon!}</p>
        );
    }

    const ContentTextAndIcon: React.FC = () => {
        return (
            <div className="flex flex-row space-x-2 items-center content-center">
                <ContentTextOnly />
                <ContentIconOnly />
            </div>
        );
    }

    const Content: React.FC = () => {
        if(text != null && icon != null) {
            return <ContentTextAndIcon />
        } else if (icon != null && text == null) {
            return <ContentIconOnly />
        } else {
            return <ContentTextOnly />
        }
    }

    const size_classes = size == 'sm' 
        ? "" /* Small Styles */ 
        : size == 'md' 
            ? "" /* Medium Styles */
            : "" /* Large Styles */;

    const colour_classes = style == 'primary'
        ? "bg-primary" /* Primary Styles */
        : style == 'secondary'
            ? "bg-secondary" /* Secondary Styles */
            : "bg-transparent" /* Ghost Styles */

    return (
        <button className={`${colour_classes} ${size_classes}`}>
            <Content />
        </button>
    );
}