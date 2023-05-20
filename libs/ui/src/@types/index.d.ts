export = MeastUI;
export as namespace MeastUI;

declare namespace MeastUI {
    type MeastInputState = 'default' | 'success' | 'error';

    type ButtonProps = {
        /**
         * The state of the button. It defines its type and color
         */
        state?: MeastInputState,
        /**
         * An icon that can be displayed on the left of the label
         */
        icon?: string,
        /**
         * The label present inside the button.
         */
        label: string,
        /**
         * The name of the button (bound to the `name` property of the button) is also used for `id` property. Set a unique name for each button
         */
        name: string,
        /**
         * If the button is disabled
         */
        disabled?: boolean
    }

    /**
     * This is the default button.
     */
    const Button: (props: ButtonProps) => React.ReactElement;
}