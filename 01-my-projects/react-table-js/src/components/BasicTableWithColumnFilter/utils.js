import { useEffect, useState } from "react";

const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => {
            clearTimeout(timeout);
        }
    }, [value]);

    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...props}
        />
    )
}

export default DebouncedInput;