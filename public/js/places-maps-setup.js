function initMap() {
    const map = new google.maps.Map(document.querySelector("#myMap"), {
      zoom: 12,
      center: {
        lat: 40.4198832709855,
        lng: -3.6223011629634767,
      },
    });
  
    getPlaces(map);
  }

//   initMap()
  
  function getPlaces(map) {
    axios
      .get("/api/places")
      .then((response) => printPlaces(response.data, map))
      .catch((err) => console.log("holaaaaaa estoy aqui", err));
  }
  
   function printPlaces(places, map) {
    places.forEach((elm) => {
       let position = {
         lat: elm.location.coordinates[0],
         lng: elm.location.coordinates[1],
       };
  
       new google.maps.Marker({ map, position, title: elm.name });
     });
   }