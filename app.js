

var myapp = angular.module('myapp',[]);
console.log(myapp);

myapp.controller('Myctrl',['$scope','AppService',
function($scope,AppService){
    //depemdency injection
    $scope.myval = "Hello";


    AppService.getStudents()
    .then(function(result){
        $scope.students = result.data.map(function(item){
            item.seneiority = item.age >10?"senior":"junior";
            return item;
        });;
    });

    $scope.onclick = function(){
        alert('clicked');
        //a.myval = "new value";   
    };

    // $scope.students = [{
    //     name : 'Arun',
    //     age: 10
    // },
    // {
    //     name:'Agith',
    //     age: 16
    // }];


$scope.onViewBtnClick = function(students){
    $scope.selectedStudent = students;  
};

}]);
