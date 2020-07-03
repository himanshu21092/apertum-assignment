import React from "react";

export default function CardSubtitle({ children }) {
    return (
        <h4 className={'card-subtitle'}>
            {children}
        </h4>
    )
}