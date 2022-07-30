import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/praktijk212/poster.webp';
import Video from '../../assets/images/projects/praktijk212/praktijk212.webm';

const ProjectPraktijk212 = () => {
    return (
        <>
            <ProjectHeader title="Praktijk 212" description="is a dental practice in Amsterdam. They wanted a unique website to match their style." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                December 2021 (2 weeks)
                            </span>
                            <span>
                                <a href="https://tandartspraktijk212.nl" className='link' target={"_blank"}>
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
            </div>
            <ProjectFooter text="PIM system" uri={'/pim-system'} />
        </>
    )
}

export default ProjectPraktijk212