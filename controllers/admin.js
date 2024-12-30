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
    const bookImage = req.body.image
    console.log(body)
    const book = new Book(null,book_name,author_name,price,image,bookImage);
    const products = await Book.allProducts(); 
    book.save().then(()=>{
        return res.render("all-products",{title:"All Products",books: products})
    }).catch(err=>console.log(err))

    
}

async function handleGetUpdateProduct(req,res){
    // const bookId = req.params.bookId;
    // Book.findProductById(bookId,product=>{
    //   if(!product){
    //     return res.redirect('/')
    //   }
    //   res.render('update-product', {
    //     product: product,
    //     pageTitle: 'Update Product',
    //   });
    // })  
}

async function handlePostUpdateProduct(req,res){
    return res.render("add-product",{title:"Add Product"})
}

module.exports ={handleAdmin,handleGetAddProduct,handlePostAddProduct,handleAllProduct,handleGetUpdateProduct,handlePostUpdateProduct}