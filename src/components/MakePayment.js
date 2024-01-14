import React from 'react';
import { Link } from 'react-router-dom';

const MakePayment = ({ orderAmount }) => {
  const totalAmount = localStorage.getItem("total");
  return (
    <div className="w-96 h-fit z-100 bg-white shadow-lg p-2">
      <div className="flex flex-col justify-center px-4 py-2">
        <p className='text-gray-400 font-bold text-lg'>Final Receipt</p>
        <div className='w-full rounded mt-4 flex flex-col p-2 items-center justify-around '>
          <div className='w-full flex'>
            <span className='basis-1/2 justify-start text-dark-gray text-sm'>Admin Fee</span>
            <span className='basis-1/2 justify-end text-right text-gray-400 font-light text-sm'>0.00</span>
          </div>
          <div className='w-full flex mt-4'>
            <span className='basis-1/2 justify-start text-dark-gray text-base uppercase'>TOTAL</span>
            <span className='basis-1/2 justify-end text-right font-extrabold'>{totalAmount}</span>
          </div>
        </div>
        <div className='w-full mt-6'>
          <Link to='/orderconfirmation'>
            <button className='w-full bg-app-bg justify-center items-center py-1.5 px-6 rounded text-white'>
              Make a Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
