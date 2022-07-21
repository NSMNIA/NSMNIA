import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/scabtik2022/poster.webp';
import Video from '../../assets/images/projects/scabtik2022/scabtik.webm';

const ProjectScabtik = () => {
    return (
        <>
            <ProjectHeader title="Scabtik" description="is a rapidly upcoming hardstyle dj who wanted a website to inform his followers." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                April 2019 (2 weeks)
                            </span>
                            <span>
                                Redesign for new EP: <br /> May 2022 (1 week)
                            </span>
                            <span>
                                <a href="https://scabtik.com" className='link' target={"_blank"}>
                                    Production
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Team
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                <a href="https://www.behance.net/tommenomnom" target={"_blank"} className="link">
                                    Tom Bergman
                                </a> (Design)
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Description
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                Coded the website from scratch. Created with PHP, HTML, CSS and JavaScript.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'vvd'} nextProject={'crm-system'} />
            </div>
        </>
    )
}

export default ProjectScabtik