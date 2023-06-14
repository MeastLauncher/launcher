import { CheckboxProps } from '../../@types';
import React from 'react';

/**
 * A checkbox with a tick mark (another design)
 */
export const TickCheckbox = ({
                                 name,
                                 onChange,
                                 label,
                                 state = 'default',
                                 disabled,
                                 title,
                                 checked
                             }: CheckboxProps): React.ReactElement => {
    return <label
        className={`tick-checkbox-container ${disabled ? 'checkbox-disabled' : ''}`}
        title={title}
    >
        <input
            type="checkbox"
            name={name}
            id={name}
            disabled={disabled}
            className="input"
            onChange={onChange}
            checked={checked}
        />

        <div className={`checkbox-ui ${state}-color`}>
            <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L9 18L19.5 1.5" />
            </svg>
        </div>
        {label}
    </label>
}