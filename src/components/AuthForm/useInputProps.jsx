import { useState } from "react";

export function useInputProps(placeholder, type, disabler, required) {
    const [value, setValue] = useState(null);
    const props = {
        onChange: e => setValue(e.target.value),
        disabled: disabler,
        placeholder,
        required,
        type,
    };

    return [value, props];
}
