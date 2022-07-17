import { CSSProperties, FC, useEffect, useState } from 'react';
import ScrollIndicator from '../ScrollIndicator';
import STYLE from './projectHeader.module.scss';

interface IProjectHeader {
    title: string
    description: string
    image: string
    video: string
}

const ProjectHeader: FC<IProjectHeader> = ({ title, description, image, video }) => {
    const [scrollWidth, setScrollWidth] = useState<string>('0px');


    useEffect(() => {
        window.scrollTo(0, 0);
        const updateScrollCompletion = () => {
            const scrollProgress = window.scrollY;
            if (scrollProgress > 0) {
                setScrollWidth(`${window.scrollY - 150}px`);
            }
        }
        window.addEventListener('scroll', updateScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }, [])

    return (
        <div className={STYLE["project--header"]}>
            <div className={STYLE["project--header-inner"]}>
                <h1>
                    <span>{title}</span> {description}
                </h1>
            </div>
            <div className={STYLE['project--header-scrollindicator']}>
                <ScrollIndicator title={title} />
            </div>
            <div className={STYLE["project--header-video"]} style={{ "--scroll-width": scrollWidth } as CSSProperties}>
                <video autoPlay placeholder={image} loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div style={{ height: '3000px' }}></div>
        </div>
    )
}

export default ProjectHeader