import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Boards from './model/BoardSchema';

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri')).then(
	() => {console.log('Database is connected')}, 
	err => {console.log('Error connecting to DB' + err)});
var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

	res.setHeader('Cache-Control', 'no-cache');
	next();
});

app.get('/', (req, res) => {
	res.json({ message: 'API initialized!'});
});

app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
});

app.get('/boards', (req, res) => {
	Boards.find({}).sort({'createdAt': -1}).limit(20).exec(function(err, board) {
		if(err) throw err;
		var customMap = [];
		board.forEach(function(custom) {
			customMap.push(custom);
		});
		res.json(customMap);
		
	});
});

app.post('/boards', (req, res) => {
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

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'index.html'));
});

app.listen(port, function() {
	console.log(`API running on port ${port}`);
});