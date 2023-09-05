import { useEffect, useRef } from "react";

const IndeterminateCheckbox = ({ indeterminate, checked, ...rest }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !checked && indeterminate;
        }
    }, [ref, checked, indeterminate]);

    return (
        <input
            ref={ref}
            name="checkbox"
            type="checkbox"
            {...rest}
        />
    )
}

export default IndeterminateCheckbox;