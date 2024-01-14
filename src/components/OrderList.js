import React from 'react';
import { Icon } from '@iconify/react';

const OrderList = ({ orderDetails }) => {
  const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, 3).join(' ');
    return truncatedTitle;
  };

  return (
    <div className="w-full bg-white shadow-lg p-2">
      <div className="flex flex-col justify-center p-4">
        <p className='text-dark-gray font-medium text-sm'>Order List</p>
        {orderDetails.products.length>0 && orderDetails.products.map((product, index) => (
          <div key={index} className='sm:w-full md:w-1/3 lg:w-1/3 font-light text-dark-gray rounded mt-4 flex p-2 items-center justify-around border'>
            <div className='basis-1/4'>
              <img src={product.image} alt={product.title} className='h-8 w-8 rounded-lg' />
            </div>
            <div className='flex flex-col basis-1/2'>
              <span className='text-sm text-dark-gray font-semibold text-clip'>{truncateTitle(product.title)}</span>
              <span className='text-sm text-dark-gray mt-1'>$ {product.price}</span>
            </div>
            <div className='flex gap-6 basis-1/4'>
              <Icon icon="akar-icons:minus" color="#17181a" width="20" height="20" />
              <Icon icon="ion:star-outline" color="#17181a" width="20" height="20" />
            </div>
          </div>
        ))}
        {orderDetails.products.length===0 &&(
          <div>
            Your Cart is empty!
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
