import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BasicLayout, LayoutWithGradient } from 'components/Layouts';

import { Home } from 'pages/Home';
import { LogIn } from 'pages/LogIn';
import { SignUp } from 'pages/SignUp';
import { Courses } from 'pages/Courses';
import { Course } from 'pages/Course';
import { AboutUs } from 'pages/AboutUs';
import { CreateCourse } from 'pages/CreateCourse';

import { privateRoutePaths, publicRoutePaths } from './constants';
import { PrivateRoute } from './PrivateRoute';

export const routes = [
  {
    path: '/',
    element: <LayoutWithGradient />,
    children: [
      {
        path: publicRoutePaths.home,
        element: <Home />
      },
      {
        path: publicRoutePaths.logIn,
        element: <LogIn />
      },
      {
        path: publicRoutePaths.signUp,
        element: <SignUp />
      },
      {
        path: publicRoutePaths.aboutUs,
        element: <AboutUs />
      },
      {
        path: 'create-course',
        element: (
          <PrivateRoute>
            <CreateCourse />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: `/${privateRoutePaths.courses}`,
    element: (
      <BasicLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        )
      },
      {
        path: `/${privateRoutePaths.courses}/:courseId`,
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        )
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
