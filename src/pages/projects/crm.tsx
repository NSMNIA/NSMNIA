import STYLE from '../../assets/scss/project.module.scss';
import ProjectFooter from '../../components/ProjectFooter';
import ProjectHeader from "../../components/ProjectHeader";

import Video from '../../assets/images/projects/crm/crm.webm';
import Image from '../../assets/images/projects/crm/index.webp';

const ProjectCRM = () => {
    return (
        <>
            <ProjectHeader title="CRM" description="is a Contact Relationship Management System. It helps you to manage your customer data. It can also be used for sending quotes and invoices." image={Image} video={Video} />

            <div className="container animate--fourth">
                <div className={STYLE["project-information"]}>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Project
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                March 2022 (5 months)
                            </span>
                            <span>
                                <a href="https://crm.companyfuel.dev" className='link' target={"_blank"}>
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
                                Independent (Freelance project for <a target={"_blank"} className='link' href="https://companyfuel.nl">
                                    Company Fuel
                                </a>)
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className={STYLE["project-information--title"]}>
                            Description
                        </h2>
                        <div className={STYLE["project-information--list"]}>
                            <span>
                                The concept was an idea of Company Fuel. But I did everything from the design to the development. The project is made with React (TypeScript) and Node.js, and subscription payments are done with Stripe.
                            </span>
                        </div>
                    </div>
                </div>

                <ProjectFooter previousProject={'scabtik'} nextProject={null} />
            </div>
        </>
    )
}

export default ProjectCRM