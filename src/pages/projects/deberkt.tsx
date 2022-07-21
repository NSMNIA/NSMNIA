import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/deberkt/deberkt.webm';
import Image from '../../assets/images/projects/deberkt/poster.webp';

const ProjectDeBerkt = () => {
    return (
        <>
            <ProjectHeader title="De Berkt" description="is a website for a neighbourhood community." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                Maart 2020 (2 weeks)
                            </span>
                            <span>
                                <a href="https://deberkt.nl/" target={"_blank"} className="link">
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

                <ProjectFooter previousProject={'nobinh'} nextProject={'where-am-i'} />
            </div>
        </>
    )
}

export default ProjectDeBerkt