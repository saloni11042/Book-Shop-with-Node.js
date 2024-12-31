const Book = require("../models/admin")

  


async function handleAdmin(req,res){
    return res.render("admin",{title:"Admin"})
}

async function handleGetAddProduct(req,res){
    return res.render("add-product",{title:"Add Product"})
}
async function handleAllProduct(req, res) {
      const products = await Book.allProducts(); 
      return res.render("all-products", { title: "All Products", books: products });
   
  }
async function handlePostAddProduct(req,res){
    const body=req.body
    const book_name = req.body.book_name
    const author_name = req.body.author_name
    const price = req.body.price
    const image = req.body.image
    const bookImage = req.file.filename;
    console.log(body)
    console.log(req.file)
    const book = new Book(null,book_name,author_name,price,image,bookImage);
    const products = await Book.allProducts(); 
    book.save().then(()=>{
        return res.render("all-products",{title:"All Products",books: products})
    }).catch(err=>console.log(err))

    
}

async function handleGetUpdateProduct(req,res){
    const id = req.params.id;
    const product = await Book.findProductById(id)
    console.log(product)
    return res.render("update-product",{title:"Update Product",book:product})

}

async function handlePostUpdateProduct(req,res){
    console.log(req.body)
    const updatedBookName = req.body.book_name
    const updatedAuthorName = req.body.author_name
    const updatedImage = req.body.image
    const updatedBookImage = req.body.bookImage
    const updatedPrice = req.body.price
    const id = req.params.id
    const updatedProduct = new Book(id,updatedBookName,updatedAuthorName,updatedPrice,updatedImage,updatedBookImage);
    console.log(updatedProduct)
    await updatedProduct.update();
    res.redirect('all-products');
}

async function handleDeleteProduct(req,res){
    const id = req.params.id
    const deletedProduct = await Book.deleteById(id)
    console.log(deletedProduct)
    const products = await Book.allProducts(); 
    return res.render("all-products",{title:"All Product",books:products})

}

module.exports ={handleAdmin,handleGetAddProduct,handlePostAddProduct,handleAllProduct,handleGetUpdateProduct,handlePostUpdateProduct,handleDeleteProduct}