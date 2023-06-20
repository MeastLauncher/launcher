import React from 'react';
import { ProgressBarProps } from '../../@types';

export const ProgressBar = ({
                                showPercentage = false,
                                percentage,
                                size = 'small',
                                state = 'default',
                            }: ProgressBarProps): React.ReactElement => {
    return <div className={`progress-bar ${size}`}>
        <div className={`progress ${state}-color`} style={{width: `${percentage > 100 ? 100 : percentage}%`}}>
            {showPercentage && percentage !== 0 ? `${percentage > 100 ? 100 : percentage}%` : ''}
        </div>
    </div>
}