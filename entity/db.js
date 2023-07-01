const sqlite3 = require('sqlite3').verbose()
const db  = new sqlite3.Database(':memory:')

// returns db connection
function getDB() {
	return db
}

function seedBooksData() {
	db.serialize(()=> {
		db.run(`CREATE TABLE books (
			title VARCHAR(50),
			description TEXT,
			discount_rate INTEGER,
			cover_image  VARCHAR(255),
			price DECIMAL
		)`)

		const stmt = db.prepare(`INSERT INTO books VALUES(?,?,?,?,?)`)
		const sampleBook =  {
			"title": "레이블라우스",
			"description": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type 
							specimen book. It has survived not only five centuries, but also the leap into 
							electronic typesetting, remaining essentially unchanged. It was popularised in 
							the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
							and more recently with desktop publishing software like Aldus PageMaker including 
							versions of Lorem Ipsum.`,
			"discount_rate": 10,
			"cover_image": "https://images.pexels.com/photos/533562/pexels-photo-533562.jpeg",
			"price": 57600
		}
		for (let i = 0; i < 200; i++) {
			stmt.run(sampleBook.title, sampleBook.description, sampleBook.discount_rate, 
				sampleBook.cover_image, sampleBook.price)
		}
		stmt.finalize()
	})
}

// closes db
function closeDB() {
	db.close()
}

module.exports = {
	getDB,
	closeDB,
	seedBooksData
}