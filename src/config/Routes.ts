import IRoute from "../interfaces/Routes";
import Home from "../pages/Home";
import ProjectBetonboringenGeffen from "../pages/projects/betonboringengeffen";
import ProjectCRM from "../pages/projects/crm";
import ProjectDeBerkt from "../pages/projects/deberkt";
import ProjectDeGegrildeBuffel from "../pages/projects/degegrildebuffel";
import ProjectGewoonSamen from "../pages/projects/gewoonsamen";
import ProjectKappersVanNu from "../pages/projects/kappersvannu";
import ProjectLevelCoaching from "../pages/projects/levelcoaching";
import ProjectNobinh from "../pages/projects/nobinh";
import ProjectPIM from "../pages/projects/pim";
import ProjectPraktijk212 from "../pages/projects/praktijk212";
import ProjectRedMijnScriptie from "../pages/projects/redmijnscriptie";
import ProjectRFCMaastricht from "../pages/projects/rfcmaastricht";
import ProjectScabtik from "../pages/projects/scabtik";
import ProjectStreamly from "../pages/projects/streamly";
import ProjectVVD from "../pages/projects/vvd";
import ProjectWhereAmI from "../pages/projects/whereAmI";
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
    }, {
        path: '/rfc-maastricht',
        element: ProjectRFCMaastricht
    }, {
        path: '/pim-system',
        element: ProjectPIM
    }, {
        path: "/streamly",
        element: ProjectStreamly
    }, {
        path: '/where-am-i',
        element: ProjectWhereAmI
    }, {
        path: '/de-berkt',
        element: ProjectDeBerkt
    }, {
        path: '/nobinh',
        element: ProjectNobinh
    }, {
        path: '/level-coaching',
        element: ProjectLevelCoaching
    }, {
        path: '/de-gegrilde-buffel',
        element: ProjectDeGegrildeBuffel
    }, {
        path: '/gewoon-samen',
        element: ProjectGewoonSamen
    }, {
        path: '/betonboringen-geffen',
        element: ProjectBetonboringenGeffen
    }, {
        path: '/red-mijn-scriptie',
        element: ProjectRedMijnScriptie
    }, {
        path: "/kappers-van-nu",
        element: ProjectKappersVanNu
    }
];

export default routes;