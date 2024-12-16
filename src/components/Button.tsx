import { useEffect, ReactNode, ButtonHTMLAttributes } from 'react';

type Props = {
    size?: 'small' | 'default' | 'large';
    variant?: 'primary' | 'secondary';
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; // Tüm button attributelerini destekle

const Button = ({
    size = 'default',
    variant = 'primary',
    className = '',
    children,
    ...rest // Diğer tüm attributeleri yakala
}: Props) => {
    useEffect(() => {
        // Herhangi bir side effect burada işlenebilir
    }, [variant, size]);

    const baseClasses = 'flex items-center justify-center rounded-[8px] transition-all duration-300 hover-up';

    const sizeClasses = {
        small: 'h-12 py-[14px] px-6 text-[16px]',
        default: 'h-[66px] py-[22px] px-10 text-[18px]',
        large: 'h-[66px] py-[22px] px-[68px] text-[22px]',
    };

    const variantClasses = {
        primary: 'border border-primary bg-primary text-white hover:bg-secondary1',
        secondary: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:border-secondary1 tb-medium',
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    return (
        <button className={classes} {...rest}> {/* Diğer attributeleri butona uygula */}
            {children}
        </button>
    );
};

export default Button;
