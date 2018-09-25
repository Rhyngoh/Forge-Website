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
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const app = express();
// const router = express.Router();

const port = process.env.PORT || 5000;

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: 'https://the-forge.auth0.com/.well-known/jwks.json'
	}),
	audience: 'q5ijCAci5eEDCGBWXpMb2Brvf47RhaW2',
	issuer: 'https://the-forge.auth0.com',
	algorithms: ['RS256']
});

//config.DB instead of url below
mongoose.connect('mongodb://admin:77AE28e3!@ds245532.mlab.com:45532/forge').then(
	() => {console.log('Database is connected')}, 
	err => {console.log('Error connecting to DB' + err)});
const db = mongoose.connection;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(logger('dev'));

app.get('/', (req, res) => {
	res.json({ message: 'API initialized!'});
});

app.get('/api/boards', (req, res) => {
	Boards.find({}).sort({'createdAt': -1}).exec(function(err, board) {
		if(err) throw err;
		var customMap = [];
		board.forEach(function(custom) {
			customMap.push(custom);
		});
		res.json(customMap);
		
	});
});

app.post('/api/boards/post', (req, res) => {
	console.log('Post Request');
	console.log(req.body);
	const custom = new Boards();

	const { author, title, image, paste } = req.body;
	if(!author || !title || !image || !paste){
		return res.json({
			success: false,
			error: 'Must provide a Title and Image'
		});
	}
	custom.author = author;
	custom.title = title;
	custom.image = image;
	custom.paste = paste;
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