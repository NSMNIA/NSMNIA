import { FC } from 'react';
import STYLE from './scrollIndicator.module.scss';

interface IScrollIndicator {
    title: string
}

const ScrollIndicator: FC<IScrollIndicator> = ({ title }) => {
    return (
        <div className={STYLE['scroll-indicator']}>
            <div className={STYLE['scroll-indicator--title']}>
                {title}
            </div>
            <div className={STYLE['scroll-indicator--bar']}>
                <div className={STYLE['scroll-indicator--bar-animation']}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator