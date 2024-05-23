import { useEffect, useState } from "react";
import Searchbar from "../UI/Searchbar";
import VendorNavBar from "../Vendor/VendorNavBar";
import Footer from "../UI/Footer";
import totalbg from "../assets/Analytics/TotalBg.jpeg";
import SalesTrends from "./SalesTrends";



const VendorAnalytics = () => {
    return (
      <>
      <div>
        < VendorNavBar/>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-left text-17xl text-color font-title">
  <div className="flex-1 flex flex-row items-end justify-start py-20 px-0 box-border bg-cover bg-no-repeat bg-center min-h-[565px] max-w-full"
       style={{ backgroundImage: `url(${totalbg})` }}>
    <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[741px] pl-[50px] box-border gap-[10px] max-w-full mq800:pl-[25px] mq800:pr-[370px] mq800:box-border mq1125:flex-wrap mq450:pr-5 mq450:box-border">
    <div className="rounded-full bg-white overflow-hidden flex flex-col items-center justify-center py-[60px] px-[60px] box-border gap-[10px] min-w-[200px] min-h-[200px] mq1125:flex-1">
        <b className="relative uppercase inline-block min-w-[113px] mq800:text-10xl mq450:text-3xl text-teal">
          50,000
        </b>
        <h3 className="m-0 relative text-5xl font-semibold font-body inline-block min-w-[47px] mq450:text-lgi text-teal">
          EGP
        </h3>
      </div>
      <button className="cursor-pointer [border:none] py-2 px-4 bg-color flex-1 flex flex-col items-center justify-start box-border min-w-[285px] whitespace-nowrap max-w-full bg-lightseagreen">
        <div className="relative text-17xl uppercase font-title text-white text-left">
          Total sales this year
        </div>
      </button>
    </div>
  </div>
</div>

    <main className="w-[1424px] flex flex-row items-start justify-end pt-0 px-4 pb-[40.7px] box-border max-w-full mq1350:pb-5 mq1350:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
          {/*Sales Trends*/}
          <SalesTrends/>
          {/*Recommended for you/}
          {/*Customer insights */}
          {/*Inventory*/}
    
        </section>
      </main>

    <Footer/>
    </>
    );
    };

    export default VendorAnalytics;
