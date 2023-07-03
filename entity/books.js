
function getBooks() {
	let books = []
	for (let i = 0; i < 10; i++) {
		books.push({
			"title": "레이블라우스",
			"description": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			"discount_rate": 10,
			"cover_image": "https://images.pexels.com/photos/533562/pexels-photo-533562.jpeg",
			"price": 57600
		})
	}
	return books
}

module.exports = {
	getBooks
}