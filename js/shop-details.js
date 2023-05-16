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
    $("button.add").click(function(){
        let product = {};
        // get thong tin sp:
        product.name = $(this).closest("div.product__details__text").find("h4").text();
        product.price = $(this).closest("div.product__details__text").find("h3").find("strong").text();
        product.img = $("div.product__details__pic__item").find("img").attr("src");
        product.id = $(this).closest("div.product__details__text").find("div.product__details__last__option").find("ul").find("li:nth-child(1)").find("strong").text();
        product.quantity =1;

        let data=localStorage.getItem("list_product")
        if (data){
            data=JSON.parse(data);
            Object.keys(data).map(function(key,index){
                if(key == product.id){
                    product.quantity=parseInt(data[key]["quantity"])+1;
                }
            })
        }else{
            data={}
        }
        
        data[product.id] = product;
        // luu vao localstorage:
        localStorage.setItem("list_product", JSON.stringify(data))

        // khi click vao add to cart thi add them 1 san pham vao cart.
        total_products=total_products+1;
        $("div.header__nav__option").find("a:nth-child(3)").find("span").text(total_products);
        alert("Add to cart success!");
    })
})


