var myapp = angular.module('myapp');
myapp.service('AppService',['$http','$q',function($http,$q){
    this.getStudents = function(){
        return $http.get('/student.json');
    };
//         var defer =$q.defer();
//         var httpPromise= $http.get('/students.jsom');
//         httpPromise.then(function(result){
//             var students = result.data.map(function(item){
//                 item.seniority = item.age>10?"senior":"junior";
//                 return item;
//             });
//             defer.resolve(students);
//         });
//     };
// this.getData = function(){
//     var defer = $q.defer();
// }

}]);