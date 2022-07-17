import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import ProjectCRM from "../pages/projects/crm";
import ProjectScabtik from "../pages/projects/scabtik";
import Resume from "../pages/Resume";

const routes: IRoute[] = [
    {
        path: '/',
        element: Home
    }, {
        path: '/resume',
        element: Resume
    }, {
        path: '/crm-system',
        element: ProjectCRM
    }, {
        path: '/scabtik',
        element: ProjectScabtik
    }
];

export default routes;