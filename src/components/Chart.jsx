// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


const Chart = () => {


    const data = useSelector((state) => state.expense.value)
    // console.log(data)
    const januaryExpense = data.filter(item => item.date.month == 7);
    const labels = januaryExpense.map(item => item.expense);
    const prices = januaryExpense.map(item => item.price);
    // console.log(januaryExpense, labels, prices)

    return (
        <div className='w-full h-full p-2'>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Expense',
                            data: prices,
                        },
                    ]
                }}
            />
        </div>


    )
}

export default Chart

{/* <Bar
                data={{
                        labels: ["A", "B", "C"],
                        datasets :[
                            {
                                label: 'Expense',
                                data: [200,300,400],
                            },
                        ]
                    }}
            /> */}