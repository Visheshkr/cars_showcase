"use client";

import Image from 'next/image';
import {useMemo, useState} from 'react'
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent} from '@/utils';
import CarDetails from './CarDetails';
interface CarCardProps{
    car:CarProps;
    index:number;
}
const arr_images = ["/lambo.jpg","/audi.jpg","/acura.jpg","/audir8.jpg","/bmw.jpg","/kiatelluride.jpg","/hyundaitucson.jpg","/hondaodyssey.jpg","/bmwi8.jpg","/hemessey.jpg","/kia.jpg","/lotus.jpg","/porsche.jpg","/maserati.jpg","/kiasport.jpg","/kiasport.jpg","/mistubshioutlander.jpg","/genesis.jpg","/bentley.jpg","/lykan.jpg","/lambo2.jpg","/alpha.jpg","/ferrari.jpg","/gta.jpg","/jaguar.jpg","/koein.jpg","/mustang.jpg","/verna.jpg","/alto.jpg","/chev.jpg","/mini.jpg","/tata.jpg","/lambo.jpg","/audi.jpg","/acura.jpg","/audir8.jpg","/bmw.jpg","/kiatelluride.jpg","/hyundaitucson.jpg","/hondaodyssey.jpg","/bmwi8.jpg","/hemessey.jpg","/lambo2.jpg","/alpha.jpg","/ferrari.jpg","/gta.jpg","/jaguar.jpg","/koein.jpg","/mustang.jpg","/verna.jpg","/alto.jpg","/chev.jpg","/mini.jpg"];
const CarCard = ({car,index}:CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive}=car;
    const [isOpen ,setIsOpen] =useState(false);
    const [countCars,setCountCars] = useState(0);
    const carRent = calculateCarRent(city_mpg,year);
    const carPrice = useMemo(()=>carRent + (Math.floor(Math.random()*1000)+100),[carRent])
  return (
    <div className="car-card group">
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
                {carPrice}
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={arr_images[index]}  alt='car model' fill priority className='object-contain'/>
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel"/>
                    <p className='text-[14px]'>
                        {transmission ==='a'?'Automatic':'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt="tire"/>
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt="gas"/>
                    <p className='text-[14px]'>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton 
                    title="View More"
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={()=>setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} index={index}/>
    </div>
  )
}

export default CarCard;