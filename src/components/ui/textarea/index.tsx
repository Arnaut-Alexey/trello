import React, { useEffect, useRef, useState } from 'react';

import { ITextareaProps } from './interface';

import styles from './style.module.scss';
import { observer } from 'mobx-react-lite';

export const Textarea: React.FC<ITextareaProps> = observer((props) => {
    const { name, rows, placeholder, size = "md", defaultValue, variables = 'primary', onSubmit } = props;
    const [value, setValue] = useState(defaultValue);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (rows !== 'auto') return;
        if (!textareaRef.current) return;

        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }, [value])

    const keyDownPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if(onSubmit) {
                onSubmit(e)
            }
        }
    }

    return (
        <div className={`${styles.field} ${variables === 'primary' ? styles.__primary : styles.__secondary} ${size === 'sm' ? styles.__sm : styles.__md}`}>
            <textarea
                ref={textareaRef}
                name={name}
                rows={rows === 'auto' ? 1 : rows}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                onKeyDown={keyDownPress}
                value={value}
            />
        </div>
    )
})
