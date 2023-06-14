import React from 'react';

export = MeastUI;
export as namespace MeastUI;

declare namespace MeastUI {
    /**
     * Represents the state of an input (it changes its color)
     */
    type MeastInputState = 'default' | 'success' | 'error';

    type TextFieldType = 'email' | 'password' | 'number' | 'text' | 'url';

    /**
     * Props of the button component
     */
    type ButtonProps = {
        /**
         * The state of the button. It defines its type and color
         */
        state?: MeastInputState,
        /**
         * An icon that can be displayed on the left of the label. Must be a class name like FontAwesome's one
         */
        icon?: string,
        /**
         * The label present inside the button.
         */
        label: string,
        /**
         * The name of the button (bound to the `name` property of the button). It is also used for `id` property. Set a unique name for each button
         */
        name: string,
        /**
         * If the button is disabled
         */
        disabled?: boolean,
        /**
         * HTML `title` attribute for the button
         */
        title: string
    }

    /**
     * Props of the TextField component
     */
    type TextFieldProps = {
        /**
         * The name of the text field (bound to the `name` property of the field). It is also used for `id` property. Set a unique name for each text field
         */
        name: string,
        /**
         * The placeholder of the text field, displayed inside the input as a hint
         */
        placeholder?: string,
        /**
         * The default value of the field
         */
        value?: string,
        /**
         * An icon displayed at the left of the field. Must be a class name like FontAwesome's one
         */
        iconLeft?: string,
        /**
         * The color of the left icon (default, success, error)
         */
        iconLeftColor?: MeastInputState,
        /**
         * An icon displayed at the right of the field. Must be a class name like FontAwesome's one
         */
        iconRight?: string,
        /**
         * The color of the right icon (default, success, error)
         */
        iconRightColor?: MeastInputState,
        /**
         * The label displayed on the top outside the field. Optional
         */
        label?: string,
        /**
         * The state of the field. It changes its color
         */
        state?: MeastInputState,
        /**
         * If the input is disabled
         */
        disabled?: boolean,
        /**
         * The field type. Used to control the input's `type` attribute
         */
        inputType?: TextFieldType,
        /**
         * HTML `title` attribute for the field
         */
        title: string,
        /**
         * Function fired when the content if the field changes
         */
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }

    /**
     * Props of the checkbox component
     */
    type CheckboxProps = {
        /**
         * The label displayed beside the checkbox
         */
        label: string,

        /**
         * The event fired when the user clicks on the checkbox
         */
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        /**
         * The name of the checkbox (bound to the `name` property of the checkbox). It is also used for `id` property. Set a unique name for each checkbox
         */
        name: string,
        /**
         * If the checkbox is disabled
         */
        disabled?: boolean
        /**
         * The state of the checkbox. It changes its color
         */
        state?: MeastInputState,
        /**
         * The title of the checkbox (bound to the `title` HTML property)
         */
        title?: string,
        /**
         * If the checkbox is checked by default
         */
        checked?: boolean
    }

    /**
     * This is the default button.
     */
    const Button: (props: ButtonProps) => React.ReactElement;

    /**
     * This is the default TextField
     */
    const TextField: (props: TextFieldProps) => React.ReactElement;

    /**
     * This is the default checkbox
     */
    const Checkbox: (props: CheckboxProps) => React.ReactElement;

    /**
     * A checkbox with a tick mark (another design)
     */
    const TickCheckbox: (props: CheckboxProps) => React.ReactElement;
}