import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useScrollingPos from "../../hooks/useScrollingPos";
import STYLE from './navigation.module.scss';

type Props = {}

const Navigation = (props: Props) => {
    const scrolled = useScrollingPos();
    const [theme, setTheme] = useState<any>(sessionStorage.getItem('theme') === null ? (document.body.classList.contains('dark-mode') ? 'dark' : 'light') : sessionStorage.getItem('theme'));

    useEffect(() => {
        setTheme(sessionStorage.getItem('theme') === null ? (document.body.classList.contains('dark-mode') ? 'dark' : 'light') : sessionStorage.getItem('theme'));
    }, [theme]);


    const switchTheme = () => {
        if (theme === 'light') {
            document.body.classList.add('dark-mode');
            sessionStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.body.classList.remove('dark-mode');
            sessionStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }

    return (
        <div className={STYLE['sidebar']}>
            <div className={STYLE['sidebar--inner']}>
                <NavLink to="/" className={STYLE["logo"]} aria-label="Homepage">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className={STYLE["black"]} width="40" height="40" />
                        <path d="M26.3999 32.2624C27.2063 33.0688 28.3839 33.6192 30.0223 33.6192C32.3263 33.6192 33.4399 32.4416 33.4399 30.88C33.4399 28.9856 31.6479 28.5632 30.2399 28.2432C29.2543 28.0128 28.5375 27.8336 28.5375 27.2576C28.5375 26.7456 28.9727 26.3872 29.7919 26.3872C30.6239 26.3872 31.5455 26.6816 32.2367 27.3216L33.2479 25.9904C32.4031 25.2096 31.2767 24.8 29.9199 24.8C27.9103 24.8 26.6815 25.952 26.6815 27.3728C26.6815 29.28 28.4735 29.664 29.8687 29.984C30.8543 30.2144 31.5967 30.432 31.5967 31.072C31.5967 31.5584 31.1103 32.032 30.1119 32.032C28.9343 32.032 27.9999 31.5072 27.3983 30.88L26.3999 32.2624Z" className={STYLE["white"]} />
                        <path d="M12.9589 15L9.90132 10.4894L12.8021 6.52518H10.4277L8.13172 10.0066V6.52518H6.20532V15H8.13172V12.5224L8.63572 11.8108L10.5957 15H12.9589Z" className={STYLE["white"]} />
                        <line className={STYLE["white--stroke"]} x1="6.39993" y1="29.4" x2="16.7999" y2="29.4" strokeWidth="1" />
                    </svg>
                </NavLink>
                <div className={STYLE['sidebar--progress']}>
                    <div className={STYLE['sidebar--progress-scrolled']} style={{ ['--progress' as any]: `${scrolled}%` }}></div>
                </div>
                <div className={STYLE['sidebar--bottom']}>
                    <div className={STYLE['sidebar--links']}>
                        <NavLink to="/" className={STYLE["sidebar--link"]}>
                            Work
                        </NavLink>
                        <NavLink to="/resume" className={STYLE["sidebar--link"]}>
                            Resume
                        </NavLink>
                        <button className={STYLE['switch-theme']} aria-label="Toggle light/dark mode" onClick={switchTheme}>
                            {theme === 'dark' ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            </> : <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation