import { Meta, StoryObj } from '@storybook/react';
import { TextField, type TextFieldProps } from '@meast/ui';

const meta = {
    title: 'Atoms/TextField',
    component: TextField,
    tags: ['autodocs']
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps,
}

export const Success: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'success',
        onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps
}

export const Error: Story = {
    args: {
        name: 'input',
            title: 'An input',
            placeholder: 'Input placeholder',
            inputType: 'text',
            state: 'error',
            onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps
}

export const Disabled: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        disabled: 'true' as boolean,
        onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps
}

export const WithLabel: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        label: 'Label of the field',
        onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps
}

export const WithIcons: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        iconLeft: 'fa-solid fa-envelope',
        iconRight: 'fa-solid fa-check',
        onChange: e => console.log(e.target.value),
    } satisfies TextFieldProps
}