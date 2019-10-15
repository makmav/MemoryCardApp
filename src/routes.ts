import {IsPC} from "./utils/utils";

type Route = {
    path: string,
    component: string,
    condition?: () => void
}


const routes: Array<Route> = [
    {
        path: '/swipeCard',
        condition: IsPC,
        component: require('./pages/swipeCard/SwipeCard').default
    },
    {
        path: '/DeviceNotMatch',
        component: require('./pages/deviceNotMatch/DeviceNotMatch').default
    },
    {
        path: '*',
        component: require('./pages/notFound/NotFound').default
    },

];
export default routes
