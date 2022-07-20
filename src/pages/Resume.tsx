import { useEffect } from 'react';
import ImageKevin from '../assets/images/kevin.webp';
import STYLE from '../assets/scss/resume.module.scss';

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
                <p className={`${STYLE['resume--paragraph']} animate--third`}>
                    For the past 6 years, I have been working as a designer and web developer with large companies and young start-ups all over the Netherlands. In my free time I enjoy photography and field hockey.
                </p>
            </div>
            <div className={`${STYLE['resume--image']} animate--fourth`}>
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
            <p>
                I currently work as a web developer for my own company. With this company I also work as a freelancer for various companies. I enjoy helping companies/brands discover new ways to drive change through digital products that matter, and I believe that one of the best parts of being a developer is being able to work closely with so many different people, teams and functions within a company.
            </p>
        </div >
    )
}

export default Resume