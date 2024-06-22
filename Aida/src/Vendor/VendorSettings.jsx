import React, { useState, useEffect } from 'react';
import VendorNavBar from './VendorNavBar'; 
import Footer from '../UI/Footer';
import { useVendor } from './VendorContext';
import axios from 'axios';

const VendorSettings = () => {
  const { vendor, setVendor } = useVendor();
  if (!vendor) {
    // Wait for the data to be fetched
    return <div>Loading...</div>;
  }

  // Initialize state with vendor settings
  const [newOrders, setNewOrders] = useState(vendor.settings.allowNewEmails);
  const [lateOrders, setLateOrders] = useState(vendor.settings.allowLateEmails);
  const token = localStorage.getItem('token');

  const handleSaveSettings = () => {
    axios.post('http://localhost:8081/api/v1/vendor/update_settings', {
      allowNewEmails: newOrders,
      allowLateEmails: lateOrders
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log(response.data);
      alert('Settings saved successfully');
      setVendor(prevVendor => ({
        ...prevVendor,
        settings: {
          allowNewEmails: newOrders,
          allowLateEmails: lateOrders
        }
      }));
    }).catch(error => {
      console.error('Error:', error);
      alert('Failed to save settings');
    });
  };

  return (
    <div>
      <VendorNavBar />
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-between py-10 px-20 box-border min-h-[615px] mq750:py-[26px] mq750:px-10 mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] ">
            <h2 className="m-0 relative font-bold text-[40px] text-salmon text-100xl">
              Email Notification
            </h2>
            <div className="self-stretch flex flex-row items-end justify-center text-3xl text-darkturquoise lg:gap-[174px] mq450:gap-[44px] mq750:gap-[87px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] ">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit font-semibold mq450:text-lgi">
                      New Orders
                    </h3>
                    <div 
                      className={`relative w-12 h-7 rounded-full cursor-pointer ${newOrders ? 'bg-darkturquoise border border-teal ' : 'bg-gray border border-darkGray border-opacity-35'}`} 
                      onClick={() => setNewOrders(!newOrders)}
                    >
                      <div className={`absolute top-[2px] ${newOrders ? 'left-[24px]' : 'left-[2px]'} shadow-[0px_2px_4px_rgba(39,_39,_39,_0.1)] rounded-full ${newOrders ? 'bg-white' : 'bg-white'} w-6 h-6 transition-all`} />
                    </div>
                  </div>
                  <div className="relative text-base text-black inline-block ">
                    You’ll receive emails when there’s a restock or when discounts are available
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[14px] mq400:flex-wrap">
                  <h3 className="m-0 relative text-inherit font-semibold mq450:text-lgi">
                    Late Orders
                  </h3>
                  <div 
                    className={`relative w-12 h-7 rounded-full cursor-pointer ${lateOrders ? 'bg-darkturquoise border border-teal ' : 'bg-gray border border-darkGray border-opacity-35'}`} 
                      onClick={() => setLateOrders(!lateOrders)}
                    >
                    <div className={`absolute top-[2px] ${lateOrders ? 'left-[24px]' : 'left-[2px]'} shadow-[0px_2px_4px_rgba(39,_39,_39,_0.1)] rounded-full ${lateOrders ? 'bg-white' : 'bg-white'} w-6 h-6 transition-all`} />
                  </div>
                </div>
                <div className="self-stretch relative text-xl font-light font-roboto whitespace-pre-wrap mq400:text-base">
                  If these settings are turned off, AIDA may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={handleSaveSettings}
            className="cursor-pointer [border:none] py-4 px-4 bg-salmon rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-indianred my-6"
          >
            <b className="relative text-xl font-body text-primary-base-white text-left text-white">
              Save my settings
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-4 px-4 bg-darkturquoise rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-lightseagreen">
            <b className="relative text-xl inline-block font-body text-primary-base-white text-white">
              Log out
            </b>
          </button>
          <div className="self-stretch flex flex-row items-center justify-start pt-[20px] pb-0 pl-0 gap-[15px] text-xl text-darkturquoise font-roboto border-t-[1px] border-solid border-darkturquoise lg:pr-[419px] lg:box-border mq750:flex-wrap mq750:pl-5 mq750:pr-5 mq750:pb-5 mq750:box-border">
            <div className="relative [text-decoration:underline] font-medium cursor-pointer">
              Delete My Account
            </div>
            <div className="relative text-salmon">
              This action cannot be undone
            </div>
          </div>
        </div>
      </div>
      <Footer />    
    </div>
  );
}

export default VendorSettings;
