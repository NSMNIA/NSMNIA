import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/whereami/poster.webp';
import Video from '../../assets/images/projects/whereami/whereami.webm';

const ProjectWhereAmI = () => {
    return (
        <>
            <ProjectHeader title="Where Am I?" description="is a game where you have to guess where you were dropped." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                March 2020 (1 day)
                            </span>
                            <span>
                                Schoolproject
                            </span>
                            <span>
                                Challenge
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
                                Coded the game from scratch with the Google Maps API. Created with HTML, CSS and JavaScript.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'de-berkt'} nextProject={'streamly'} />
            </div>
        </>
    )
}

export default ProjectWhereAmI