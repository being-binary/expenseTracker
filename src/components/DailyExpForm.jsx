import React, { useContext, useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Select, message } from 'antd';
import { useDispatch } from 'react-redux'; // Assuming you're using redux to manage your state
import DailyContext from '../context/DailyContext';

const { Option } = Select;

const DailyExpForm = () => {
		const ctx = useContext(DailyContext)
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    // Predefined categories
    const categories = [
        "Groceries", 
        "Utilities", 
        "Rent", 
        "Transportation", 
        "Entertainment", 
        "Dining Out", 
        "Healthcare", 
        "Insurance", 
        "Education", 
        "Clothing"
    ];

    // Function to handle form submission
    const onFinish = (values) => {
        const { expense, price, date, category } = values;

        // Convert the date into the format you need
        const formattedDate = {
            date: date.date(),
            month: date.month() + 1, // Ant Design DatePicker uses 0-based month
            year: date.year(),
        };

        const newExpense = {
            id: Date.now().toString(), // Generate unique ID based on timestamp
            expense,
            price,
            date: formattedDate,
            category, // Store the selected category
        };

        // Assuming you are dispatching action to update the state in Redux
        dispatch(ctx.addExpense(newExpense)); 

        message.success('Expense added successfully!'); // Display success message
        console.log(newExpense); // Log the new expense (you can replace this with dispatch)

        form.resetFields(); // Reset form fields after submission
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>Add a New Expense</h2>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    price: 0,
                    category: categories[0], // Default category
                }}
            >
                {/* Expense Name */}
                <Form.Item
                    label="Expense Name"
                    name="expense"
                    rules={[{ required: true, message: 'Please input the expense name!' }]}
                >
                    <Input placeholder="Enter expense name" />
                </Form.Item>

                {/* Price */}
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input the price!' }]}
                >
                    <InputNumber
                        min={0}
                        style={{ width: '100%' }}
                        placeholder="Enter the price"
                    />
                </Form.Item>

                {/* Date */}
                <Form.Item
                    label="Date"
                    name="date"
                    rules={[{ required: true, message: 'Please select the date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                {/* Category */}
                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select a category">
                        {categories.map((category) => (
                            <Option key={category} value={category}>
                                {category}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Add Expense
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default DailyExpForm;
