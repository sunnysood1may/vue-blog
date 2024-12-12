import { createRouter, createWebHistory } from "vue-router";
import HomeComp from './components/Home';
import HelloWorld from './components/HelloWorld';
import LoginC from './components/Login';
import CssB from './components/CssB';
import PropsC from './components/Props';
import RefC from './components/Ref';

const routes=[
    {
        name: 'HomeComp',
        component: HomeComp ,
        path: '/home'
    },
    {
        name: 'LoginC',
        path: '/login',
        component: LoginC
    },
    {
        name: 'HelloWorld',
        component: HelloWorld ,
        path: '/HelloWorld'
    },
    {
        name: 'CssB',
        component: CssB ,
        path: '/cssBinding'
    },
    {
        name: 'PropsC',
        component: PropsC ,
        path: '/props'
    }
    ,
    {
        name: 'RefC',
        component: RefC ,
        path: '/ref'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;