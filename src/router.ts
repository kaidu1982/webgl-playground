import type { RouteParams, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import MainTemplate from '@/layout/MainTemplate.vue';
import ImageToAscii from '@/pages/ImageToAscii.vue';
import WaveFunctionCollapse from '@/pages/WaveFunctionCollapse.vue';
import CameraToAscii from '@/pages/CameraToAscii.vue';
import BoxExample from "@/pages/BoxExample.vue";
import Hexagon from "@/pages/Hexagon.vue";

export type AppRouteNames =
'Hexagon'    | 'BoxExample';


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/pages',
        component: MainTemplate,
        children: [
            {
                name: 'BoxExample',
                path: 'boxExample',
                component: BoxExample,
            },
            {
                name: 'Hexagon',
                path: 'hexagon',
                component: Hexagon,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export function routerPush(
    name: AppRouteNames,
    params?: RouteParams
): ReturnType<typeof router.push> {
    if (params !== undefined) {
        return router.push({
            name,
            params,
        });
    } else {
        return router.push({ name: name });
    }
}
