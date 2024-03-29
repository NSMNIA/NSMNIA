import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/vvd/poster.webp';
import Video from '../../assets/images/projects/vvd/vvd.webm';

const ProjectVVD = () => {
    return (
        <>
            <ProjectHeader title="VVD" description="wanted a personal election guide for the 2022 municipal elections." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                February (2 weeks)
                            </span>
                            <span>
                                <a href="https://vvdkieswijzer.nl/" className='link' target={"_blank"}>
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
                                Independent (Freelance project for <a href="https://gravitymedia.nl" target={"_blank"} className="link">Gravity Media</a>)
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Description
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                Coded the website from scratch. Created with PHP, HTML, CSS and TypeScript.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectFooter text="Praktijk 212" uri={'/praktijk212'} />
        </>
    )
}

export default ProjectVVD