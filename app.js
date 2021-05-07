var shop = [
    {
      
      image: './BrandPhotos/freshpetroll.jpeg',
      price: '15.87 ',
      description: "Freshpet Healthy & Natural Fresh Grain Free Chicken Dog Food Roll, 5lbs."
    },


    {
    image: './BrandPhotos/heartvitamin.jpg',
    price: '27.98 ',
    description: "Only Natural Pet Co. Q10 for Dogs & Cats, Heart and Cardiovascular Health Support, Coenzyme Q10 Ubiquinone"
  },
    
  {
    image: './BrandPhotos/dogfood.jpg',
    price: '25.99 ',
    description: "Only Natural Pet Wholesome Homemade Stew Dehydrated Dog Food - Human Grade Formula That Contains Real; Wholesome Nutrition, Low Glycemic, Non-GMO"
  },
    
  {
    image: './BrandPhotos/shampoo.jpg',
    price: '15.99 ',
    description: "Pure and Natural Pet - Fragrance Free Hypoallergenic Organic Shampoo Fragrance Free 16oz"
  },

  {
    image: './BrandPhotos/pillpockets.png',
    price: '7.99 ',
    description: "Greenies Pill Pockets Capsule Size Natural Dog Treats Hickory Smoke Flavor, 7.9 oz, Pack (30 Treats)"
  },


  {
    image: './BrandPhotos/antiflea.jpg',
    price: '16.00 ',
    description: "Pet Naturals of Vermont - Flea and Tick Repellant Spray, 8 oz."
  },

  {
    image: './BrandPhotos/calmingcat.jpg',
    price: '5.00 ',
    description: "Pet Naturals of Vermont - 30 Count Calming Behavioral Support Soft Chews for Cats"
  },

  {
    image: './BrandPhotos/leash.jpeg',
    price: '22.00 ',
    description: "Paw Yeah! Pet Shop 5ft Strong Leash and Adjustable Collar Set for Medium to Large Dog Breeds"
  },


  {
    image: './BrandPhotos/cattree.jpg',
    price: '150.00 ',
    description: "Paw Yeah! Pet Shop 70' Cat Tree Tower for Indoor Cats, Multi-Level Cat Condo, Tall Cat Climbing Stand with Plush Perch for Play Rest"
  },


  {
    image: './BrandPhotos/dogbed.jpeg',
    price: '180.00 ',
    description: "Pet Fusion Memory Foam Dog Bed Plush Mattress for Orthopedic Joint Relief Machine Washable with Removable Cover and Water Resistant Lining "
  },


]
    
    var postHTML = " "
  
  

  
  // i is less than something.something that reperesents the array
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        var image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price"> $' + shop[i].price + '</span>';
        var description = shop[i].description + '</p><a class="cart" href="#"><i class="fas fa-cart-plus"></i></a> <a class="view" href="#" target="_blank"> View Item</a></div></div>';
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML