import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PromoCode = () => {
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
    <div className="">
		  <div className="w-full flex flex-col justify-center px-4">
			<p className='text-dark-gray font-medium text-sm'>Promo Code</p>
			<div className='font-light text-dark-gray rounded flex p-2 items-center justify-between border'>
                <input type='text' className='text-base font-light pl-4' value={discountCode} onChange={(e)=>setDiscountCode(e.target.value)}/>
				<button className='text-sm font-semibold text-app-bg pr-4' onClick={handleDiscount}>
                	{disc?'APPLIED':'APPLY'}
            	</button>
			</div>
			{invalidPromo && <p className='text-red-500 text-sm'>Invalid Promo Code*</p>}
		  </div>
		</div>
  );
};

export default PromoCode;