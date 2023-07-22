import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, type CheckboxProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Checkboxes/Checkbox',
    component: Checkbox,
    tags: ['autodocs']
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        name: 'checkbox',
        label: 'Label of the checkbox',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Success: Story = {
    args: {
        name: 'checkbox',
        label: 'Label of the checkbox',
        state: 'success',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Error: Story = {
    args: {
        name: 'checkbox',
        label: 'Label of the checkbox',
        state: 'error',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Disabled: Story = {
    args: {
        name: 'checkbox',
        label: 'Label of the checkbox',
        disabled: true,
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};
