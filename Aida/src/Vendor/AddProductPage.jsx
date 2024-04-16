import { useEffect, useState } from "react";
import InfoAndPricing from "./InfoAndPricing";
import SpecificationsCollection from "./SpecificationsCollection";
import VendorNavBar from "./VendorNavBar";
import tag from "../assets/vendor/products/tag.png";
import Tag from "./Tag";
import add from "../assets/vendor/products/add.png";
import descriptionTag from "../assets/vendor/products/pen.png";
import TitleAndLogo from "../UI/TitleAndLogo";
import TextEditor from "../UI/TextEditor";
import Background from "../assets/vendor/products/header.jpeg";
import { useForm } from "react-hook-form";
import Loader from "../UI/Loader";
import { DevTool } from "@hookform/devtools";
import ProductForm from "./ProductForm";
// import { useLocation } from "react-router-dom";

// / We Can change the onSubmit function to assynchronous like specified in the react hook form guide

//* Discount Percentage is in percentage ranges[0-100] not [0-1]
//* I am sending the tags as a single string joined by ","

// const initialProduct = {
//   productID:-1,
//   title: "",
//   category:"",
//   availableStockCount: 0,
//   price: 0,
//   taxes: 0,
//   specification: [],
//   tags:[],
//   description:"",
//   hasDiscount:false,
//   discountDurationType:"",
//   enableSubscription:false,
//   isUsed:false,
//   discountPercentage:"",
//   durationInDays:"",
//   hasDiscountCode:""
// };
function AddProductPage() {
// The `product` prop is used to pre-populate the form fields in case of product update
return (
  <ProductForm/>
);
}

export default AddProductPage;
