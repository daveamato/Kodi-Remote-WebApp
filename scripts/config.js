'use strict';

var config = angular.module('kodiConfig', [])
  .constant('KODI_URL', window.KODI_IP || "192.168.1.247")
  .constant('SOCKET_TIMEOUT', 200)
  .constant('PER_PAGE', 100)
  .constant('DEBUG', false)
;
