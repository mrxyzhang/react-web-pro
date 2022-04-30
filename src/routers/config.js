import React from 'react';
// import React, { lazy } from 'react';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  FormOutlined,
  UserOutlined,
  StarOutlined,
  WarningOutlined,
  FrownOutlined,
} from '@ant-design/icons';

import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';
import LoginComponent from '@/pages/Login';
import WelcomeComponent from '@/pages/Welcome';
import HomeComponent from '@/pages/Home';
import FormDemoComponent from '@/pages/FormDemo';
import GroovySetComponent from '@/pages/System/GroovySet';
import UserComponent from '@/pages/System/User';
import StarComponent from '@/pages/System/Star';
import Compoent403 from '@/pages/Exception/403';
import Compoent404 from '@/pages/Exception/404';
import Compoent500 from '@/pages/Exception/500';

const config = [
  {
    path: '/',
    component: BlankLayout, // 空白页布局
    childRoutes: [
      // 子菜单路由
      {
        path: '/login', // 路由路径
        name: '登录页', // 菜单名称 (不设置,则不展示在菜单栏中）
        component: LoginComponent, // 懒加载 路由组件
      },
      {
        path: '/',
        // exact: true,
        component: BasicLayout, // 基本布局
        childRoutes: [
          {
            path: '/welcome',
            name: '欢迎页',
            icon: <SmileOutlined />,
            // component: lazy(() => import('@/pages/Welcome')),
            component: WelcomeComponent,
          },
          {
            path: '/home',
            name: 'home主页',
            icon: <HomeOutlined />,
            component: HomeComponent,
          },
          {
            path: '/formDemo',
            name: '表单演示',
            icon: <FormOutlined />,
            component: FormDemoComponent,
          },
          {
            path: '/system',
            name: '系统管理',
            icon: <SettingFilled />,
            childRoutes: [
              {
                path: '/system/groovySet',
                name: 'Groovy脚本管理',
                component: GroovySetComponent,
              },
              {
                path: '/system/user',
                name: '用户配置',
                icon: <UserOutlined />,
                component: UserComponent,
              },
              {
                path: '/system/star',
                name: '个人中心',
                icon: <StarOutlined />,
                component: StarComponent
              },
            ],
          },
          {
            path: '/exception',
            name: '异常页',
            // exact: true,
            icon: <WarningOutlined />,
            childRoutes: [
              {
                path: '/exception/403',
                name: '403',
                icon: <FrownOutlined />,
                component: Compoent403
              },
              {
                path: '/exception/404',
                name: '404',
                exact: true,
                icon: <FrownOutlined />,
                component: Compoent404,
              },
              {
                path: '/exception/500',
                name: '500',
                icon: <FrownOutlined />,
                component: Compoent500
              },
            ],
          },
          { path: '/', exact: true, redirect: '/welcome' },
          { path: '*', exact: true, redirect: '/exception/404' },
        ],
      },
    ],
  },
];

export default config;
