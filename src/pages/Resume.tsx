import { useEffect } from 'react';
import ImageKevin from '../assets/images/kevin.webp';
import STYLE from '../assets/scss/resume.module.scss';
import ProjectFooter from '../components/ProjectFooter';
import { ASML, Berkt, BetonboringenGeffen, CompanyFuel, GewoonSamen, GravityMedia, KappersVanNu, LevelCoaching, PM, Praktijk212, Scabtik, VVD } from '../utils/logos';

const Resume = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={STYLE['resume']}>
            <div className={`${STYLE['resume--header']} animate--init`}>
                <div className={STYLE['resume--title-small']}>
                    A few words about me
                </div>
                <h1 className={`${STYLE['resume--title']} animate--second`}>
                    I'm Kevin Stoop, a web developer who is passionate about building web applications.
                </h1>
                <p className={`animate--third`}>
                    For the past 5 years, I have been working as a designer and web developer with large companies and young start-ups all over the Netherlands. In my free time I enjoy photography and field hockey.
                </p>
            </div>
            <div className={'animate--fourth'}>
                <div className={`${STYLE['resume--image']}`}>
                    <img src={ImageKevin} />
                </div>
                <div className={STYLE['resume--grid']}>
                    <div>
                        <div className={STYLE['resume--title-small']}>
                            Skills
                        </div>
                        <div className={STYLE['resume--grid-items']}>
                            HTML <em>/</em> CSS <em>/</em> JavaScript <em>/</em> TypeScript <em>/</em> React.js <em>/</em> Node.js <em>/</em> PHP
                        </div>
                    </div>
                    <div>
                        <div className={STYLE['resume--title-small']}>
                            Tools I use
                        </div>
                        <div className={STYLE['resume--grid-items']}>
                            Visual Studio Code <em>/</em> GitHub <em>/</em> Figma <em>/</em> Adobe Photoshop <em>/</em> Adobe Illustrator
                        </div>
                    </div>
                </div>
                <div>
                    <div className={STYLE['resume--title-small']}>
                        Education
                    </div>
                    <div className={STYLE['resume--list']}>
                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Fontys Hogeschool
                            </div>
                            <div>
                                ICT &amp; Media Design <em>/</em> Bachelor of Science
                            </div>
                            <div>
                                2019 <em>—</em> Present
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Summa College
                            </div>
                            <div>
                                ICT Applicatie- en Mediaontwikkeling <em>/</em> MBO
                            </div>
                            <div>
                                2016 <em>—</em> 2019
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Van Maerlantlyceum
                            </div>
                            <div>
                                HAVO
                            </div>
                            <div>
                                2012 <em>—</em> 2016
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={STYLE['resume--title-small']}>
                        Experience
                    </div>
                    <h2 className={STYLE['resume--title']}>
                        Over 5 years of experience
                    </h2>
                    <p>
                        I have been fortunate to build relationships with great clients from all over the Netherlands, ranging from individual clients, to emerging start-ups, to multinational companies. For more details, please visit my <a href={'https://www.linkedin.com/in/kevinstoop/'} target={"_blank"} className="link">LinkedIn profile</a>.
                    </p>
                    <div className={STYLE['resume--list']}>
                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Revolved Design
                            </div>
                            <div>
                                Co-founder &amp; Owner
                            </div>
                            <div>
                                2017 <em>—</em> Present
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Gravity Media
                            </div>
                            <div>
                                Freelance <em>/</em> Full Stack Developer
                            </div>
                            <div>
                                2021 <em>—</em> Present
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                Ninebits
                            </div>
                            <div>
                                Freelance <em>/</em> Laravel developer
                            </div>
                            <div>
                                2019 <em>—</em> 2021
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                P&amp;M
                            </div>
                            <div>
                                Freelance <em>/</em> Full Stack Developer
                            </div>
                            <div>
                                2020 <em>—</em> 2021
                            </div>
                        </div>

                        <div className={STYLE['resume--line']}>
                            <div className={STYLE['resume--line-header']}>
                                ASML
                            </div>
                            <div>
                                Internship <em>/</em> MH EDEV Electr. Design
                            </div>
                            <div>
                                2017 <em>—</em> 2018
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className={STYLE['resume--title-small']}>
                        Clients
                    </div>
                    <h2 className={STYLE['resume--title']}>
                        Some of the brands I've worked with
                    </h2>
                    <p>
                        In the past 5 years, I have had the pleasure of working with clients from different sectors on many interesting projects.
                    </p>
                    <div className={STYLE['resume--list-brands']}>
                        <div>
                            <CompanyFuel />
                        </div>
                        <div>
                            <VVD />
                        </div>
                        <div>
                            <ASML />
                        </div>
                        <div>
                            <PM />
                        </div>
                        <div>
                            <GravityMedia />
                        </div>
                        <div>
                            <GewoonSamen />
                        </div>
                        <div>
                            <BetonboringenGeffen />
                        </div>
                        <div>
                            <Praktijk212 />
                        </div>
                        <div>
                            <Scabtik />
                        </div>
                        <div>
                            <Berkt />
                        </div>
                        <div>
                            <LevelCoaching />
                        </div>
                        <div>
                            <KappersVanNu />
                        </div>
                    </div>
                </div>
            </div>
            <ProjectFooter previousProject={null} nextProject={null} />
        </div>
    )
}

export default Resume