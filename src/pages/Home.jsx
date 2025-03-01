import React, { useState, useEffect } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { RiMore2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { useSelector } from 'react-redux';
import Chart from '../components/Chart';
import DailyExpense from '../components/DailyExpense';
import DailyState from '../context/DailyState';

const Home = () => {
    const [display, setDisplay] = useState(false);
    const data = useSelector((state) => state.expense.value);
    const [maxArray, setMaxArray] = useState([]);

    useEffect(() => {
        const findMostExpensive = () => {
            if (maxArray.length === 3) return;
            
            let datatemp = [...data];
            // Removing the already selected expensive items from the datatemp array
            maxArray.forEach(item => {
                datatemp = datatemp.filter(ele => ele.price !== item.price);
            });

            // Find the most expensive item from remaining data
            let max = { price: 0 };
            for (let item of datatemp) {
                if (item.price > max.price) {
                    max = item;
                }
            }

            // Updating maxArray state by adding the most expensive item
            if (max.price > 0) {
                setMaxArray(prevState => [...prevState, max]);
            }
        };

        findMostExpensive();
        setDisplay(!display)
    }, [data, maxArray]);

    return (
        display && (
            <div className='pt-[70px]'>
                <div className='container m-auto w-full p-2 grid lg:grid-cols-3 md:grid-cols-1 h-[calc(100vh-70px)] gap-2 '>
                    <div className='rounded-lg lg:col-span-2 flex flex-col gap-2  lg:flex-col md:flex-col-reverse'>
                        <div className='shadow-lg rounded-lg col-span-2 h-[70vh]'>
                            <Chart />
                        </div>
                        <div className='rounded-lg col-span-2 h-[30%] grid grid-cols-3 gap-5'>
                            {maxArray.map((exp) => (
                                <div
                                    key={exp.id}
                                    className='relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-center px-5 gap-3 inset-shadow-sm inset-shadow-red-500'
                                >
                                    <p className='text-2xl font-semibold capitalize'>{exp.expense}</p>
                                    <p className='text-2xl font-semibold capitalize'>
                                        {exp.date.date + `-` + exp.date.month + `-` + exp.date.year}
                                    </p>
                                    <p className='text-2xl font-semibold capitalize text-green-600 '>
                                        &#8377;{exp.price}
                                    </p>
                                    <div className="absolute top-[50%] left-[70%] text-8xl text-gray-300">
                                        <IoHome />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <DailyState>
                        <DailyExpense />
                    </DailyState>
                </div>
            </div>
        )
    );
};

export default Home;
