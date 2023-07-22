import type { ReactElement } from 'react';
import type { CardProps } from '../../@types';

export const Card = ({
    children,
    className,
    lighten
}: CardProps): ReactElement => {
    return (
        <div className={`card ${className || ''}${lighten ? ' lighten' : ''}`}>
            {children}
        </div>
    );
};
