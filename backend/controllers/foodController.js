// Example foodController.js

import Food from '../models/foodModel.js'; // Adjust the path as needed

// Add food
export const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image = req.file ? req.file.path : ''; // Handle file path
        const newFood = new Food({ name, description, price, category, image });
        await newFood.save();
        res.status(201).json({ message: 'Food added successfully', food: newFood });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add food', details: error.message });
    }
};

// List food
export const listFood = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch food', details: error.message });
    }
};

// Remove food
export const removeFood = async (req, res) => {
    try {
        const { id } = req.body;
        await Food.findByIdAndDelete(id);
        res.status(200).json({ message: 'Food removed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove food', details: error.message });
    }
};
