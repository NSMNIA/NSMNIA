import { FC } from 'react'
import { Link } from 'react-router-dom'
import STYLE from './projectFooter.module.scss'

interface IProjectFooter {
    previousProject: string | null,
    nextProject: string | null,
}

const ProjectFooter: FC<IProjectFooter> = ({ previousProject, nextProject }) => {
    return (
        <div className={STYLE['footer']}>
            <div className={STYLE['footer--links']}>
                {nextProject && (
                    <Link to={`/${nextProject}`} className={STYLE['footer--link']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        <span>
                            Next project
                        </span>
                    </Link>
                )}
                {previousProject && (
                    <Link to={`/${previousProject}`} className={STYLE['footer--link']}>
                        <span>
                            Previous project
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                )}
            </div>
            <Link to={'/'} className={STYLE['footer--logo']}>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className={STYLE['footer--logo-background']} fill="currentColor" width="40" height="40" />
                    <path d="M26.3999 32.2624C27.2063 33.0688 28.3839 33.6192 30.0223 33.6192C32.3263 33.6192 33.4399 32.4416 33.4399 30.88C33.4399 28.9856 31.6479 28.5632 30.2399 28.2432C29.2543 28.0128 28.5375 27.8336 28.5375 27.2576C28.5375 26.7456 28.9727 26.3872 29.7919 26.3872C30.6239 26.3872 31.5455 26.6816 32.2367 27.3216L33.2479 25.9904C32.4031 25.2096 31.2767 24.8 29.9199 24.8C27.9103 24.8 26.6815 25.952 26.6815 27.3728C26.6815 29.28 28.4735 29.664 29.8687 29.984C30.8543 30.2144 31.5967 30.432 31.5967 31.072C31.5967 31.5584 31.1103 32.032 30.1119 32.032C28.9343 32.032 27.9999 31.5072 27.3983 30.88L26.3999 32.2624Z" className={STYLE['footer--logo-foreground']} fill="currentColor" />
                    <path d="M12.9589 15L9.90132 10.4894L12.8021 6.52518H10.4277L8.13172 10.0066V6.52518H6.20532V15H8.13172V12.5224L8.63572 11.8108L10.5957 15H12.9589Z" className={STYLE['footer--logo-foreground']} fill="currentColor" />
                    <line className={STYLE['footer--logo-foreground']} stroke="currentColor" x1="6.39993" y1="29.4" x2="16.7999" y2="29.4" strokeWidth="1" />
                </svg>
            </Link>
        </div>
    )
}

export default ProjectFooter