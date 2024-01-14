import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';
import PromoCode from '../components/PromoCode';
import OrderSummary from '../components/OrderSummary';
import { Icon } from '@iconify/react';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({ products: [] });
  const [phoneNum, setPhoneNum] = useState('');
  const [custName, setCustName] = useState('');

  useEffect(() => {
    axios
      .get('https://groww-intern-assignment.vercel.app/v1/api/order-details#')
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='md:flex md:mx-5'>
    <div className="flex flex-col items-center justify-center w-full overflow-auto">
      <div className="w-full bg-white p-2 pt-6">
        <div className="flex items-center gap-x-2">
          <Icon
            icon="mingcute:left-line"
            color="#6d30ed"
            className="cursor-not-allowed"
            width="24"
            height="24"
          />
          <p className="font-bold text-mid-black text-lg">Checkout</p>
        </div>
      </div>
      <div className="w-full">
        <div className="sm:w-full md:w-1/3 bg-white p-4">
          <p className="text-dark-gray font-semibold">Delivery Details</p>
          <div className="w-full md:w-56 font-light text-dark-gray bg-light-gray rounded mt-4 flex p-2 items-center justify-start gap-2 cursor-not-allowed">
            <Icon icon="ion:location-outline" color="#17181A" width="20" height="20" />
            <input
              type="text"
              className="text-sm text-dark-gray bg-transparent cursor-not-allowed w-full"
              value={'NSUT, Delhi'}
              disabled
            />
          </div>
          <div className="w-full md:w-56 font-light text-dark-gray rounded border mt-4 flex p-2 items-center justify-start gap-2">
            <Icon icon="fluent:call-16-regular" color="#17181A" width="20" height="20" />
            <input
              type="text"
              className="text-sm text-dark-gray w-full"
              value={phoneNum}
              placeholder="Enter your phone number"
              onChange={(e) => {
                setPhoneNum(e.target.value);
                localStorage.setItem('customerNumber', phoneNum);
              }}
            />
          </div>
          <div className="w-full md:w-56 font-light text-dark-gray rounded border mt-4 flex p-2 items-center justify-start gap-2">
            <Icon icon="material-symbols:person-outline" color="#17181A" width="20" height="20" />
            <input
              type="text"
              className="text-sm text-dark-gray w-full"
              value={custName}
              placeholder="Enter your Name"
              onChange={(e) => {
                setCustName(e.target.value);
                localStorage.setItem('customerName', custName);
              }}
            />
          </div>
        </div>
      </div>
      <OrderList orderDetails={orderDetails} />
      </div>
      <div className='sm:w-full md:w-1/3 mt-4'>
        <OrderSummary orderDetails={orderDetails} />
      </div>
    </div>
  );
};

export default Checkout;