async function handleAdmin(req,res){
    return res.render("admin",{title:"Admin"})
}

module.exports ={handleAdmin}