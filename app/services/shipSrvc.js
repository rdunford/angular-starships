angular.module('starships').service('shipSrvc', function ($http) {

    this.getShips = function () {
        return $http.get('https://swapi.co/api/starships/').then(resp => {
            return resp.data.results.map(ship => {
                //https://swapi.co/api/starships/5/
                let ary = ship.url.split('/');
                let id = ary[ary.length - 2] * 1;
                ship.id = id;
                return ship;
            });
        })
    }

    this.getShip = function (id) {
        return $http.get('https://swapi.co/api/starships/' + id).then(resp => {
            return resp.data;
        })
    }


})