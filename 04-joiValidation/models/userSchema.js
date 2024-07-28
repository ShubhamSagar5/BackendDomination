const Joi = require('joi')
const mongoose = require('mongoose')


const connectDB = () => {
    mongoose.connect('mongodb+srv://s60889355:OJYdjgGyB4lfHPPY@cluster0.dmltcal.mongodb.net',{
    dbName:'joi'
})
console.log('database connect successfull')
}


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true // Removes extra spaces
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true // Removes extra spaces
    },
    email: Joi.string()
        .email({ tlds: false }) // Disables TLD checking
        .custom((value, helpers) => {
            const allowedDomains = ['com', 'net'];
            const domain = value.split('@')[1];
            if (!allowedDomains.includes(domain.split('.').pop())) {
                return helpers.message('Only .com and .net email addresses are allowed.');
            }
            return value; // Return the value if it passes the custom validation
        })
        .required()
        .messages({
            'string.email': 'Email address is invalid.',
            'any.required': 'Email is required.'
        }),
    // Other fields remain unchanged

    phoneNumber: { // Renamed to camelCase for consistency
        type: Number,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Validates that the phone number has exactly 10 digits
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
});


function validateData (data) {
    const Schema = Joi.object({
        firstName: Joi.string()
            .min(3)
            .max(255)
            .required()
            .messages({
                'string.base': 'First name should be a string.',
                'string.min': 'First name should have a minimum length of 3 characters.',
                'any.required': 'First name is required.'
            }),
        lastName: Joi.string()
            .min(3)
            .max(255)
            .required()
            .messages({
                'string.base': 'Last name should be a string.',
                'string.min': 'Last name should have a minimum length of 3 characters.',
                'any.required': 'Last name is required.'
            }),
            email: Joi.string()
        .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) // Basic email validation regex
        .custom((value, helpers) => {
            const domainRegex = /\.(com|net)$/;
            if (!domainRegex.test(value)) {
                return helpers.message('Only .com and .net email addresses are allowed.');
            }
            return value; // Return the value if it passes the custom validation
        })
        .required()
        .messages({
            'string.pattern.base': 'Email address is invalid.',
            'any.required': 'Email is required.'
        }),
        phoneNumber: Joi.number()
            .integer()
            .min(1000000000)
            .max(9999999999)
            .optional()
            .messages({
                'number.base': 'Phone number should be a number.',
                'number.integer': 'Phone number should be an integer.',
                'number.min': 'Phone number should have a minimum length of 10 digits.',
                'number.max': 'Phone number should have a maximum length of 10 digits.'
            })
    });

    const response = Schema.validate(data)

    return response
}


const User = mongoose.model("User",userSchema)

module.exports = {User,connectDB,validateData}