import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/redmijnscriptie/poster.webp';
import Video from '../../assets/images/projects/redmijnscriptie/redmijnscriptie.webm';

const ProjectRedMijnScriptie = () => {
    return (
        <>
            <ProjectHeader title="Red Mijn Scriptie" description="offers help with writing a thesis or study." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                August 2018 (3 weeks)
                            </span>
                            <span>
                                <a href="http://redmijnscriptie.nl/" className='link' target={"_blank"}>
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

                <ProjectFooter previousProject={'kappers-van-nu'} nextProject={'betonboringen-geffen'} />
            </div>
        </>
    )
}

export default ProjectRedMijnScriptie