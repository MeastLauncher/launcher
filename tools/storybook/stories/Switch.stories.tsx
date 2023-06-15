import { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps, Switch } from '@meast/ui';

const meta = {
    title: 'Atoms/Checkboxes/Switch',
    component: Switch
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A switch input',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Success: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A success switch input',
        state: 'success',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Error: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'An error switch input',
        state: 'error',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Disabled: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A disabled switch input',
        disabled: true,
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};