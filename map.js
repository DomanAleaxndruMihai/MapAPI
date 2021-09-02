
var locations = [
    ['BIT academy', 44.433682, 26.103879, 1],
    ['Metrou Universitate', 44.435860, 26.102750, 2],
    ['Piata Universitatii', 44.434917, 26.101151, 3]
  ];

  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(44.434770, 26.102560)
  });

  document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + 44.434770 + '| Longitudine: ' + 26.102560 + ' | Apasa markerele pentru a latitudinea si longitudinea.' + '</p>';

  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  for (i = 0; i < locations.length; i++) {  
      
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: image
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + locations[i][1] + '| Longitudine: ' + locations[i][2] + '</p>';
        var x = document.getElementById("back");
        x.style.display = "block";
      }
    })(marker, i));
  }
  

  function generate_map(lat_val, lng_val, desc_val) {
    
    let map_el = document.getElementById('map');
	
	let map_options_obj = {
		
		center: {lat: lat_val, lng: lng_val},
		zoom: 15,
		
	};
	
	let map_obj = new google.maps.Map(map_el, map_options_obj);
	
	let marker_options_obj = {
		
		position: map_options_obj.center,
        map: map_obj,
        icon: image
		
	};
	
	let marker_obj = new google.maps.Marker(marker_options_obj);
	
	let infowindow_options_obj = {
	
    content: '<p>' + desc_val + '<p>',
    
		
	};
	
	let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);
	
    infowindow_obj.open(map_obj, marker_obj);
    
	
	marker_obj.addListener('click', function(ev) {
	
		infowindow_obj.open(map_obj, marker_obj);
    console.log(ev);
    
	
    });
    
    document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + '| Longitudine: ' + lng_val + '</p>';
    var x = document.getElementById("back");
    x.style.display = "block";
}

  document.getElementById('findd').onkeypress = function(ev) {
	
	
	if (ev.key == 'Enter' || ev.keyCode == 13) {
		
		let search_str = this.value;
		
		let geocoder_obj = new google.maps.Geocoder();
		
		geocoder_obj.geocode({address: search_str}, function(results, status) {
		
			if (!results || status == 'ZERO_RESULTS') {
				
        alert('Adresa nu a putut fi gasita!');
        var x = document.getElementById("back");
        x.style.display = "block";
				
			} else {
				
				let new_lat_val = results[0].geometry.location.lat();
				let new_lng_val = results[0].geometry.location.lng();
				let new_desc_val = results[0].formatted_address;
                generate_map(new_lat_val, new_lng_val, new_desc_val);
               
			}
		
		});
		
	}
	
};


//CAUTARE DIVURI





document.getElementById("link1").addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Arcul de Triumf';

  var lat_val = 44.467170;
  var lng_val = 26.078116;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 14,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Arcul de Triumf"
});

let infowindow_options_obj = {
	
  content: '<p>' + 'Arcul de Triumf' + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
        var x = document.getElementById("back");
        x.style.display = "block";
});


document.getElementById("link2").addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Casa Poporului';
   
  var lat_val = 44.427519;
  var lng_val = 26.087372;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 14,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Casa Poporului"
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});

document.getElementById("link3").addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Ateneul Roman';

  var lat_val = 44.441328;
  var lng_val = 26.097268;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:'Ateneul Roman'
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});

document.getElementById("link4").addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Muzeul Național al Satului „Dimitrie Gusti”';
  
  var lat_val = 44.472389;
  var lng_val = 26.076574;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:'Muzeul Național al Satului „Dimitrie Gusti”'
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});

document.getElementById("link5").addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Muzeul Antipa';
   
  var lat_val = 44.453120;
  var lng_val = 26.084649;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:'Muzeul Antipa'
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});

document.getElementById('link6').addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Muzeul Național de Istorie a României';

  var lat_val = 44.431458;
  var lng_val = 26.097460;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:'Muzeul Național de Istorie a României'
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});

document.getElementById('link7').addEventListener('click', function () {
  var text = document.getElementById('findd');
  text.value = 'Muzeul Național de Artă al României';

  var lat_val = 44.439367;
  var lng_val = 26.095863;

  var myLatlng = new google.maps.LatLng(lat_val, lng_val);
  var mapOptions = {
  zoom: 15,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:'Muzeul Național de Artă al României'
});

let infowindow_options_obj = {
	
  content: '<p>' + text.value + '<p>',
  
};

let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

  infowindow_obj.open(map, marker);
  

marker.setMap(map);

document.getElementById("info").innerHTML = '<p>'+ 'Latitudine: ' + lat_val + ' | Longitudine: ' + lng_val + '</p>';
var x = document.getElementById("back");
x.style.display = "block";
});











