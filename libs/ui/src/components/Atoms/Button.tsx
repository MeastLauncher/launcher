import { ButtonProps } from '../../@types';
import React from 'react';

/**
 * A basic button.
 */
export const Button = ({name, label, state = 'default', disabled = false, icon, title}: ButtonProps): React.ReactElement => {
    return <button
        name={name} className={state}
        disabled={disabled}
        title={title}
    >
            {icon ? <i className={icon}></i> : null} {label}
    </button>
}