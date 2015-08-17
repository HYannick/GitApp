angular.module('creayh',['ngAnimate'])
    .controller('mainController',['$scope','$http',function($scope,$http){
        $scope.getGitInfo = function(){
            //initialisation des variables de chargement et en cas d'échec dans la recherche de l'utilisateur
            $scope.userNotFound = false;
            $scope.loaded = false;

            //Récupère le fichier JSON de l'API
            $http.get('https://api.github.com/users/' + $scope.username)
                //En cas de succès, récupération des données de l'utilisateur
                .success(function(data){
                    $scope.user = data;
                    $scope.loaded = true;
                })
                //En cas d'échec, renvoie une erreur
                .error(function(){
                    $scope.userNotFound = true;
                    $scope.loaded = false;
                });

            //Récupère les données du repository users
            $http.get('https://api.github.com/users/' + $scope.username + '/repos').success(function(data){
                $scope.repos = data;
                $scope.reposFound = data.length >0;
            });
        };


    }]);