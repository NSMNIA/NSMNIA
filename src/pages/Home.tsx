import { Link } from 'react-router-dom';
import STYLE from '../assets/scss/home.module.scss';
import CaseItem from '../components/CaseItem';

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
                            Cases
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
                        <a href={"https://github.com/NSMNIA"} className={STYLE['work--social-link']} target={'_blank'} >
                            <span>
                                GitHub
                            </span>
                            <div className={STYLE['work--social-link--icon']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </a>
                        <a href={"https://www.linkedin.com/in/kevinstoop/"} className={STYLE['work--social-link']} target={'_blank'} >
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
            <div className={STYLE['work--projects']}>
                <div className={STYLE['work--projects-grid']}>
                    <CaseItem title="CRM-system" description='Helps you to manage your customer data.' image='/src/assets/images/projects/crm/index.webp' link="/crm-system" gradientBeginColor="rgb(1, 87, 208)" gradientEndColor="rgb(255,255,255)" />

                    <CaseItem title="Scabtik rebranding" description='Website rebranding for an upcoming Hardstyle artist.' image='/src/assets/images/projects/scabtik2022/index.webp' link="/scabtik-2022" gradientBeginColor="rgb(171, 129, 95)" gradientEndColor="rgb(30, 30, 30)" />

                    <CaseItem title="VVD-kieswijzer" description='Personal election guide for the municipal elections of a political party.' image='/src/assets/images/projects/vvd/index.webp' link="/vvd" gradientBeginColor="rgb(255, 100, 0)" gradientEndColor="rgb(10, 44, 202)" />

                    <CaseItem title="Praktijk 212" description='Website for a dentist in Amsterdam.' image='/src/assets/images/projects/praktijk212/index.webp' link="/praktijk212" gradientBeginColor="rgb(240, 201, 171)" gradientEndColor="rgb(213, 228, 244)" />

                    <CaseItem title="RFC Maastricht" description='Website for a medicine contest in Maastricht.' image='' link="/rfc-maastricht" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Cleanrs" description='Logo design for a cleaning company' image='' link="/cleanrs" gradientBeginColor="" gradientEndColor="" type='Concept' />

                    <CaseItem title="Dash." description='WebApp to make newsletters more interesting.' image='' link="/dash" gradientBeginColor="" gradientEndColor="" type='Schoolproject' />

                    <CaseItem title="PIM-system" description='Efficently manage product information.' image='' link="/pim-system" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Streamly" description='WebApp idea for the pandemic' image='' link="/streamly" gradientBeginColor="" gradientEndColor="" type='Schoolproject' />

                    <CaseItem title="Where Am I" description='GeoGuessr Remake.' image='' link="/streamly" gradientBeginColor="" gradientEndColor="" type='Schoolproject' />

                    <CaseItem title="De Berkt" description='Website for a neighbourhood in Veldhoven.' image='' link="/de-berkt" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Nobinh" description='Website for a rapper.' image='' link="/nobinh" gradientBeginColor="" gradientEndColor="" type='Schoolproject' />

                    <CaseItem title="Level-Coaching" description="Website for child coaching with horses." image='' link="/level-coaching" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="De Gegrilde Buffel" description='Restaurant concept' image='' link="/de-gegrilde-buffel" gradientBeginColor="" gradientEndColor="" type='Schoolproject' />

                    <CaseItem title="Scabtik" description='Website for an upcoming hardstyle artist.' image='' link="/scabtik" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Gewoon Samen" description='Website for helping people with physical disabilities.' image='' link="/gewoon-samen" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Betonboringen Geffen" description='Website for a concrete drilling company.' image='/src/assets/images/projects/betonboringengeffen/index.webp' link="/betonboringen-geffen" gradientBeginColor="rgb(0, 89, 68)" gradientEndColor="rgb(191, 207, 220)" />

                    <CaseItem title="Red Mijn Scriptie" description='Website for help writing a thesis.' image='' link="/red-mijn-scriptie" gradientBeginColor="" gradientEndColor="" />

                    <CaseItem title="Kappers Van Nu" description='Website for a hairdressing salon.' image='' link="/kappers-van-nu" gradientBeginColor="" gradientEndColor="" />
                </div>
            </div>
        </>
    )
}

export default Home