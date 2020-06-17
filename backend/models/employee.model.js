let mongoose = require('mongoose');

const server = "localhost:27017";
const database = 'employees';
const user = 'root';
const password = 'root';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true});

let employeeSchema = new mongoose.Schema({
    name: String,
    designation: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
});

module.exports = mongoose.model('employees', employeeSchema);