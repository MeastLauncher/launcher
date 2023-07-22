import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        name: 'button',
        label: 'A button',
        title: 'A simple button'
    } satisfies ButtonProps
};

export const Success: Story = {
    args: {
        name: 'button',
        label: 'A success button',
        state: 'success',
        title: 'A success button'
    } satisfies ButtonProps
};

export const Error: Story = {
    args: {
        name: 'button',
        label: 'An error button',
        state: 'error',
        title: 'An error button'
    } satisfies ButtonProps
};

export const Disabled: Story = {
    args: {
        name: 'button',
        label: 'A disabled button',
        disabled: true,
        title: 'A disabled button'
    } satisfies ButtonProps
};

export const WithIcon: Story = {
    args: {
        name: 'button',
        label: 'A button with icon',
        icon: 'fa-solid fa-house',
        title: 'A button with icon'
    } satisfies ButtonProps
};
