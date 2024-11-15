const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const CRM = require('./models/customer.js')
const prompt = require('prompt-sync')();
let selection = " "

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    menu();
}  

const menu = () => {
    console.log(`Welcome to the CRM!\n
    What would you like to do? \n   
    1. Create a customer\n
    2. View all customers\n
    3. Update a customer\n
    4. Delete a customer\n
    5. Quit\n`)
    selection = prompt('Choose a number 1-5 and press enter. ')
    if (selection == 1) {
        create()
    }
    if (selection == 2) {
        findCusts()
    }
    if (selection == 3) {
        update()
    }
    if (selection == 4) {
        del()
    }
    if (selection == 5) {
        quit()
    }   
}
  

const create = async () => {
    const custName = prompt('Please enter your name ')
    const custAge = prompt('Please enter your age ')
    const newCust = await CRM.create({
        name: custName,
        age: custAge
    })
    console.log(newCust);
    menu();
}

const findCusts = async () => {
    const allCust = await CRM.find({})
    console.log(allCust)
    menu();
}

const update = async () => {
    const id = prompt('Please enter the id of the customer you want to update: ')
    const updatedName = prompt('Please enter the new name: ');
    const updatedAge = prompt('Please enter the new age: ');
    const updates = {};
    updates.name = updatedName;
    updates.age = updatedAge;
    const updatedCust = await CRM.findByIdAndUpdate(
        id,
        updates,
        { new: true })
    console.log('Here is your updated customer data:', updatedCust)
    menu();
};

const del = async () => {
    const id = prompt('Please enter the id of the customer you want to delete: ');
    const deletedCust = await CRM.findByIdAndDelete(id);
    console.log('You have deleted', deletedCust.name, '. :-(');
    menu();
}

const quit = async () => {
    console.log('Good bye ;-)')
    mongoose.connection.close()
}

connect()
