var shop = [
    {
      
      image: './BrandPhotos/freshpetroll.jpg',
      price: '$15.87',
      description: "Freshpet Healthy & Natural Fresh Grain Free Chicken Dog Food Roll, 5lbs."
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // i is less than something.something that reperesents the array
  
  
  
    
  
  
  
    for (var i=0; i < links.length; i++){
        var heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        var image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price"> $' + shop[i].price + '</span>';
        var description = shop[i].description + '</p><a class="cart" href="#"><i class="fas fa-cart-plus"></i></a> <a class="view" href="#" target="_blank"> View Item</a></div></div>';
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML