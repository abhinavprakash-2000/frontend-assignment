import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PromoCode from './PromoCode';
const OrderSummary = ({ orderDetails }) => {
  const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, 3).join(' ');
    return truncatedTitle;
  };

  const navigate = useNavigate();
  const orderAmount = orderDetails.products.reduce((total, product) => total + product.price, 0);
  const discountAmt = (orderAmount*0.1).toFixed(2);

  const totalAmount = (orderAmount-discountAmt).toFixed(2);
  let discountcheck = localStorage.getItem("promo");

  const [discountCode, setDiscountCode]=useState('');
  const[disc, setDisc]= useState(false);
	const [invalidPromo, setInvalidPromo]=useState(false);
  const handleDiscount = ()=>{
	console.log(discountCode)
	if(discountCode==='FLAT10'){
		setDisc(true);
		setInvalidPromo(false);
		localStorage.setItem("promo", true);
	}
	else{
		localStorage.setItem("promo", false);
		setInvalidPromo(true);
	}
  }

  return (
    <div className="w-full bg-white p-2 border">
      <div className="flex flex-col justify-center p-4">
        <p className='text-dark-gray font-bold text-lg'>Order Summary</p>
        <div className="flex mt-2">
          <div className='font-light text-dark-gray rounded flex p-2 border w-full justify-between'>
            <input placeholder='PROMO CODE' type='text' className='text-base font-light w-full' value={discountCode} onChange={(e)=>setDiscountCode(e.target.value)}/>
            <button className='text-sm font-semibold text-app-bg' onClick={handleDiscount}>
                      {disc?'APPLIED':'APPLY'}
            </button>
          </div>
          {invalidPromo && <p className='text-red-500 text-sm'>Invalid Promo Code*</p>}
        </div>
        <div className='w-full rounded mt-4 flex flex-col p-2 items-center justify-around '>
            <div className='w-full flex'>
              <span className='basis-1/2 justify-start text-dark-gray text-sm'>Cart Total</span>
              <span className='basis-1/2 justify-end text-right text-gray-400 font-light text-sm'>{orderAmount}</span>
            </div>
          <div className='w-full flex'>
            <span className='basis-1/2 justify-start text-dark-gray text-sm'>Delivery Fee</span>
            <span className='basis-1/2 justify-end text-right text-gray-400 font-light text-sm flex gap-x-1'>
              <p className='line-through'>
                10.00
                </p>
                <p>Free</p>
              </span>
          </div>
          <div className='w-full flex'>
            <span className='basis-1/2 justify-start text-dark-gray text-sm'>Discount</span>
            <span className='basis-1/2 justify-end text-right text-gray-400 font-light text-sm'>
              {discountcheck?discountAmt:'0.00'}
            </span>
          </div>
        </div>
      </div>
      <div className='flex p-4'>
        <div className='flex flex-col'>
          <span className='uppercase'>TOTAL</span>
          <span className='font-bold mt-2'>{discountcheck? totalAmount:orderAmount}</span>
        </div>
        <div className='justify-items-end items-center'>
            <button className='w-32 bg-app-bg justify-self-end items-center py-1.5 px-6 rounded text-white mt-4 ml-8'
            onClick={()=>{
              (!localStorage.getItem("customerName") || !localStorage.getItem("customerNumber"))?alert('fill all the details'):navigate('/payments');
              localStorage.setItem("total", totalAmount);
            }}>
              Payment
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;