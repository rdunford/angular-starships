angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){

    // $scope.ships=['X-Wing', 'T-Fighter', 'Millenium Falcon', 'Death Star', 'Y-Wing']

    shipSrvc.getShips().then(ships =>{
        $scope.ships = ships
    })

}) //End of Controller