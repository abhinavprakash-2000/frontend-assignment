import ChoosePaymentMethod from '../components/ChoosePaymentMethod';
import MakePayment from '../components/MakePayment';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  
	return (
		<div className="absolute flex flex-col items-center justify-center left-0 top-0 right-0 bottom-0">
			<div className='w-96 flex justify-around bg-white p-2 pt-6'>
        <Link to='/checkout'>
		    <Icon icon="mingcute:left-line" color="#ffffff" className='basis-1/8 -ml-10' width="24" height="24" />	
        </Link>	    
		    <p className='font-bold text-mid-black text-lg justify-center basis-1/2'></p>
		    </div>
            <div className="w-96 h-2/3 z-100 bg-white shadow-lg p-2">
		  <div className="flex flex-col justify-center items-center p-4">
            <Icon icon="teenyicons:tick-circle-solid" color="#6d30ed" width="150" height="150" />
			<p className='text-dark-gray font-bold text-2xl mt-10'>Order Confirmed!</p>
            <div className='flex mt-4 text-center text-dark-gray'>
                <p>Your Order with 
                <span className='font-semibold ml-1'>ID: </span>
                <span className='font-semibold mr-1'>{orderId}</span>
                 has been placed successfully and will be sent to you shortly
                </p>
            </div>
              <p>
                Thank you for shopping with us {localStorage.getItem("customerName")}!
              </p>
            <div className='mt-6'>
              <Link to='/checkout'>
                <div className='px-8 py-4 rounded-full bg-app-bg uppercase font-semibold text-white cursor-pointer'>Go back to Homepage</div>
              </Link>  
            </div>
          </div>
		</div>
	  </div>
	);
};

export default OrderConfirmation;

