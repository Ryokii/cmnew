'use strict';

angular
  .module('app')
  .controller('MainCtrl', ['Conference', '$scope', '$routeParams',
    function(Conference, $scope, $routeParams) {

    $scope.conferences = Conference.query();

    //Display
    $scope.dispLogin = false;


    $scope.activeConference = new Conference();
    $scope.activeC = new Conference();

    //conference fra liste + showConf settes til true/false
    $scope.displayActiveConf = function(conference)
    {
      if(conference){
        $scope.showConf = true;
        $scope.activeC = conference;
      }else{
        $scope.showConf = false;
      }
    };




    $scope.save = function(conference)
    {
      if (!_.include($scope.conferences, conference)) {
        $scope.conferences.push(conference);
        conference.$save();
      } else {
        Conference.update(conference);
      }
      updateRemainingConferenceCount();
      $scope.activeConference = new Conference();
    };

    $scope.remove = function(conference)
    {
      Conference.delete(conference);
      _.remove($scope.conferences, conference);
      updateRemainingConferenceCount();
    };

    function updateRemainingConferenceCount()
    {
      uncompletedConferences = _.chain($scope.conferences)
                          .map(function(conference) { return conference.name })
                          .compact()
                          .value();
      $scope.remainingCount = uncompletedConferences.length;
    };

  }]);
