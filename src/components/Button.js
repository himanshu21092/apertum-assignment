import React from "react";

export default function Button({label, ...buttonProps}) {
    return (
        <button className="button" {...buttonProps}>
            {label}
        </button>
    )
}