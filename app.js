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
    description: "Only Natural Pet Wholesome Homemade Stew Dehydrated Dog Food - Human Grade Formula That Contains Real, Wholesome Nutrition; Low Glycemic, Non-GMO"
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


  {
    image: './BrandPhotos/chia-pet-halloween-dog-costume.jpeg',
    price: '50.00 ',
    description: "Chia Pet As Seen On TV Small Dog Costume"
  },


  {
    image: './BrandPhotos/Realistic-Lion-Mane-for-Dogs.jpeg',
    price: '30.00 ',
    description: "Faux Lion Fur Mane & Tail Tuft Costume for Large Dogs"
  },


  {
    image: './BrandPhotos/dogtreats.jpeg',
    price: '20.00 ',
    description: "Clear Glass Jar For Animal Treats, Sealed Glass Lid, Durable Design"
  },

  {
    image: './BrandPhotos/foggybone.jpeg',
    price: '10.00 ',
    description: "Foggy Dog Painted Peonies Natural Dog Squeak Toy"
  },


  {
    image: './BrandPhotos/bandana.jpeg',
    price: '15.00 ',
    description: "Foggy Dog Painted Peonies Natural Dog Bandana"
  },



  {
    image: './BrandPhotos/birdfood.jpeg',
    price: '20.00 ',
    description: "Lafeber's Classic Nutri-Berries Pet Bird Food, Made With Non-GMO and Human-Grade Ingredients, for Parrots and Cockatiels"
  },




]
    
    var postHTML = " "
  
  

  
  // i is less than something.something that reperesents the array
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product items col-sm-12 col-md-4 col-lg-3 mt-5 justify-content-center" >';
        var image = '<img class="img-fluid" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price"> $' + shop[i].price + '</span>';
        var description = shop[i].description + '</p><div class=\'text-center\'><a class="cart" href="#"><i class="fas fa-cart-plus " id=\'vis\'></a></i> <a class="view pl-3" href="#" target="_blank"> View Item</a></div></div>';
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML