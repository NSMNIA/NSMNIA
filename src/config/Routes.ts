import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

const routes: IRoute[] = [
    {
        path: '/',
        element: Home
    }, {
        path: '/resume',
        element: Resume
    }
];

export default routes;