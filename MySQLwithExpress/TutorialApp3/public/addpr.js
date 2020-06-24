function addProducts(prname, prmanufacturer, prprice, done){
    $.post('/api/products/',{
        name: prname,
        manufacturer: prmanufacturer,
        price: prprice,
    }, function(data){
        done(data);
    })
}


$(function() {
    console.log('shshshshshsh');
    let productname = $('#product_name');
    let productmanufacturer = $('#product_manufacturer');
    let productprice = $('#product_price');
    let submitbtn = $('#submitbutton');
    $.get('/api/products/', function(data){
        console.log(data);
    })
    submitbtn.click(() => {
        console.log('working');
    })

    $('#sample').click(()=>{
        console.log('Sample Working');
        addProducts(productname.val(), productmanufacturer.val(), productprice.val(), function(added){
            window.alert("Added" + added.name + "to the database");
        })
    })
})


