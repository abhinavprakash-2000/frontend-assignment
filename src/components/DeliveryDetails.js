import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const DeliveryDetails = () => {
	const [phoneNum, setPhoneNum]=useState('');
	const [custName, setCustName]=useState('');
  return (
    <div className="w-96 h-fit z-100 bg-white shadow-lg p-2 pt-6 ">
		  <div className="flex flex-col justify-center p-4 mt-2">
			<p className='text-dark-gray font-semibold'>Delivery Details</p>
			<div className='w-56 font-light text-dark-gray bg-light-gray rounded mt-4 flex p-2 items-center justify-start gap-2 cursor-not-allowed'>
				<Icon icon="ion:location-outline" color="#17181A" width="20" height="20" />
				<input type="text" className='text-sm text-dark-gray bg-transparent cursor-not-allowed' value={'NSUT, Delhi'} disabled></input>
			</div>
			<div className='w-56 font-light text-dark-gray rounded border mt-4 flex p-2 items-center justify-start gap-2'>
			    <Icon icon="fluent:call-16-regular" color="#17181A" width="20" height="20" />				
			    <input type='text' className='text-sm text-dark-gray' value={phoneNum} placeholder='Enter your phone number' onChange={(e)=>{setPhoneNum(e.target.value);
				localStorage.setItem("customerNumber", phoneNum);} }/>
			</div>
			<div className='w-56 font-light text-dark-gray rounded border mt-4 flex p-2 items-center justify-start gap-2'>
			    <Icon icon="material-symbols:person-outline" color="#17181A" width="20" height="20" />				
			    <input type='text' className='text-sm text-dark-gray' value={custName} placeholder='Enter your phone number' onChange={(e)=>{
					setCustName(e.target.value);
					localStorage.setItem("customerName", custName);
				} }/>
			</div>
		</div>
	</div>
  );
};

export default DeliveryDetails;

