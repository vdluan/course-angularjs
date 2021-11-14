(function () {
'use strict';

angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=["$scope"];

  function LunchCheckController($scope){
    $scope.menu="";
    $scope.check= function(){
        
        if($scope.menu!=""){
            var items=$scope.menu.split(",");

            if(items.length<=3){
                $scope.message="Enjoy!";
            }
            else {
                $scope.message="Too much";
            }
        }else {
          $scope.message="Please enter data first";
      }

    }
  }

  })();
