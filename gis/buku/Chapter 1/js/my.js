
//Defining map as a global variable to access from other functions
                var map;
                function initMap () {
                //Enabling new cartography and themes
                google.maps.visualRefresh = true;

                //Setting starting options of map
                var mapOptions = {
                  center: new google.maps.LatLng(39.9078, 32.8252),
                  zoom: 10,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                //Getting map DOM element
                var mapElement = document.getElementById('mapDiv');

                //Creating a map with DOM element which is just obtained
                map = new google.maps.Map(mapElement, mapOptions);

                //Start listening for button click events.
                startButtonEvents();

              }

          //Function that start listening the click events of the buttons.
          function startButtonEvents () {
            
              document.getElementById('btnZoomToIst').addEventListener('click', function(){
                  zoomToIstanbul();
              });

            document.getElementById('btnZoomToStr').addEventListener('click', function(){
            zoomToStreet();
            });

            document.getElementById('btnDisableDrag').addEventListener('click', function(){
            disableDrag();
            });
            document.getElementById('btnMaxZoom').addEventListener('click', function(){
            setMaxZoom();
            });
            document.getElementById('btnMinZoom').addEventListener('click', function(){
            setMinZoom();
            });
            document.getElementById('btnChangeUI').addEventListener('click', function(){
            changeUI();
            });
            document.getElementById('btnDisableScroll').addEventListener('click', function(){
            disableScroll();
            });
        }

          //Changes the center of map to a specific point
          function zoomToIstanbul () {
            var istanbul = new google.maps.LatLng(41.057974, 29.034805);
            map.setCenter(istanbul);
          }
          
          //Changes the zoom factor of map
          function zoomToStreet () {
            map.setZoom(18);                            
          }
          
          //Disables the drag property of map, the map is fixed
          function disableDrag () {
            map.setOptions ({ draggable: false });
          }
          
          //Sets the maximum zoom that map will focus.
          function setMaxZoom () {
            map.setOptions ({ maxZoom: 12 });
          }
          
          //Sets the minimum zoom that map will focus.
          function setMinZoom () {
            map.setOptions ({ minZoom: 5 });              
          }
          
              //Removes the default UI components.
            function changeUI () {
             map.setOptions ({ disableDefaultUI: true });              
           }
           
          //Disables the mouse wheel scroll in order to zoom in/out
          function disableScroll () {
            map.setOptions ({ scrollwheel: false });              
          }

          google.maps.event.addDomListener(window, 'load', initMap);


