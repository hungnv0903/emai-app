import React, {useEffect } from "react";
import {createBrowserRouter} from "react-router-dom";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Layout from "../components/Layout/Layout";
import ContructionPage from "../components/Main/MainComponents/ContructionPage";
import EmailPage from "../components/Main/MainComponents/EmailPage";
import EmailDetail from "../components/Main/MainComponents/EmailDetail";
import ContentEmail from "../components/Main/MainComponents/ContentEmail";

 export const router = createBrowserRouter([
  {path:"/" , element:<Layout></Layout> , children:[
    {path:"/login" , element:<Login></Login>},
    {path:"/main" , element:<Main></Main> , children:[
      {path:'home', element:<ContructionPage></ContructionPage>},
      {path:'contact',element:<ContructionPage></ContructionPage>},
      {path:'email' , element:<EmailPage></EmailPage> ,children:[
        {path:':folderId',element:<EmailDetail></EmailDetail> , children:[
          {path:":emailId" , element:<ContentEmail></ContentEmail>},
        ]}// folderId : là một dynamic rout
      ]},
    ]}  
  ]}
])


