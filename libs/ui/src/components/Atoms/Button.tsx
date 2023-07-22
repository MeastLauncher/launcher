import type { ButtonProps } from '../../@types';
import type { ReactElement } from 'react';

/**
 * A basic button.
 */
export const Button = ({
    name,
    label,
    state = 'default',
    disabled = false,
    icon,
    title
}: ButtonProps): ReactElement => {
    return (
        <button name={name} className={state} disabled={disabled} title={title}>
            {icon ? <i className={icon}></i> : null} {label}
        </button>
    );
};
