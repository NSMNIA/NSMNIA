import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import ProjectCRM from "../pages/projects/crm";
import ProjectScabtik from "../pages/projects/scabtik";
import ProjectVVD from "../pages/projects/vvd";
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
    }, {
        path: '/vvd',
        element: ProjectVVD
    }
];

export default routes;