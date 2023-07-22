/*
 * Copyright (C) 2023 Meast Team & its contributors
 *
 * This file is part of the Meast Launcher.
 *
 * Meast is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meast is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meast.  If not, see <http://www.gnu.org/licenses/>.
 */

import type { ChangeEvent, PropsWithChildren, ReactElement } from 'react';

/**
 * Represents the state of an input (it changes its color)
 */
declare type MeastInputState = 'default' | 'success' | 'error';

declare type TextFieldType = 'email' | 'password' | 'number' | 'text' | 'url';

declare type MeastSize = 'small' | 'medium' | 'large';

/**
 * Props of the button component
 */
declare type ButtonProps = {
    /**
     * The state of the button. It defines its type and color
     */
    state?: MeastInputState;
    /**
     * An icon that can be displayed on the left of the label. Must be a class name like FontAwesome's one
     */
    icon?: string;
    /**
     * The label present inside the button.
     */
    label: string;
    /**
     * The name of the button (bound to the `name` property of the button). It is also used for `id` property. Set a unique name for each button
     */
    name: string;
    /**
     * If the button is disabled
     */
    disabled?: boolean;
    /**
     * HTML `title` attribute for the button
     */
    title: string;
};

/**
 * Props of the TextField component
 */
declare type TextFieldProps = {
    /**
     * The name of the text field (bound to the `name` property of the field). It is also used for `id` property. Set a unique name for each text field
     */
    name: string;
    /**
     * The placeholder of the text field, displayed inside the input as a hint
     */
    placeholder?: string;
    /**
     * The default value of the field
     */
    value?: string;
    /**
     * An icon displayed at the left of the field. Must be a class name like FontAwesome's one
     */
    iconLeft?: string;
    /**
     * The color of the left icon (default, success, error)
     */
    iconLeftColor?: MeastInputState;
    /**
     * An icon displayed at the right of the field. Must be a class name like FontAwesome's one
     */
    iconRight?: string;
    /**
     * The color of the right icon (default, success, error)
     */
    iconRightColor?: MeastInputState;
    /**
     * The label displayed on the top outside the field. Optional
     */
    label?: string;
    /**
     * The state of the field. It changes its color
     */
    state?: MeastInputState;
    /**
     * If the input is disabled
     */
    disabled?: boolean;
    /**
     * The field type. Used to control the input's `type` attribute
     */
    inputType?: TextFieldType;
    /**
     * HTML `title` attribute for the field
     */
    title: string;
    /**
     * Function fired when the content if the field changes
     */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Props of the checkbox component
 */
declare type CheckboxProps = {
    /**
     * The label displayed beside the checkbox
     */
    label: string;

    /**
     * The event fired when the user clicks on the checkbox
     */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * The name of the checkbox (bound to the `name` property of the checkbox). It is also used for `id` property (not on RadioButton). Set a unique name for each checkbox
     */
    name: string;
    /**
     * If the checkbox is disabled
     */
    disabled?: boolean;
    /**
     * The state of the checkbox. It changes its color
     */
    state?: MeastInputState;
    /**
     * The title of the checkbox (bound to the `title` HTML property)
     */
    title?: string;
    /**
     * If the checkbox is checked by default
     */
    checked?: boolean;
};

declare type RadioButtonProps = CheckboxProps & {
    /**
     * The HTML id of the radio button
     */
    id?: string;
};

declare type CardProps = PropsWithChildren<{
    /**
     * The title of the card
     */
    title?: string;
    /**
     * Classes forwarded to the `className` attribute
     */
    className?: string;
    /**
     * If the background of the card is lighter than default
     */
    lighten?: boolean;
}>;

declare type ProgressBarProps = {
    /**
     * The percentage of the progress bar (must be between 0 and 100)
     */
    percentage: number;
    /**
     * If the percentage must be shown on the progress bar
     */
    showPercentage?: boolean;
    /**
     * Size of the progress bar (default: medium)
     */
    size?: MeastSize;
    /**
     * The state of the progress bar. It changes its color
     */
    state?: MeastInputState;
};

/**
 * This is the default button.
 */
declare const Button: (props: ButtonProps) => ReactElement;

/**
 * This is the default TextField
 */
declare const TextField: (props: TextFieldProps) => ReactElement;

/**
 * This is the default checkbox
 */
declare const Checkbox: (props: CheckboxProps) => ReactElement;

/**
 * A checkbox with a tick mark (another design)
 */
declare const TickCheckbox: (props: CheckboxProps) => ReactElement;

/**
 * A checkbox like a switch (another design)
 */
declare const Switch: (props: CheckboxProps) => ReactElement;

/**
 * This is the default radio button
 */
declare const RadioButton: (props: RadioButtonProps) => ReactElement;

/**
 * This is the default card
 */
declare const Card: (props: CardProps) => ReactElement;

/**
 * This is the default progress bar
 */
declare const ProgressBar: (props: ProgressBarProps) => ReactElement;
