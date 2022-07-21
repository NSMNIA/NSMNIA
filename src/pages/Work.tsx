import { useEffect } from 'react';
import ImageBetonboringengeffen from '../assets/images/projects/betonboringengeffen/index.webp';
import ImageCRM from '../assets/images/projects/crm/index.webp';
import ImageGegrildeBuffel from '../assets/images/projects/degegrildebuffel/index.webp';
import ImageGewoonSamen from '../assets/images/projects/gewoonsamen/index.webp';
import ImageLevelCoaching from '../assets/images/projects/levelcoaching/index.webp';
import ImageNobinh from '../assets/images/projects/nobinh/index.webp';
import ImagePIM from '../assets/images/projects/pim/index.webp';
import ImagePraktijk212 from '../assets/images/projects/praktijk212/index.webp';
import ImageScabtik2022 from '../assets/images/projects/scabtik2022/index.webp';
import ImageStreamly from '../assets/images/projects/streamly/index.webp';
import ImageVVD from '../assets/images/projects/vvd/index.webp';
import ImageWhereAmI from '../assets/images/projects/whereami/index.webp';
import STYLE from '../assets/scss/work.module.scss';
import CaseItem from '../components/CaseItem';
import ProjectFooter from '../components/ProjectFooter';
import ScrollIndicator from '../components/ScrollIndicator';

type Props = {}

const Home = (props: Props) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <>
            <div className='container'>
                <div className={`header`}>
                    <div className={'title-small'}>
                        Selected work
                    </div>
                    <h1 className={`title`}>
                        Some of the projects I have worked on
                    </h1>

                    <div className='header--scroll '>
                        <ScrollIndicator title='Scroll down' />
                    </div>
                </div>
            </div>
            <div className={`${STYLE['work--projects']}`}>
                <div className={STYLE['work--projects-grid']}>
                    <CaseItem title="CRM-system" description='Helps you to manage your customer data.' image={ImageCRM} link="/crm-system" gradientBeginColor="rgb(1, 87, 208)" gradientEndColor="rgb(255,255,255)" />

                    <CaseItem title="Scabtik" description='Website for an upcoming Hardstyle artist.' image={ImageScabtik2022} link="/scabtik" gradientBeginColor="rgb(171, 129, 95)" gradientEndColor="rgb(30, 30, 30)" />

                    <CaseItem title="VVD-kieswijzer" description='Personal election guide for the municipal elections of a political party.' image={ImageVVD} link="/vvd" gradientBeginColor="rgb(255, 100, 0)" gradientEndColor="rgb(10, 44, 202)" />

                    <CaseItem title="Praktijk 212" description='Website for a dentist in Amsterdam.' image={ImagePraktijk212} link="/praktijk212" gradientBeginColor="rgb(240, 201, 171)" gradientEndColor="rgb(213, 228, 244)" />

                    {/* <CaseItem title="RFC Maastricht" description='Website for a medicine contest in Maastricht.' image={ImageRFCMaastricht} link="/rfc-maastricht" gradientBeginColor="rgb(60, 43, 123)" gradientEndColor="rgb(221, 45, 22)" /> */}

                    <CaseItem title="PIM-system" description='Efficently manage product information.' image={ImagePIM} link="/pim-system" gradientBeginColor="rgb(28, 33, 44)" gradientEndColor="rgb(75, 110, 212)" />

                    <CaseItem title="Streamly" description='WebApp idea for the pandemic' image={ImageStreamly} link="/streamly" gradientBeginColor="rgb(67, 160, 154)" gradientEndColor="rgb(153, 1, 90)" type='Schoolproject' />

                    <CaseItem title="Where Am I" description='GeoGuessr Remake.' image={ImageWhereAmI} link="/where-am-i" gradientBeginColor="rgb(167, 190, 105)" gradientEndColor="rgb(186, 178, 169)" type='Schoolproject' />

                    {/* <CaseItem title="De Berkt" description='Website for a neighbourhood in Veldhoven.' image={ImageDeBerkt} link="/de-berkt" gradientBeginColor="rgb(15,43,96)" gradientEndColor="rgb(184, 151, 129)" /> */}

                    <CaseItem title="Nobinh" description='Website for a rapper.' image={ImageNobinh} link="/nobinh" gradientBeginColor="rgb(255, 140, 103)" gradientEndColor="rgb(6, 86, 156)" type='Schoolproject' />

                    <CaseItem title="Level-Coaching" description="Website for child coaching with horses." image={ImageLevelCoaching} link="/level-coaching" gradientBeginColor="rgb(234, 108, 6)" gradientEndColor="rgb(88, 95, 99)" />

                    <CaseItem title="De Gegrilde Buffel" description='Restaurant concept' image={ImageGegrildeBuffel} link="/de-gegrilde-buffel" gradientBeginColor="rgb(194, 181, 155)" gradientEndColor="rgb(62, 39, 35)" type='Schoolproject' />

                    <CaseItem title="Gewoon Samen" description='Website for helping people with physical disabilities.' image={ImageGewoonSamen} link="/gewoon-samen" gradientBeginColor="rgb(66, 164, 178)" gradientEndColor="rgb(245, 147, 181)" />

                    <CaseItem title="Betonboringen Geffen" description='Website for a concrete drilling company.' image={ImageBetonboringengeffen} link="/betonboringen-geffen" gradientBeginColor="rgb(0, 89, 68)" gradientEndColor="rgb(191, 207, 220)" />

                    {/* <CaseItem title="Red Mijn Scriptie" description='Website for help writing a thesis.' image={ImageRedMijnScriptie} link="/red-mijn-scriptie" gradientBeginColor="rgb(226, 0, 26)" gradientEndColor="rgb(255, 220, 1)" /> */}

                    {/* <CaseItem title="Kappers Van Nu" description='Website for a hairdressing salon.' image={ImageKappersVanNu} link="/kappers-van-nu" gradientBeginColor="rgb(152, 151, 76)" gradientEndColor="rgb(88, 84, 82)" /> */}
                </div>
            </div>
            <div className="container">
                <ProjectFooter nextProject={null} previousProject={null} />
            </div>
        </>
    )
}

export default Home