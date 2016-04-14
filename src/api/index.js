'use strict';

var express = require('express');

var todos = require('../../mock/todos.json');


var router = express.Router();

router.get('/todos', function(req, res){
	res.json({todos: todos});
});


// TODO create post route, to create new entries

// TOLO add put route to update existing entries

// TODO add delete route to delete entries

module.exports = router;