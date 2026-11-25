import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { Home } from './pages/Home/Home.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import { ArticleDetail } from './pages/ArticleDetails/ArticleDetail.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { About } from './pages/About/About.jsx';


export const App = () => {


  const router = createBrowserRouter([
    
    {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'blog', element: <Blog/> },
      { path: 'blog/:id', element: <ArticleDetail/> },
      { path: 'about', element: <About/> },
      { path: '*', element: <NotFound /> },
    ],
  },
  ]);




  return (
    <RouterProvider router={router} />
  )
}
