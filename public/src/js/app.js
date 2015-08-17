angular.module('creayh',['ngAnimate'])
    .controller('mainController',['$scope','$http',function($scope,$http){
        $scope.getGitInfo = function(){
            //initialisation des variables de chargement et en cas d'�chec dans la recherche de l'utilisateur
            $scope.userNotFound = false;
            $scope.loaded = false;

            //R�cup�re le fichier JSON de l'API
            $http.get('https://api.github.com/users/' + $scope.username)
                //En cas de succ�s, r�cup�ration des donn�es de l'utilisateur
                .success(function(data){
                    $scope.user = data;
                    $scope.loaded = true;
                })
                //En cas d'�chec, renvoie une erreur
                .error(function(){
                    $scope.userNotFound = true;
                    $scope.loaded = false;
                });

            //R�cup�re les donn�es du repository users
            $http.get('https://api.github.com/users/' + $scope.username + '/repos').success(function(data){
                $scope.repos = data;
                $scope.reposFound = data.length >0;
            });
        };


    }]);