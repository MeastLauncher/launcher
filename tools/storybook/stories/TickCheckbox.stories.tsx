import type { Meta, StoryObj } from '@storybook/react';
import { TickCheckbox, type CheckboxProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Checkboxes/TickCheckbox',
    component: TickCheckbox
} satisfies Meta<typeof TickCheckbox>;

export default meta;

type Story = StoryObj<typeof TickCheckbox>;

export const Default: Story = {
    args: {
        name: 'tick-checkbox',
        label: 'A tick checkbox',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};
