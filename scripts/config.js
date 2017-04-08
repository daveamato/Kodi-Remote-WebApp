'use strict';

var config = angular.module('kodiConfig', [])
  .constant('KODI_URL', "192.168.1.115")
  .constant('SOCKET_TIMEOUT', 200)
  .constant('PER_PAGE', 100)
  .constant('DEBUG', false);
