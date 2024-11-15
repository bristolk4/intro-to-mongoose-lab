const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const CRM = require('./models/customer.js')
const prompt = require('prompt-sync')();
const selection = " "

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    const menu = () => {
        console.log(`Welcome to the CRM!\n
        What would you like to do? \n   
        1. Create a customer\n
        2. View all customers\n
        3. Update a customer\n
        4. Delete a customer\n
        5. quit\n`)
        selection = prompt('Choose a number 1-5 and press enter. ')
    }
    menu();

    if (selection == 1){
        const create = () => {
            
        }
    }

    if (selection == 2){
        const create = () => {
            
        }
    }
  }

connect()
