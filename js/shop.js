$(document).ready(function(){
    // ============ cart ==============
    let total_products=0;
    // hien thi sl sp hien tai trong gio hang:
    let products=localStorage.getItem("list_product")
    if(products){
        products=JSON.parse(products);
        Object.keys(products).map(function(key,index){
            total_products= total_products + parseInt(products[key]["quantity"]);
        })
        $("div.header__nav__option").find("a:nth-child(3)").find("span").text(total_products);
    }
})
