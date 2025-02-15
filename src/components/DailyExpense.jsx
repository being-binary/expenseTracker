import React, { useContext, useState } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { RiMore2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import DailyContext from '../context/DailyContext';
const DailyExpense = () => {
	const [display, setDisplay] = useState({});
	const ctx = useContext(DailyContext);
	const handleDisplay = (id) => {
		setDisplay((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	}
	console.log(ctx)
	return (
		<div className='rounded-lg flex flex-col box-border justify-evenly shadow-xl'>
			<div className='rounded-lg bg-yellow-200 h-[12%] m-2 flex justify-center items-center capitalize font-semibold text-xl'><CiCalendarDate className='text-3xl' />&nbsp;&nbsp;your transaction history</div>
			<div className='bg-pink-400 h-[76%] mx-2 rounded-lg'>
				{
					ctx.dailyExpense.map((exp, id) => {
						return <div key={id} className='bg-white rounded-lg flex justify-between items-center px-2 py-3 m-1'>
							<span className='flex flex-row gap-3 items-center'>
								<GiHamburger className='text-3xl border rounded-sm' />
								<span>
									<p className='capitalize'>{exp.expense}</p>
									<p className='capitalize'>{ Object.keys(exp.date).length > 0 ? ctx.formatDate(exp.date) : ''}</p>
								</span>
							</span>
							<span className='flex flex-row gap-3 items-center relative'>
								<p className='text-red-500 font-semibold text-xl'>&#8377;{exp.price}</p>
								<RiMore2Fill className='text-4xl cursor-pointer hover:border rounded-md py-1 ' onClick={() => { handleDisplay(id) }}  />
								{
									display[id] && <div onMouseLeave={() => { handleDisplay(id) }} className='w-20 h-10 border absolute left-10 top-8 rounded-md bg-red-300 text-white font-semibold uppercase flex items-center justify-center '
										onClick={() => { ctx.removeExpense(exp.id) }}>
										<p className='hover:scale-105 hover:text-red-500 cursor-pointer'>
											delete
										</p>
									</div>
								}
							</span>
						</div>
					})
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
	)
}

export default DailyExpense
