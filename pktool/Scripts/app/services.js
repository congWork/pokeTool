angular.module("svc", [])
    .factory("appServices",
    [
        "$http", function($http) {
            var myFactory = {};

            myFactory.get = function (locationP) {
                var pokApi = '';
               // return $http.get(pokApi, { params: { lat: locationP.lat, lng: locationP.lng }, cache: true });
                return $http.get("/Scripts/app/testData.json");
            };
           
           
            return myFactory;
        }
    ]);
   