function fetchproducts(done) {
    $.get('/api/products', function(response) {
        done(response);
    })
}



$(function(){
    let product_list = $('#product_list');
    fetchproducts(function(products){
        for(product of products){
            product_list.empty();
            for(product of products){
                product_list.append(`<div class="col-4 card mx-2 p-4">
                <h4 class="product_name">${product.name}</h4>
                <div class="product_manufacturer">${product.manufacturer}</div>
                <div class="row">
                    <div class="col m-3 p-3">
                        <h4 class="product_price"><b>Rs. ${product.price}</b></h4>
                    </div>
                    <button class="col btn btn-primary m-3" class="buybtn">Buy</button>
                </div>
            </div>`);
            }
        }
    })

})