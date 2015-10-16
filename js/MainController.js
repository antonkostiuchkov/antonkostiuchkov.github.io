angular.module('resume', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('experience', {
        url: '/experience',
        templateUrl: 'templates/experience.html'
      })
      .state('work', {
        url: '/work',
        templateUrl: 'templates/work.html'
      })
      .state('tr', {
        url: '/work/tr',
        templateUrl: 'templates/tr.html'
      })
      .state('language-school', {
        url: '/work/language-school',
        templateUrl: 'templates/language-school.html'
      });

  })

  .controller('appController', function () {




  });
