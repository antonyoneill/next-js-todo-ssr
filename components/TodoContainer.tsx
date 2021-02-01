import React from 'react';

interface TodoContainerProps {
    items: string[];
}

export const TodoContainer = ({items}: TodoContainerProps) => {
    if (items.length) {
        return (<ol>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>)
    }
    return <div>Sit back and relax, nothing to do.</div>
}