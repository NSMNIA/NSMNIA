import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Image from '../../assets/images/projects/pim/index.webp';
import Video from '../../assets/images/projects/pim/PIM.webm';

const ProjectPIM = () => {
    return (
        <>
            <ProjectHeader title="PIM-system" description="forms the basis of product information; from this system, data is retrieved by a web shop, an ERP system and other surrounding systems that need the product data." image={Image} video={Video} />

            <div className="container animate--fourth">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                September 2020 (4 months)
                            </span>
                            <span>
                                Production
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Team
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                <a href="https://github.com/afrobakker" target={"_blank"} className="link">
                                    Fabio Verhorstert
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Description
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                Coded the website from scratch. Created with Laravel and JavaScript.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'streamly'} nextProject={'rfc-maastricht'} />
            </div>
        </>
    )
}

export default ProjectPIM