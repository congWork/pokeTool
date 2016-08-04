angular.module("ctrl", ['svc'])
    .constant("APPCONFIG",
    {

    })
    .controller("baseController", ["$rootScope", '$window',
        function ( $rootScope,$window) {
            var vm = this;
         
         
        }])
      .controller("homeController",
    [
        "$rootScope", "$state", "$stateParams", '$window', '$document','$scope','appServices',
        function ($rootScope, $state, $stateParams, $window, $document, $scope, appServices) {
            var vm = this;
            vm.isOpen = false;
            vm.currentLocation = null;
            vm.currentLocationString = 'none';
            vm.pokeList = [];
            vm.dropDownPokeNameSource = ['name1', 'name2','dratini'];
            vm.wantedPokeList = [];

            vm.propertyName = 'expires';
            vm.reverse = true;

            vm.sortBy = function (propertyName) {
               vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
                vm.propertyName = propertyName;
            };
            appServices.get("s")
                .then(function (d) {
                    vm.pokeJsonDataSource = angular.toJson(d.data);
                });
            vm.cancelForm = function() {
                vm.pokeJsonDataSource = "";
            };
            vm.submitForm = function () {
                try {
                    vm.pokeList = angular.fromJson(vm.pokeJsonDataSource).pokemons;
                } catch (ex) {
                    alert('please paste your json string');
                    return false;
            }
            };
            vm.copyLocation = function (toCopy) {
               
                try {
                    var successful = document.execCommand('copy');
                    if (!successful) throw successful;
                    console.log(window.getSelection());
                } catch (err) {
                    console.log("failed to copy", toCopy);
                }
            };
            var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var labelIndex = 0;
            var marker = null;
            
            function initialize() {
                var bangalore = { lat: 12.97, lng: 77.59 };
                var map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: bangalore });
                // This event listener calls addMarker() when the map is clicked.
                google.maps.event.addListener(map, 'click', function (event) {
                    vm.currentLocation = event.latLng;
                    $scope.$apply(function () {
                        vm.currentLocationString = vm.currentLocation.lat() + ',' + vm.currentLocation.lng();
                    });
                    
                    clearMarkers();
                    addMarker(event.latLng, map);

                   

                   
                });
                // Add a marker at the center of the map. 
                addMarker(bangalore, map);
            }
            // Adds a marker to the map. 
            function addMarker(location, map) {
                // Add the marker at the clicked location, and add the next-available label
                // from the array of alphabetical characters.
                 marker = new google.maps.Marker({
                    position: location, label: "ssss", map: map
                 });

                 window.setTimeout(function () {
                     //delete current marker
                 }, 3000);

            }
            function clearMarkers() {
                setMapOnAll(null);
            }
            function setMapOnAll(map) {
                    marker.setMap(map);
            }


            google.maps.event.addDomListener($window, 'load', initialize);
        }
    ])
;