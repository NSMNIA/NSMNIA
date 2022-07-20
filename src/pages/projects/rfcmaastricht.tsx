import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/rfcmaastricht/index.webp';
import Video from '../../assets/images/projects/rfcmaastricht/rfcmaastricht.webm';

const ProjectRFCMaastricht = () => {
    return (
        <>
            <ProjectHeader title="RFC Maastricht" description="is a contest for medical students. On this site they can get the information about the previous and upcoming editions." image={Image} video={Video} />

            <div className="container animate--fourth">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                December 2020 (1 week)
                            </span>
                            <span>
                                <a href="https://rfcmaastricht.nl" className='link' target={"_blank"}>
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

                <ProjectFooter previousProject={'pim-system'} nextProject={'praktijk212'} />
            </div>
        </>
    )
}

export default ProjectRFCMaastricht