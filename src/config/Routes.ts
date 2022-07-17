import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import ProjectCRM from "../pages/projects/crm";
import ProjectPraktijk212 from "../pages/projects/praktijk212";
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
    }, {
        path: 'praktijk212',
        element: ProjectPraktijk212
    }
];

export default routes;