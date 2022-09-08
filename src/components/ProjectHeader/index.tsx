import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import MotionDiv from '../MotionDiv';
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
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        videoRef.current?.play();
        const updateScrollCompletion = () => {
            const scrollProgress = window.scrollY;
            let extra = 400;
            if (window.innerWidth > 1920) extra = 150;
            if (scrollProgress > 0) {
                let custom = window.scrollY - extra;
                if (custom < 0) custom = 0;
                if (custom > 500) custom = 500;
                setScrollWidth(`${custom}px`);
            }
        }
        window.addEventListener('scroll', updateScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }, [])

    return (
        <div className={STYLE["project--header"]}>
            <MotionDiv className={`${STYLE["project--header-inner"]}`}>
                <h1>
                    <span>{title}</span> {description}
                </h1>
            </MotionDiv>
            <MotionDiv className={`${STYLE['project--header-scrollindicator']}`}>
                <ScrollIndicator title={title} />
            </MotionDiv>
            <MotionDiv className={`${STYLE["project--header-video"]} `} style={{ "--scroll-width": scrollWidth } as CSSProperties}>
                <video ref={videoRef} autoPlay preload="metadata" poster={image} disableRemotePlayback loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </MotionDiv>
        </div>
    )
}

export default ProjectHeader