import STYLE from '../../assets/scss/project.module.scss';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/betonboringengeffen/betonboringengeffen.webm';
import Image from '../../assets/images/projects/betonboringengeffen/poster.webp';
import ProjectFooter from '../../components/ProjectFooter';

const ProjectBetonboringenGeffen = () => {
    return (
        <>
            <ProjectHeader title="Betonboringen Geffen" description="is a company that specializes in concrete and stone, concrete drilling, concrete saws, chopping and milling, fastening technology and demolition work." image={Image} video={Video} />

            <div className="container">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                December 2018 (1 week)
                            </span>
                            <span>
                                <a href="http://betonboringengeffen.nl" className='link' target={"_blank"}>
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
            <ProjectFooter text="CRM System" uri={'/crm-system'} />
        </>
    )
}

export default ProjectBetonboringenGeffen