import { useEffect, useState } from 'react';
import ImageKevin from '../assets/images/kevin.webp';
import STYLE from '../assets/scss/resume.module.scss';
import MotionDiv from "../components/MotionDiv";
import ProjectFooter from '../components/ProjectFooter';
import { ASML, Berkt, BetonboringenGeffen, CompanyFuel, GewoonSamen, GravityMedia, KappersVanNu, LevelCoaching, PM, Praktijk212, Scabtik, VVD } from '../utils/logos';

const Resume = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={STYLE['resume']}>
            <div className={`header`}>
                <MotionDiv
                    className={'title-small'}>
                    A few words about me
                </MotionDiv>
                <MotionDiv>
                    <h1 className={'title'}>
                        I am Kevin Stoop, a designer and Full Stack Developer from the Netherlands.
                    </h1>
                </MotionDiv>
                <MotionDiv>
                    <p className={'text'}>
                        For the past 5 years, I have worked as a designer and Full Stack Developer at large companies and young start-ups throughout the Netherlands. In my free time I enjoy photography and hockey.
                    </p>
                </MotionDiv>
            </div>
            <div className={''}>
                <MotionDiv className={`${STYLE['resume--image']}`}>
                    <img
                        onLoad={() => setIsLoaded(true)}
                        style={{ opacity: isLoaded ? 1 : 0 }}
                        src={ImageKevin} alt="Kevin" />
                </MotionDiv>
                <MotionDiv className={STYLE['resume--grid']}>
                    <div>
                        <div className='title-small'>
                            Skills
                        </div>
                        <div className={STYLE['resume--grid-items']}>
                            HTML <em>/</em> CSS <em>/</em> JavaScript <em>/</em> TypeScript <em>/</em> React.js <em>/</em> Node.js <em>/</em> PHP <em>/</em> SQL
                        </div>
                    </div>
                    <div>
                        <div className={`title-small`}>
                            Tools I use
                        </div>
                        <div className={STYLE['resume--grid-items']}>
                            Visual Studio Code <em>/</em> GitHub <em>/</em> Figma <em>/</em> Adobe Photoshop <em>/</em> Adobe Illustrator
                        </div>
                    </div>
                </MotionDiv>
                <div>
                    <MotionDiv className={`title-small`}>
                        Studies
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className={`title`}>
                            Education
                        </h2>
                    </MotionDiv>
                    <div className={STYLE['resume--list']}>
                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Fontys Hogeschool
                            </div>
                            <div>
                                ICT &amp; Media Design <em>/</em> Bachelor of Science
                            </div>
                            <div>
                                2019 <em>—</em> Present
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Summa College
                            </div>
                            <div>
                                ICT Applicatie- en Mediaontwikkeling <em>/</em> MBO
                            </div>
                            <div>
                                2016 <em>—</em> 2019
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Van Maerlantlyceum
                            </div>
                            <div>
                                HAVO
                            </div>
                            <div>
                                2012 <em>—</em> 2016
                            </div>
                        </MotionDiv>
                    </div>
                </div>
                <div>
                    <MotionDiv className={`title-small`}>
                        Experience
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className={`title`}>
                            Over 5 years of experience
                        </h2>
                    </MotionDiv>
                    <MotionDiv>
                        <p>
                            I have been fortunate to build relationships with great clients from all over the Netherlands, ranging from individual clients to emerging start-ups and multinationals. For more details, please visit my <a href={'https://www.linkedin.com/in/kevinstoop/'} target={"_blank"} className="link">LinkedIn profile</a>.
                        </p>
                    </MotionDiv>
                    <div className={STYLE['resume--list']}>
                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Revolved Design
                            </div>
                            <div>
                                Co-founder &amp; Owner
                            </div>
                            <div>
                                2017 <em>—</em> Present
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Gravity Media
                            </div>
                            <div>
                                Freelance <em>/</em> Full Stack Developer
                            </div>
                            <div>
                                2021 <em>—</em> Present
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                P&amp;M
                            </div>
                            <div>
                                Freelance <em>/</em> Full Stack Developer
                            </div>
                            <div>
                                2020 <em>—</em> 2021
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Ninebits
                            </div>
                            <div>
                                Freelance <em>/</em> Laravel developer
                            </div>
                            <div>
                                2019 <em>—</em> 2021
                            </div>
                        </MotionDiv>

                        <MotionDiv className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                ASML
                            </div>
                            <div>
                                Internship <em>/</em> MH EDEV Electr. Design
                            </div>
                            <div>
                                2017 <em>—</em> 2018
                            </div>
                        </MotionDiv>

                    </div>
                </div>
                <div>
                    <MotionDiv className={`title-small`}>
                        Clients
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className={`title`}>
                            Some of the brands I have worked with
                        </h2>
                    </MotionDiv>
                    <MotionDiv>
                        <p>
                            In the past 5 years, I have had the pleasure of working with clients from different sectors on many interesting projects.
                        </p>
                    </MotionDiv>
                    <div className={STYLE['resume--list-brands']}>
                        <MotionDiv>
                            <CompanyFuel />
                        </MotionDiv>
                        <MotionDiv>
                            <VVD />
                        </MotionDiv>
                        <MotionDiv>
                            <ASML />
                        </MotionDiv>
                        <MotionDiv>
                            <PM />
                        </MotionDiv>
                        <MotionDiv>
                            <GravityMedia />
                        </MotionDiv>
                        <MotionDiv>
                            <GewoonSamen />
                        </MotionDiv>
                        <MotionDiv>
                            <BetonboringenGeffen />
                        </MotionDiv>
                        <MotionDiv>
                            <Praktijk212 />
                        </MotionDiv>
                        <MotionDiv>
                            <Scabtik />
                        </MotionDiv>
                        <MotionDiv>
                            <Berkt />
                        </MotionDiv>
                        <MotionDiv>
                            <LevelCoaching />
                        </MotionDiv>
                        <MotionDiv>
                            <KappersVanNu />
                        </MotionDiv>
                    </div>
                </div>
                <div className={STYLE['border-top']}>
                    <MotionDiv className={`title-small`}>
                        Contact
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className={`title`}>
                            Let's get in touch
                        </h2>
                    </MotionDiv>
                    <MotionDiv>
                        <p>
                            If you have any questions, please don't hesitate to contact me.
                        </p>
                    </MotionDiv>
                    <ul>
                        <li>
                            <p>
                                E: <a href={'mailto:kevinstoop9@gmail.com'} className="link">
                                    kevinstoop9@gmail.com
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                P: <a href={'tel:+31620784228'} className="link">
                                    +31 6 20 78 42 28
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href={'https://www.linkedin.com/in/kevinstoop/'} target={"_blank"} className="link">
                                    LinkedIn
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href={'https://github.com/NSMNIA'} target={"_blank"} className="link">
                                    GitHub
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <ProjectFooter text="My selected work" uri={'/work'} />
        </div>
    )
}

export default Resume