angular.module("blockchainApp").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/views/intro.html",
        controller: "IntroController",
      })
      .when("/blockchain", {
        templateUrl: "app/views/blockchain.html",
        controller: "BlockchainController",
      })
      .when("/add-block", {
        templateUrl: "app/views/addBlock.html",
        controller: "AddBlockController",
      })
      .when("/about", {
        templateUrl: "app/views/about.html",
      })
      .when("/contact", {
        templateUrl: "app/views/contact.html",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
