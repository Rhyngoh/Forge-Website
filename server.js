// const express = require('express');
// const bodyParser = require('body-parser');
// const logger = require('morgan');
// const mongoose = require('mongoose');
// const path = require('path');
// const config = require('./secrets');
// const Boards = require('./model/BoardSchema');
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
//import config from './secrets';
import Boards from './model/BoardSchema';

const app = express();
// const router = express.Router();

const port = process.env.PORT || 5000;

//config.DB instead of url below
mongoose.connect('mongodb://admin:77AE28e3!@ds245532.mlab.com:45532/forge').then(
	() => {console.log('Database is connected')}, 
	err => {console.log('Error connecting to DB' + err)});
const db = mongoose.connection;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
	res.json({ message: 'API initialized!'});
});

app.get('/api/boards', (req, res) => {
	Boards.find({}).sort({'createdAt': -1}).limit(20).exec(function(err, board) {
		if(err) throw err;
		var customMap = [];
		board.forEach(function(custom) {
			customMap.push(custom);
		});
		res.json(customMap);
		
	});
});

app.post('/api/boards', (req, res) => {
	console.log(req.body);
	const custom = new Boards();
	const { author, title, image } = req.body;
	if(!author || !title || !image){
		return res.json({
			success: false,
			error: 'Must provide an Author, Title, and Image'
		});
	}
	custom.author = author;
	custom.title = title;
	custom.image = image;
	custom.save(err => {
		if(err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, function() {
	console.log(`API running on port ${port}`);
});