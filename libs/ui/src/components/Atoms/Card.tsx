import React from 'react';
import { CardProps } from '../../@types';

export const Card = ({ title, children, className, lighten }: CardProps): React.ReactElement => {
    return <div className={`card ${className || ''}${lighten ? ' lighten' : ''}`}>
        {children}
    </div>
}