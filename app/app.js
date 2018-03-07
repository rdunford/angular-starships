angular.module('starships', ['ui.router'])

angular.module('starships').config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/home/home.html'
    }).state('ships', {
        url: '/ships',
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('ship', {
        url: '/ships/:id',
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'
    }).state('shipDetailsMany', {
        url: '/ships/:id',
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'
    })

})