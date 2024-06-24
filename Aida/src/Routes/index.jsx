import HomePage from "../Store/HomePage";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import React from "react";
import UnavailablePage from "../Customer/UnavailablePage";
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
import DummyPage from "../UI/dummyPage";
import VendorProductViewPage from "../Vendor/VendorProductViewPage";
import ShoppingCartPage from "../Cart/ShoppingCartPage";
import ShippingAddress from "../Cart/ShippingAddress";
import VendorAnalytics from "../Vendor/VendorAnalytics";
import VendorOrders from "../Vendor/VendorOrders";
import VendorSettings from "../Vendor/VendorSettings";
import VendorInformation from "../Vendor/VendorInformation";

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
    path: "/VendorProductViewPage/:orderID",
    element: (
      <React.Fragment>
        <VendorProductViewPage />
      </React.Fragment>
    ),
  },
  {
    path: "/VendorAnalytics",
    element: (
      <React.Fragment>
        <VendorAnalytics />
      </React.Fragment>
    ),
  },
  {
    path: "/VendorOrders",
    element: (
      <React.Fragment>
        <VendorOrders />
      </React.Fragment>
    ),
  },
  {
    path: "/VendorSettings",
    element: (
      <React.Fragment>
        <VendorSettings />
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
    path: "/productviewpage/:orderId",
    element: (
      <React.Fragment>
        <ProductViewPage />
      </React.Fragment>
    ),
  },
  
  {
    path: "/vendorInfo",
    element: (
      <React.Fragment>
        <VendorInformation/>
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
    path: "/shoppingCart",
    element: (
      <React.Fragment>
        <ShoppingCartPage />
      </React.Fragment>
    ),
  },
  {
    path: "/shippingAddress",
    element: (
      <React.Fragment>
        <ShippingAddress />
      </React.Fragment>
    ),
  },
  {
    path: "/dummyPage",
    element: (
      <React.Fragment>
        <DummyPage />
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
