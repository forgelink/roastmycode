import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'bg-[#44475A] border border-transparent focus:border-[#6272A4] focus:ring-0 rounded-lg shadow-sm transition duration-150 ' +
                className
            }
            ref={input}
        />
    );
});
