angular.module('starter.factories', [])

    .factory('eventInfo', function () {

        var newEvent;

        var setEvent = function (input) {
          newEvent = input;
        }

        var returnEvent = function () {
          return newEvent;
        }

        return {
          setEvent: setEvent,
          returnEvent: returnEvent
        };

    });
