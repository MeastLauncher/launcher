import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        name: 'button',
        label: 'A button',
    } satisfies ButtonProps
}

export const Success: Story = {
    args: {
        name: 'button',
        label: 'A success button',
        state: 'success'
    } satisfies ButtonProps
}

export const Error: Story = {
    args: {
        name: 'button',
        label: 'An error button',
        state: 'error'
    } satisfies ButtonProps
}

export const Disabled: Story = {
    args: {
        name: 'button',
        label: 'A disabled button',
        disabled: 'true' as boolean
    } satisfies ButtonProps
}

export const WithIcon: Story = {
    args: {
        name: 'button',
        label: 'A button with icon',
        icon: 'fa-solid fa-house'
    } satisfies ButtonProps
}