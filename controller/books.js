const entity = require('../entity/books')

function getBooks(req, res){
	res.json(entity.getBooks())
}

module.exports = {
	getBooks
}