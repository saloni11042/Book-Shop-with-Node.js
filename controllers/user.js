async function handleCategories(req,res){
    return res.render("categories",{title:"Categories"})
}
async function handleAbout(req,res){
    return res.render("about",{title:"About"})
}
async function handleBlog(req,res){
    return res.render("blog",{title:"Blog"})
}
async function handleContact(req,res){
    return res.render("contact",{title:"Contact"})
}
module.exports = {handleCategories,handleAbout,handleBlog,handleContact}