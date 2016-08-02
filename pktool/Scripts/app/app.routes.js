angular.module("app.routes", ["ui.router"])

.config(["$locationProvider", "$stateProvider", "$urlRouterProvider","$urlMatcherFactoryProvider",
    function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

        $locationProvider.html5Mode(true);
        var redirect = function () {
              
        };
    
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise("/home/");

        $stateProvider
            .state("home",
            {
                url: "/:lang/home",
                params: {
                    lang: {
                        value: null,
                        squash: true
                    }
                },
                templateUrl: "Content/views/home.html",
                controller: "homeController",
                controllerAs: "home"

            });


    }
]);