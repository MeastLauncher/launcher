import React from 'react';
import { RadioButtonProps } from '../../@types';

export const RadioButton = ({
                                label,
                                state = 'default',
                                disabled,
                                title,
                                checked,
                                onChange,
                                name,
                                id
                            }: RadioButtonProps): React.ReactElement => {
    return <label
        className={`radio-container ${disabled ? 'radio-disabled' : ''}`}
        title={title}
    >
        <input
            type="radio"
            name={name}
            id={id}
            disabled={disabled}
            className="input"
            onChange={onChange}
            defaultChecked={checked}
        />
        <div className={`radio-ui ${state}-color`}/>
        {label}
    </label>
}