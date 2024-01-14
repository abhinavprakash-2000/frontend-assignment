import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ChoosePaymentMethod = (changePayment, selectedPayment) => {

  const handleOptionChange = (option) => {
    changePayment(option);
  };

  return (
    <div className="w-96 h-fit z-100 bg-white shadow-lg p-2 pt-6 ">
      <div className="flex flex-col justify-center p-4 mt-2">
        <p className='text-dark-gray font-semibold'>Choose Payment Method</p>

        <div className='w-full h-16 font-light text-dark-gray rounded mt-4 flex p-2 items-center justify-around border'>
          <div className='basis-1/4'>
            
            <label htmlFor="creditCard">
              <Icon icon="f7:creditcard" color="#17181a" width="30" height="30" />
            </label>
          </div>
          <div className='flex flex-col basis-1/2'>
            <span className='text-sm text-dark-gray font-semibold'>Debit/Credit Card</span>
            <span className='text-xs text-dark-gray mt-1 font-light'>1234*****</span>
          </div>
          <div className='flex justify-end basis-1/4'>
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={selectedPayment === 'creditCard'}
              onChange={() => handleOptionChange('creditCard')}
            />
          </div>
        </div>

        <div className='w-full h-16 font-light text-dark-gray rounded mt-4 flex p-2 items-center justify-around border'>
          <div className='basis-1/4'>
            
            <label htmlFor="upi">
              <Icon icon="mdi:hand-coin-outline" color="#17181a" width="30" height="30" />
            </label>
          </div>
          <div className='flex flex-col basis-1/2'>
            <span className='text-sm text-dark-gray font-semibold'>UPI</span>
            <span className='text-sm text-dark-gray mt-1'></span>
          </div>
          <div className='flex justify-end basis-1/4'>
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              checked={selectedPayment === 'upi'}
              onChange={() => handleOptionChange('upi')}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChoosePaymentMethod;