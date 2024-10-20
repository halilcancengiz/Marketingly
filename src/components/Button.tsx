import { useEffect, ReactNode } from 'react';

type Props = {
    size?: 'small' | 'default' | 'large';
    variant?: 'primary' | 'secondary';
    children: ReactNode;
    type?: 'button' | 'submit';
    className?: string;
};

const Button = ({
    size = 'default',
    variant = 'primary',
    type = 'button',
    className = '',
    children,
}: Props) => {
    useEffect(() => {
        console.log(variant, size);
    }, [variant, size]);

    const baseClasses = 'flex items-center justify-center rounded-[10px] transition-all duration-300 hover-up';

    const sizeClasses = {
        small: 'h-12 py-[14px] px-6 text-[16px]',
        default: 'h-[66px] py-[22px] px-10 text-[18px]',
        large: 'h-[66px] py-[22px] px-[68px] text-[22px]',
    };

    const variantClasses = {
        primary: 'border border-primary bg-primary text-white hover:bg-secondary1',
        secondary: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:border-secondary1',
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    return (
        <button type={type} className={`${classes} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
