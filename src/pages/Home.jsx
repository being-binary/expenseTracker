import React from 'react'


import { CiCalendarDate } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { RiMore2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

import { useSelector } from 'react-redux';
import Chart from '../components/Chart';
import DailyExpense from '../components/DailyExpense';
import DailyState from '../context/DailyState';

const Home = () => {

    const data = useSelector((state) => state.expense.value)
    console.log(data)

    return (
        <div className='pt-[70px]'>
            <div className='container m-auto w-full p-2 grid lg:grid-cols-3 md:grid-cols-2 h-[calc(100vh-70px)] gap-2 '>
                <div className='rounded-lg lg:col-span-2 flex flex-col gap-2'>
                    <div className='shadow-lg routnded-lg col-span-2 h-[70%]'><Chart /></div>
                    <div className='rounded-lg col-span-2  h-[30%] grid grid-cols-3 gap-5'>
                        {
                            <div className='relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-center px-5 gap-3 inset-shadow-sm inset-shadow-red-500'>
                                <p className='text-2xl font-semibold capitalize'>MostExpense</p>
                                <p className='text-2xl font-semibold capitalize text-green-600 '>&#8377;Total</p>
                                <div className="absolute top-[50%] left-[70%] text-8xl text-gray-300">
                                    <GiHamburger />
                                </div>
                            </div>

                        }
                    </div>
                </div>
                <DailyState>
                    <DailyExpense />
                </DailyState>
            </div>
        </div>
    )
}

export default Home
