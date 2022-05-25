module.exports = app =>{
    const users = require('./controllers');
    let router = require('express').Router();

    router.post('/add', users.create);
}
