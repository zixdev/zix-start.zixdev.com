import AuthRoutes from "./auth";
import PageRoutes from "./pages";
import MemberRoutes from "./member";


export default [

    ...AuthRoutes,
    ...MemberRoutes,


    ...PageRoutes
];
