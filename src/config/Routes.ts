import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import ProjectCRM from "../pages/projects/crm";
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
    }
];

export default routes;