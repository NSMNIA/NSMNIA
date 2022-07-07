import { Link } from 'react-router-dom';
import STYLE from '../assets/scss/home.module.scss';

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <div className={STYLE["hero"]}>
                <div className={STYLE["hero--inner"]}>
                    <h1>
                        Kevin Stoop — Webdeveloper
                    </h1>
                    <h2>
                        passionate about digital products that help people experience everyday life, not endure it.
                    </h2>
                </div>
            </div>
            <div className={STYLE['work']}>
                <div className={STYLE['work--grid']}>
                    <div className={STYLE['work--selected']}>
                        <div className={STYLE['work--selected-title']}>
                            Work
                        </div>
                        <div className={STYLE['work--selected-bar']}>
                            <div className={STYLE['work--selected-bar-animation']}></div>
                        </div>
                    </div>
                    <div className={STYLE['work--social']}>
                        <Link to="/resume" className={STYLE['work--social-link']}>
                            <span>
                                Resume
                            </span>
                            <div className={STYLE['work--social-link--icon']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </Link>
                        <a href="https://www.linkedin.com/in/kevinstoop/" className={STYLE['work--social-link']} target={'_blank'} rel="nofollow">
                            <span>
                                LinkedIn
                            </span>
                            <div className={STYLE['work--social-link--icon']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ height: '200vh' }}></div>
        </>
    )
}

export default Home