import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/levelcoaching/levelcoaching.webm';
import Image from '../../assets/images/projects/levelcoaching/poster.webp';

const ProjectLevelCoaching = () => {
    return (
        <>
            <ProjectHeader title="Level-coaching" description="is a company that focuses on helping children with horses." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                January 2020 (2 weeks)
                            </span>
                            <span>
                                <a href="https://level-coaching.nl" className='link' target={"_blank"}>
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
            <ProjectFooter text="De Gegrilde Buffel" uri={'/de-gegrilde-buffel'} />
        </>
    )
}

export default ProjectLevelCoaching