import { useEffect } from 'react';
import STYLE from './hero.module.scss';

type Props = {}

const Hero = (props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={STYLE["hero"]}>
            <div className={STYLE["hero--inner"]}>
                <h1>
                    Kevin Stoop
                </h1>
                <h2>
                    Web developer with a passion for building beautiful, functional websites.
                </h2>
            </div>
        </div>
    )
}

export default Hero