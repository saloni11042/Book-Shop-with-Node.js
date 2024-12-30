const db = require('../connection/database')

module.exports = class Book{
    constructor(id,book_name,author_name,price,image,bookImage){
        this.id=id
        this.book_name=book_name
        this.author_name=author_name
        this.price =price
        this.image=image
        this.bookImage=bookImage
    }
    save(){
        return db.execute('INSERT INTO books (book_name,author_name,price,image,bookImage) VALUE (?,?,?,?,?)', [this.book_name,this.author_name,this.price,this.image, this.bookImage])
    }
    static async allProducts() {
          const [rows] = await db.execute('SELECT * FROM books');
          return rows; // Return the first element (rows), which is the array of products
        
      }
      static findProductById(id) {
        return db.execute('SELECT * FROM books WHERE id = ?',[id])
       }

       update() {
        return db.execute('UPDATE books SET book_name = ?, author_name = ?, price = ?, image = ? WHERE id = ?', 
            [this.book_name, this.author_name, this.price, this.image, this.id,this.bookImage]);
    }
    static async deleteById(id) {
          return db.execute('DELETE FROM books WHERE id = ?', [id]);
      
  }
}