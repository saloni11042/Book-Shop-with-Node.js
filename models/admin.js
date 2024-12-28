const db = require('../connection/database')

module.exports = class Book{
    constructor(id,book_name,author_name,price,image){
        this.id=id
        this.book_name=book_name
        this.author_name=author_name
        this.price =price
        this.image=image
    }
    save(){
        return db.execute('INSERT INTO books (book_name,author_name,price,image) VALUE (?,?,?,?)', [this.book_name,this.author_name,this.price,this.image])
    }
    static async allProducts() {
        try {
          const [rows] = await db.execute('SELECT * FROM books');
          return rows; // Return the first element (rows), which is the array of products
        } catch (err) {
          throw err;
        }
      }
}