import { useState } from 'react';
import ChoosePaymentMethod from '../components/ChoosePaymentMethod';
import MakePayment from '../components/MakePayment';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

const Payments = () => {
	const navigate = useNavigate();
	const [selectedPayment, setSelectedPayment] = useState('');
	const totalAmount = localStorage.getItem("total");

	const handleOptionChange=(value)=>{
		setSelectedPayment(value);
	}

	const handlePayment=()=>{
		!selectedPayment && alert('Select a Payment Method!');
		selectedPayment && navigate(`/orderconfirmation/${selectedPayment}`);
	}

	return (
		<div className="absolute flex flex-col items-center justify-center left-0 top-0 right-0 bottom-0">
			<div className='w-96 flex justify-around bg-white p-2 pt-6'>
        <Link to='/checkout'>
		    <Icon icon="mingcute:left-line" color="#6d30ed" className='basis-1/8 -ml-10' width="24" height="24" />	
        </Link>	    
		    <p className='font-bold text-mid-black text-lg justify-center basis-1/2'>Payment</p>
		    </div>
			
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
            <button className='w-full bg-app-bg justify-center items-center py-1.5 px-6 rounded text-white'
			onClick={handlePayment}>
              Make a Payment
            </button>
        </div>
      </div>
    </div>
	  </div>
	);
};

export default Payments;

