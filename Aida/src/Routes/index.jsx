import HomePage from "../Store/HomePage";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import React from "react";
import FashionPage from "../Store/FashionPage";
import ElectronicsPage from "../Store/ElectronicsPage";
import SportsPage from "../Store/SportsPage";
import HealthPage from "../Store/HealthPage";
import PetsPage from "../Store/PetSuppliesPage";
import BooksPage from "../Store/BooksPage";
import HomeEssentialsPage from "../Store/HomeEssentialsPage";
import OfficeSuppliesPage from "../Store/OfficeSuppliesPage";
import UnavailablePage from "../User/UnavailablePage";
import AccountType from "../Authentication/AccountType";
import SignUpVendor1 from "../Authentication/SignUpVendor1";
import SignUpVendor2 from "../Authentication/SignUpVendor2";
import SignUpVendor3 from "../Authentication/SignUpVendor3";
import DeletedAccount from "../UI/DeletedAccount";
import SettingsDeleteAccount from "../UI/SettingsDeleteAccount";
import VendorShelves from "../Vendor/VendorShelves";
import AddProductPage from "../Vendor/AddProductPage";
import SearchPage from "../Store/SearchPage";
import ProductViewPage from "../Store/ProductViewPage";

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
    path: "/accountType",
    element: (
      <React.Fragment>
        <AccountType />
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
    path: "/SignUpVendor1",
    element: (
      <React.Fragment>
        <SignUpVendor1 />
      </React.Fragment>
    ),
  },
  {
    path: "/SignUpVendor2",
    element: (
      <React.Fragment>
        <SignUpVendor2 />
      </React.Fragment>
    ),
  },
  {
    path: "/SignUpVendor3",
    element: (
      <React.Fragment>
        <SignUpVendor3 />
      </React.Fragment>
    ),
  },
  {
    path: "/VendorShelves",
    element: (
      <React.Fragment>
        <VendorShelves />
      </React.Fragment>
    ),
  },
  {
    path: "/addproduct/:productID?",
    element: (
      <React.Fragment>
        <AddProductPage />
      </React.Fragment>
    ),
  },
  {
    path: "/deletedacount",
    element: (
      <React.Fragment>
        <DeletedAccount />
      </React.Fragment>
    ),
  },
  {
    path: "/SettingsDeleteAccount",
    element: (
      <React.Fragment>
        <SettingsDeleteAccount />
      </React.Fragment>
    ),
  },
  {
    path: "/productviewpage",
    element: (
      <React.Fragment>
        <ProductViewPage />
      </React.Fragment>
    ),
  },
  {
    path: "/searchpage",
    element: (
      <React.Fragment>
        <SearchPage/>
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
  {
    path: "*",
    element: (
      <React.Fragment>
        <UnavailablePage />
      </React.Fragment>
    ),
  },
];
export default routes;
