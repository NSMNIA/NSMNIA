import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/kappersvannu/index.webp';
import Video from '../../assets/images/projects/kappersvannu/kappersvannu.webm';

const ProjectKappersVanNu = () => {
    return (
        <>
            <ProjectHeader title="Kappers Van Nu" description="is a hair salon that also offers training." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                October 2017 (3 weeks)
                            </span>
                            <span>
                                <a href="http://kappersvannu.nl/" className='link' target={"_blank"}>
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

                <ProjectFooter previousProject={null} nextProject={'red-mijn-scriptie'} />
            </div>
        </>
    )
}

export default ProjectKappersVanNu