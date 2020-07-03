import React from "react";

export default function CardHeader({ children }) {
    return (
        <h3 className={'card-header'}>
            {children}
        </h3>
    )
}