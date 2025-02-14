import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { setFetchData } from '../app/slices/ExpenseSlice'
const FetchApiData = () => {
    const dispatch = useDispatch()
    const yearlyExpenses = [
        { id: "1", expense: "Groceries", price: 1500, date: { date: 20, month: 1, year: 2025 } },
        { id: "2", expense: "Utilities", price: 3000, date: { date: 15, month: 2, year: 2025 } },
        { id: "3", expense: "Rent", price: 20000, date: { date: 1, month: 3, year: 2025 } },
        { id: "4", expense: "Transportation", price: 500, date: { date: 10, month: 4, year: 2025 } },
        { id: "5", expense: "Entertainment", price: 2000, date: { date: 5, month: 5, year: 2025 } },
        { id: "6", expense: "Dining Out", price: 2500, date: { date: 18, month: 6, year: 2025 } },
        { id: "7", expense: "Healthcare", price: 4000, date: { date: 22, month: 7, year: 2025 } },
        { id: "8", expense: "Insurance", price: 1500, date: { date: 12, month: 8, year: 2025 } },
        { id: "9", expense: "Education", price: 8000, date: { date: 25, month: 9, year: 2025 } },
        { id: "10", expense: "Clothing", price: 3000, date: { date: 30, month: 10, year: 2025 } },
        { id: "11", expense: "Groceries", price: 2500, date: { date: 15, month: 1, year: 2025 } },
        { id: "12", expense: "Utilities", price: 3500, date: { date: 20, month: 2, year: 2025 } },
        { id: "13", expense: "Rent", price: 21000, date: { date: 1, month: 3, year: 2025 } },
        { id: "14", expense: "Transportation", price: 600, date: { date: 10, month: 4, year: 2025 } },
        { id: "15", expense: "Entertainment", price: 1800, date: { date: 5, month: 5, year: 2025 } },
        { id: "16", expense: "Dining Out", price: 3000, date: { date: 18, month: 6, year: 2025 } },
        { id: "17", expense: "Healthcare", price: 4200, date: { date: 22, month: 7, year: 2025 } },
        { id: "18", expense: "Insurance", price: 1600, date: { date: 12, month: 8, year: 2025 } },
        { id: "19", expense: "Education", price: 8200, date: { date: 25, month: 9, year: 2025 } },
        { id: "20", expense: "Clothing", price: 3500, date: { date: 30, month: 10, year: 2025 } },
        { id: "21", expense: "Groceries", price: 3000, date: { date: 15, month: 1, year: 2025 } },
        { id: "22", expense: "Utilities", price: 3700, date: { date: 20, month: 2, year: 2025 } },
        { id: "23", expense: "Rent", price: 22000, date: { date: 1, month: 3, year: 2025 } },
        { id: "24", expense: "Transportation", price: 700, date: { date: 10, month: 4, year: 2025 } },
        { id: "25", expense: "Entertainment", price: 2100, date: { date: 5, month: 5, year: 2025 } },
        { id: "26", expense: "Dining Out", price: 3500, date: { date: 18, month: 6, year: 2025 } },
        { id: "27", expense: "Healthcare", price: 4300, date: { date: 22, month: 7, year: 2025 } },
        { id: "28", expense: "Insurance", price: 1700, date: { date: 12, month: 8, year: 2025 } },
        { id: "29", expense: "Education", price: 8300, date: { date: 25, month: 9, year: 2025 } },
        { id: "30", expense: "Clothing", price: 4000, date: { date: 30, month: 10, year: 2025 } },
        { id: "31", expense: "Groceries", price: 3500, date: { date: 15, month: 1, year: 2025 } },
        { id: "32", expense: "Utilities", price: 3800, date: { date: 20, month: 2, year: 2025 } },
        { id: "33", expense: "Rent", price: 23000, date: { date: 1, month: 3, year: 2025 } },
        { id: "34", expense: "Transportation", price: 800, date: { date: 10, month: 4, year: 2025 } },
        { id: "35", expense: "Entertainment", price: 2400, date: { date: 5, month: 5, year: 2025 } },
        { id: "36", expense: "Dining Out", price: 4000, date: { date: 18, month: 6, year: 2025 } },
        { id: "37", expense: "Healthcare", price: 4400, date: { date: 22, month: 7, year: 2025 } },
        { id: "38", expense: "Insurance", price: 1800, date: { date: 12, month: 8, year: 2025 } },
        { id: "39", expense: "Education", price: 8400, date: { date: 25, month: 9, year: 2025 } },
        { id: "40", expense: "Clothing", price: 4500, date: { date: 30, month: 10, year: 2025 } }
    ];
    
    // const data  = [
    //     {
    //         id: "1",
    //         expense: "Groceries",
    //         price: "1500",
    //         date: { date: 20, month: 1, year: 2025 },
    //     },
    //     {
    //         id: "2",
    //         expense: "Utilities",
    //         price: "3000",
    //         date: { date: 15, month: 2, year: 2025 },
    //     },
    //     {
    //         id: "3",
    //         expense: "Rent",
    //         price: "20000",
    //         date: { date: 1, month: 3, year: 2025 },
    //     },
    //     {
    //         id: "4",
    //         expense: "Transportation",
    //         price: "500",
    //         date: { date: 10, month: 4, year: 2025 },
    //     },
    //     {
    //         id: "5",
    //         expense: "Entertainment",
    //         price: "2000",
    //         date: { date: 5, month: 5, year: 2025 },
    //     },
    //     {
    //         id: "6",
    //         expense: "Dining Out",
    //         price: "2500",
    //         date: { date: 18, month: 6, year: 2025 },
    //     },
    //     {
    //         id: "7",
    //         expense: "Healthcare",
    //         price: "4000",
    //         date: { date: 22, month: 7, year: 2025 },
    //     },
    //     {
    //         id: "8",
    //         expense: "Insurance",
    //         price: "1500",
    //         date: { date: 12, month: 8, year: 2025 },
    //     },
    //     {
    //         id: "9",
    //         expense: "Education",
    //         price: "8000",
    //         date: { date: 25, month: 9, year: 2025 },
    //     },
    //     {
    //         id: "10",
    //         expense: "Clothing",
    //         price: "3000",
    //         date: { date: 30, month: 10, year: 2025 },
    //     },
    // ]
    useEffect(()=>{
        dispatch(setFetchData(yearlyExpenses))
    },[])
    return (
        <div>

        </div>
    )
}

export default FetchApiData
