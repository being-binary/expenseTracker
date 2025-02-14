import React from 'react'


import { CiCalendarDate } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { RiMore2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

import { useSelector } from 'react-redux';
import Chart from '../components/Chart';

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
                <div className='rounded-lg flex flex-col box-border justify-evenly shadow-xl'>
                    <div className='rounded-lg bg-yellow-200 h-[12%] m-2 flex justify-center items-center capitalize font-semibold text-xl'><CiCalendarDate className='text-3xl' />&nbsp;&nbsp;your transaction history</div>
                    <div className='bg-pink-400 h-[76%] mx-2 rounded-lg'>
                        {
                            <div className='bg-white rounded-lg flex justify-between items-center px-2 py-3 m-1'>
                                <span className='flex flex-row gap-3 items-center'>
                                    <GiHamburger className='text-3xl border rounded-sm' />
                                    <span>
                                        <p className='capitalize'>buger&nbsp;king</p>
                                        <p className='capitalize'>15 dev 2025, tuesday</p>
                                    </span>
                                </span>
                                <span className='flex flex-row gap-3 items-center'>
                                    <p className='text-red-500 font-semibold text-xl'>&#8377;200</p>
                                    <RiMore2Fill className='text-2xl cursor-pointer' />
                                </span>
                            </div>
                        }
                        {
                            <div className='bg-white rounded-lg flex justify-between items-center px-2 py-3 m-1'>
                                <span className='flex flex-row gap-3 items-center'>
                                    <GiHamburger className='text-3xl border rounded-sm' />
                                    <span>
                                        <p className='capitalize'>buger&nbsp;king</p>
                                        <p className='capitalize'>15 dev 2025, tuesday</p>
                                    </span>
                                </span>
                                <span className='flex flex-row gap-3 items-center'>
                                    <p className='text-red-500 font-semibold text-xl'>&#8377;200</p>
                                    <RiMore2Fill className='text-2xl cursor-pointer' />
                                </span>
                            </div>
                        }
                    </div>
                    <button className='h-15 ring-3 ring-green-600 rounded-lg m-2 cursor-pointer flex flex-row items-center justify-center'>
                        <GiWallet className='text-2xl text-green-900 inset-shadow-xl' />&nbsp;&nbsp;
                        <p className='text-xl font-semibold font-sanserif text-green-900 inset-shadow-xl'>Missing&nbsp;Transaction?</p>
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <p className='text-lg font-semibold text-white uppercase px-3 py-2 bg-green-500 rounded-lg'>add&nbsp;now</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
