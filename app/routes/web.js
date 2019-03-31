const web = require('express').Router();
const { loadView } = require('../utils/route-utils');

web.get('/' , (req, res) => loadView(res, 'index') );


module.exports = web;