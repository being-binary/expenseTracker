import React, { useState } from 'react'
import DailyContext from './DailyContext'

const DailyState = (props) => {
	
	const [dailyExpense, setDailyExpense] = useState([
		{ id: "1", expense: "Groceries", price: 1500, date: { date: 20, month: 1, year: 2025 } },
		{ id: "2", expense: "Groceries", price: 1500, date: { date: 20, month: 1, year: 2025 } },
		{ id: "3", expense: "Groceries", price: 1500, date: { date: 20, month: 1, year: 2025 } },
		{ id: "4", expense: "Groceries", price: 1500, date: { date: 20, month: 1, year: 2025 } },
	])

	const addExpense = (data)=>{
		setDailyExpense([...dailyExpense, data])
	}

	const removeExpense = (id) => {
		let temp = dailyExpense.filter((ele)=>ele.id != id )
		setDailyExpense([...temp])
	}

	function formatDate(data) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(data.year, data.month - 1, data.date);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${day} ${month} ${year}, ${dayOfWeek}`;
	}

	return (
		<DailyContext.Provider value={{dailyExpense, setDailyExpense, addExpense, removeExpense, formatDate}}>
			{props.children}
		</DailyContext.Provider>
	)
}

export default DailyState
