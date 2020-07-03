import React from "react";

export default function Input({...inputProps}) {
    return (
        <input className="input" {...inputProps} />
    )
}