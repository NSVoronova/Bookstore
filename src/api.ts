export {}
//https://www.googleapis.com/books/v1/volumes?q=Ruskin%20Bond&maxResults=11

// fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.keyword}&orderBy=${this.props.sortBy}&printType=${this.props.printType}&key=${this.state.key}&startIndex=${this.props.startItemIndex}&maxResults=${this.props.maxItems}`)
// .then(res => res.json())
// .then(data => {
//   const bookInfo = data.items.map((el, index) => {
//     const { authors, publisher, publishedDate, subtitle, imageLinks, infoLink, description, title } = el.volumeInfo