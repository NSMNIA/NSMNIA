import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/degegrildebuffel/degegrildebuffel.mp4';
import Image from '../../assets/images/projects/degegrildebuffel/index.webp';

const ProjectDeGegrildeBuffel = () => {
    return (
        <>
            <ProjectHeader title="De Gegrilde Buffel" description="is a concept website for a restaurant." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                September 2019 (1 week)
                            </span>
                            <span>
                                Schoolproject
                            </span>
                            <span>
                                Concept
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
                                Coded the website from scratch. Created with HTML, CSS and JavaScript.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'gewoon-samen'} nextProject={'level-coaching'} />
            </div>
        </>
    )
}

export default ProjectDeGegrildeBuffel