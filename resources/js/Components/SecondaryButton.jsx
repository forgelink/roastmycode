export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-[#F8F8F2] hover:bg-[#e0e0dc] rounded-xl font-semibold text-xs text-gray-700 shadow-sm transition ease-in-out duration-150 ${disabled && 'opacity-25 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
