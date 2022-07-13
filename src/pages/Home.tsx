import { Link } from 'react-router-dom';
import ImageBetonboringengeffen from '../assets/images/projects/betonboringengeffen/index.webp';
import ImageCRM from '../assets/images/projects/crm/index.webp';
import ImageDeBerkt from '../assets/images/projects/deberkt/index.webp';
import ImageGegrildeBuffel from '../assets/images/projects/degegrildebuffel/index.webp';
import ImageGewoonSamen from '../assets/images/projects/gewoonsamen/index.webp';
import ImageKappersVanNu from '../assets/images/projects/kappersvannu/index.webp';
import ImageLevelCoaching from '../assets/images/projects/levelcoaching/index.webp';
import ImageNobinh from '../assets/images/projects/nobinh/index.webp';
import ImagePIM from '../assets/images/projects/pim/index.webp';
import ImagePraktijk212 from '../assets/images/projects/praktijk212/index.webp';
import ImageRedMijnScriptie from '../assets/images/projects/redmijnscriptie/index.webp';
import ImageRFCMaastricht from '../assets/images/projects/rfcmaastricht/index.webp';
import ImageScabtik2022 from '../assets/images/projects/scabtik2022/index.webp';
import ImageStreamly from '../assets/images/projects/streamly/index.webp';
import ImageVVD from '../assets/images/projects/vvd/index.webp';
import ImageWhereAmI from '../assets/images/projects/whereami/index.webp';
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
                    <CaseItem title="CRM-system" description='Helps you to manage your customer data.' image={ImageCRM} link="/crm-system" gradientBeginColor="rgb(1, 87, 208)" gradientEndColor="rgb(255,255,255)" />

                    <CaseItem title="Scabtik" description='Website for an upcoming Hardstyle artist.' image={ImageScabtik2022} link="/scabtik-2022" gradientBeginColor="rgb(171, 129, 95)" gradientEndColor="rgb(30, 30, 30)" />

                    <CaseItem title="VVD-kieswijzer" description='Personal election guide for the municipal elections of a political party.' image={ImageVVD} link="/vvd" gradientBeginColor="rgb(255, 100, 0)" gradientEndColor="rgb(10, 44, 202)" />

                    <CaseItem title="Praktijk 212" description='Website for a dentist in Amsterdam.' image={ImagePraktijk212} link="/praktijk212" gradientBeginColor="rgb(240, 201, 171)" gradientEndColor="rgb(213, 228, 244)" />

                    <CaseItem title="RFC Maastricht" description='Website for a medicine contest in Maastricht.' image={ImageRFCMaastricht} link="/rfc-maastricht" gradientBeginColor="rgb(60, 43, 123)" gradientEndColor="rgb(221, 45, 22)" />

                    {/* <CaseItem title="Cleanrs" description='Logo design for a cleaning company' image='' link="/cleanrs" gradientBeginColor="" gradientEndColor="" type='Concept' /> */}

                    <CaseItem title="PIM-system" description='Efficently manage product information.' image={ImagePIM} link="/pim-system" gradientBeginColor="rgb(28, 33, 44)" gradientEndColor="rgb(75, 110, 212)" />

                    <CaseItem title="Streamly" description='WebApp idea for the pandemic' image={ImageStreamly} link="/streamly" gradientBeginColor="rgb(67, 160, 154)" gradientEndColor="rgb(153, 1, 90)" type='Schoolproject' />

                    <CaseItem title="Where Am I" description='GeoGuessr Remake.' image={ImageWhereAmI} link="/streamly" gradientBeginColor="rgb(167, 190, 105)" gradientEndColor="rgb(186, 178, 169)" type='Schoolproject' />

                    <CaseItem title="De Berkt" description='Website for a neighbourhood in Veldhoven.' image={ImageDeBerkt} link="/de-berkt" gradientBeginColor="rgb(15,43,96)" gradientEndColor="rgb(184, 151, 129)" />

                    <CaseItem title="Nobinh" description='Website for a rapper.' image={ImageNobinh} link="/nobinh" gradientBeginColor="rgb(255, 140, 103)" gradientEndColor="rgb(6, 86, 156)" type='Schoolproject' />

                    <CaseItem title="Level-Coaching" description="Website for child coaching with horses." image={ImageLevelCoaching} link="/level-coaching" gradientBeginColor="rgb(234, 108, 6)" gradientEndColor="rgb(88, 95, 99)" />

                    <CaseItem title="De Gegrilde Buffel" description='Restaurant concept' image={ImageGegrildeBuffel} link="/de-gegrilde-buffel" gradientBeginColor="rgb(194, 181, 155)" gradientEndColor="rgb(62, 39, 35)" type='Schoolproject' />

                    <CaseItem title="Gewoon Samen" description='Website for helping people with physical disabilities.' image={ImageGewoonSamen} link="/gewoon-samen" gradientBeginColor="rgb(66, 164, 178)" gradientEndColor="rgb(245, 147, 181)" />

                    <CaseItem title="Betonboringen Geffen" description='Website for a concrete drilling company.' image={ImageBetonboringengeffen} link="/betonboringen-geffen" gradientBeginColor="rgb(0, 89, 68)" gradientEndColor="rgb(191, 207, 220)" />

                    <CaseItem title="Red Mijn Scriptie" description='Website for help writing a thesis.' image={ImageRedMijnScriptie} link="/red-mijn-scriptie" gradientBeginColor="rgb(226, 0, 26)" gradientEndColor="rgb(255, 220, 1)" />

                    <CaseItem title="Kappers Van Nu" description='Website for a hairdressing salon.' image={ImageKappersVanNu} link="/kappers-van-nu" gradientBeginColor="rgb(152, 151, 76)" gradientEndColor="rgb(88, 84, 82)" />
                </div>
            </div>
        </>
    )
}

export default Home