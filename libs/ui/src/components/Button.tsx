import { ButtonProps } from '../@types';

/**
 * A basic button.
 */
export const Button = ({name, label, state = 'default', disabled = false, icon}: ButtonProps): React.ReactElement => {
    return <button name={name} className={state} disabled={disabled === 'true' || disabled === true}>{icon ? <i className={icon}></i> : null} {label}</button>
}