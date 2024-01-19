export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-xs text-[#FF5555] ' + className}>
            {message}
        </p>
    ) : null;
}
