import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/gewoonsamen/gewoonsamen.mp4';
import Image from '../../assets/images/projects/gewoonsamen/index.webp';

const ProjectGewoonSamen = () => {
    return (
        <>
            <ProjectHeader title="Gewoon Samen" description="offers guidance and care for people with a mental and/or physical disability." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                January 2019 (1 month)
                            </span>
                            <span>
                                <a href="https://gewoon-samen.nl" className='link' target={"_blank"}>
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
                                Independent
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

                <ProjectFooter previousProject={'betonboringen-geffen'} nextProject={'de-gegrilde-buffel'} />
            </div>
        </>
    )
}

export default ProjectGewoonSamen