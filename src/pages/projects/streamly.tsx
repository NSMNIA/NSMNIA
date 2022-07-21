import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/streamly/index.webp';
import Video from '../../assets/images/projects/streamly/streamly2.webm';

const ProjectStreamly = () => {
    return (
        <>
            <ProjectHeader title="Streamly" description="is a WebApp that shows the offer of the online festivals in the lockdown of Covid-19." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                April 2020 (2 weeks)
                            </span>
                            <span>
                                Schoolproject
                            </span>
                            <span>
                                Develop concept
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
                                Coded the webapp from scratch. Created with PHP, HTML, CSS and JavaScript.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'where-am-i'} nextProject={'pim-system'} />
            </div>
        </>
    )
}

export default ProjectStreamly