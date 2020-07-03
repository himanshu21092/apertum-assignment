import React from "react";

export default function Checkbox({checked, label, toggle}) {
    return (
        <div className={`checkbox ${checked && "checked"}`} onClick={toggle}>
            {label}
        </div>
    )
}