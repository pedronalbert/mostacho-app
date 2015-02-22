(function () {

  window.addEventListener('polymer-ready', function () {
    window.Request = window.superagent;
    window.BACKEND_URL = 'https://pure-badlands-1438.herokuapp.com';
    localforage.setDriver(localforage.WEBSQL);


    window.mostachoUserConfig.init()
      .then(function () {
        return window.mostachoI18n.init();
      })
      .then(function () {
        return window.mostachoRouteService.init();
      })
      .then(function () {
        document.addEventListener('deviceready', function () {
          window.mostacho.admobService.init();
          window.mostacho.analyticsService.init();   
        });
      });
  });

})();