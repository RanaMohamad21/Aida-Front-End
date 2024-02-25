import HomePage from "../Products/HomePage";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import React from "react";
import FashionPage from "../Products/FashionPage";
import ElectronicsPage from "../Products/ElectronicsPage";
import SportsPage from "../Products/SportsPage";
import HealthPage from "../Products/HealthPage";
import PetsPage from "../Products/PetSuppliesPage";
import BooksPage from "../Products/BooksPage";
import HomeEssentialsPage from "../Products/HomeEssentialsPage";
import OfficeSuppliesPage from "../Products/OfficeSuppliesPage";

// const routes = [
//   { path: "/", element: <HomePage /> },
//   { path: "/login", component: <Login /> },
//   { path: "/signup", component: <Signup /> },
//   { path: "/fashion", component: <FashionPage /> },
//   { path: "/electronics", component: <ElectronicsPage /> },
//   { path: "/sports", component: <SportsPage /> },
//   { path: "/health", component: <HealthPage /> },
//   { path: "/pets", component: <PetsPage /> },
//   { path: "/books", component: <BooksPage /> },
//   { path: "/homeessentials", component: <HomeEssentialsPage /> },
//   { path: "/officesupplies", component: <OfficeSuppliesPage /> },
// ];

const routes = [
  {
    path: "/",
    element: (
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    ),
  },
  {
    path: "/login",
    element: (
      <React.Fragment>
        <Login />
      </React.Fragment>
    ),
  },
  {
    path: "/signup",
    element: (
      <React.Fragment>
        <Signup />
      </React.Fragment>
    ),
  },
  {
    path: "/fashion",
    element: (
      <React.Fragment>
        <FashionPage />
      </React.Fragment>
    ),
  },
  {
    path: "/electronics",
    element: (
      <React.Fragment>
        <ElectronicsPage />
      </React.Fragment>
    ),
  },
  {
    path: "/sports",
    element: (
      <React.Fragment>
        <SportsPage />
      </React.Fragment>
    ),
  },
  {
    path: "/health",
    element: (
      <React.Fragment>
        <HealthPage />
      </React.Fragment>
    ),
  },
  {
    path: "/pets",
    element: (
      <React.Fragment>
        <PetsPage />
      </React.Fragment>
    ),
  },
  {
    path: "/books",
    element: (
      <React.Fragment>
        <BooksPage />
      </React.Fragment>
    ),
  },
  {
    path: "/homeessentials",
    element: (
      <React.Fragment>
        <HomeEssentialsPage />
      </React.Fragment>
    ),
  },
  {
    path: "/officesupplies",
    element: (
      <React.Fragment>
        <OfficeSuppliesPage />
      </React.Fragment>
    ),
  },
];
export default routes;
