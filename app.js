const mongoose = require('mongoose');

const User = require('./user');
const Product = require('./product');
const Order = require('./order');

const MONGODB_URI_DEV = "mongodb+srv://dbAdmin:geo123@cluster0.xwh1u.mongodb.net/shopDemoDb?retryWrites=true&w=majority";

const TEST_USERS_NUM = 2;
const TEST_PRODUCTS_NUM = 100;
const TEST_ORDERS_NUM = 4;

const generateTestData = function() {
    generateTestProducts(TEST_PRODUCTS_NUM);
    //todo
}

const generateTestProducts = function(count) {
    for (let i=0; i<count; i++) {
        const name = getRandomWord(getRandomInt(5, 10));
        const stock = getRandomInt(1, 100);
        const price = getRandomArbitrary(0.99, 99.99);
        Product.create({ name: name, stock: stock, price: price });
    }
}

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI_DEV).then(generateTestData);


// util

function getRandomWord(length) {
    var consonants = 'bcdfghjklmnpqrstvwxyz',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random()*limit);
        },
        i, word='', length = parseInt(length,10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
        let randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }
    return word;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}