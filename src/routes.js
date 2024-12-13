import { createRouter, createWebHistory } from "vue-router";
import HomeComp from './components/Home';
import HelloWorld from './components/HelloWorld';
import LoginC from './components/Login';
import CssB from './components/CssB';
import PropsC from './components/Props';
import RefC from './components/Ref';
import SimpleForm from './components/SimpleForm';
import FormModifier from './components/FormModifier';
import NonProp from './components/NonProp';
import ComputedProperty from './components/ComputedProperty';
import WatcherS from './components/WatcherS';

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
    },
    {
        name: 'RefC',
        component: RefC ,
        path: '/ref'
    },
    {
        name: 'SimpleForm',
        component: SimpleForm ,
        path: '/simpleForm'
    },
    {
        name: 'FormModifier',
        component: FormModifier ,
        path: '/formModifier'
    },
    {
        name: 'NonProp',
        component: NonProp ,
        path: '/nonProp'
    },
    {
        name: 'ComputedProperty',
        component: ComputedProperty ,
        path: '/computedProperty'
    },
    {
        name: 'WatcherS',
        component: WatcherS ,
        path: '/watchers'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;