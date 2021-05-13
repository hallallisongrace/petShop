var shop = [
    {
      
      image: './AnimalPhotos/pilot.jpg',
      price: '',
      description: "Pilot - German Shepherd Mix",
      petBio: 'Pet Bio'
    },


    {
    image: './AnimalPhotos/saint bernard.jpeg',
    price: '',
    description: "Atlas - Saint Bernard",
    petBio: 'Pet Bio'
  },
    
  {
    image: './AnimalPhotos/greatpyr.jpeg',
    price: '',
    description: "Maverick - Great Pyrenees",
    petBio: 'Pet Bio'
  },
    
  {
    image: './AnimalPhotos/rogue.jpeg',
    price: '',
    description: "Rogue - Turkish Angora",
    petBio: 'Pet Bio'
  },

  {
    image: './AnimalPhotos/freya.jpeg',
    price: '',
    description: "Freya - Norwegian Forest",
    petBio: 'Pet Bio'
  },


  {
    image: './AnimalPhotos/aloysius.jpeg',
    price: '',
    description: "Aloysius - Maine Coon",
    petBio: 'Pet Bio'

  },

  {
    image: './AnimalPhotos/parrot.jpeg',
    price: '',
    description: "Chick Jagger - Parrot",
    petBio: 'Pet Bio'
  },

  {
    image: './AnimalPhotos/mickjagger.jpeg',
    price: '',
    description: "Kanye Nest - Cockatiel",
    petBio: 'Pet Bio'
  },


  


]
    
    var postHTML = " "
  
  

  
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        var image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price">' + shop[i].price + '</span>';
        var description = shop[i].description + '</p><a class="cart" href="#"><i class=""></i></a> <a class="view" href="#" target="_blank">Adopt Now</a>';
        var petBio =  "<br> <a class='view'>" + shop[i].petBio + "</a></div></div>";
 
        var concatThis = heading + image + price + description + petBio;
        postHTML = postHTML + concatThis
    }
    document.getElementById('adopt').innerHTML = postHTML