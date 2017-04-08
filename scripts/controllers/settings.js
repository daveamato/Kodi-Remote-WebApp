/* global app:true */

'use strict';

app.controller('SettingsCtrl', ['$scope', 'KODI_URL', function($scope, KODI_URL) {

    $scope.hostip = KODI_URL;

    $scope.saveBtn = function() {
        alert("would update to: " + this.hostip);

    };

    $scope.resetBtn = function() {
        alert("RESET pressed, currently not working though...");
    };

}]);
