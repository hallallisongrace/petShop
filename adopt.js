var shop = [
    {
      
      image: './AnimalPhotos/pilot.jpg',
      price: '',
      description: "Pilot - German Shepherd Mix"
    },


    {
    image: './AnimalPhotos/saint bernard.jpeg',
    price: '',
    description: "Atlas - Saint Bernard"
  },
    
  {
    image: './AnimalPhotos/greatpyr.jpeg',
    price: '',
    description: "Maverick - Great Pyrenees"
  },
    
  {
    image: './AnimalPhotos/rogue.jpeg',
    price: '',
    description: "Rogue - Turkish Angora"
  },

  {
    image: './AnimalPhotos/freya.jpeg',
    price: '',
    description: "Freya - Norwegian Forest"
  },


  {
    image: './AnimalPhotos/aloysius.jpeg',
    price: '',
    description: "Aloysius - Maine Coon"
  },

  {
    image: './AnimalPhotos/parrot.jpeg',
    price: '',
    description: "Chick Jagger - Parrot"
  },

  {
    image: './AnimalPhotos/mickjagger.jpeg',
    price: '',
    description: "Kanye Nest - Cockatiel"
  },


  


]
    
    var postHTML = " "
  
  

  
  // i is less than something.something that reperesents the array
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        var image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price">' + shop[i].price + '</span>';
        var description = shop[i].description + '</p><a class="cart" href="#"><i class=""></i></a> <a class="view" href="#" target="_blank">Adopt Now</a></div></div>';
 
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('adopt').innerHTML = postHTML