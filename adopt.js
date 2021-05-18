var shop = [
    {
      
      image: './AnimalPhotos/pilot.jpg',
      price: '',
      description: "Pilot - German Shepherd Mix. Energetic, lively, needs much stimulation and engagement. Excellent guard dog and family protector. 2 years old, male.",
      petBio: 'Pet Bio'
    },


    {
    image: './AnimalPhotos/saint bernard.jpeg',
    price: '',
    description: "Atlas - Saint Bernard. A gentle giant. Lazy, calm, relaxed. Great with children of all ages; patient and lumbering. 4 years old, male.",
    petBio: 'Pet Bio'
  },
    
  {
    image: './AnimalPhotos/greatpyr.jpeg',
    price: '',
    description: "Maverick - Great Pyrenees. Lovable, playful, sweet. Will make a great family dog, though prone to barking and digging. Six months old, male. ",
    petBio: 'Pet Bio'
  },
    
  {
    image: './AnimalPhotos/rogue.jpeg',
    price: '',
    description: "Rogue - Turkish Angora. Calm, reserved, likes alone time. Great for quiet households with no children or other pets. Not cuddly, but loves to be near you. 3 years old, female. ",
    petBio: 'Pet Bio'
  },

  {
    image: './AnimalPhotos/freya.jpeg',
    price: '',
    description: "Freya - Norwegian Forest. Playful, mischevious, energetic. Full of energy and very sweet, does well with older children and other pets. 1 year old, female.",
    petBio: 'Pet Bio'
  },


  {
    image: './AnimalPhotos/aloysius.jpeg',
    price: '',
    description: "Aloysius - Maine Coon. Quiet, dignified, reserved. Very affectionate and a great snuggler once he warms up to you. King of the house, prefers no other pets or children. 2 years old, male.",
    petBio: 'Pet Bio'

  },

  {
    image: './AnimalPhotos/parrot.jpeg',
    price: '',
    description: "Chick Jagger - Parrot. Loud, mischevious, social. Knows many words and sounds, recognizes faces and voices. Does not like to be petted, but likes to be spoken to and taken out of cage to explore. 1 year old, male.",
    petBio: 'Pet Bio'
  },

  {
    image: './AnimalPhotos/mickjagger.jpeg',
    price: '',
    description: "Kanye Nest - Cockatiel. Sweet, gentle, quiet. Enjoys being stroked. Needs a quiet environment and likes to be spoken to gently. 2 years old, male.",
    petBio: 'Pet Bio'
  },


  


]
    
    var postHTML = " "
  
  

  
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        var image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        var price = '<div><p>' + '<span class="price">' + shop[i].price + '</span>';
        var description = shop[i].description + '</p> <div class=\'text-center\'><a class="cart" href="#"><i class=""></i></a> <a class="view justify-content-center" href="#" target="_blank" class=>Adopt Now</a></div>';
        var petBio =  "<br><div class=\'text-center\'><a class='view'>" + shop[i].petBio + "</a></div></div></div>";
 
        var concatThis = heading + image + price + description + petBio;
        postHTML = postHTML + concatThis
    }
    document.getElementById('adopt').innerHTML = postHTML