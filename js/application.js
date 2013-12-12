// Create a BlogController for Angular
function BlogController( $scope, $routeParams, $http ) {
 
    // description for title
    $scope.blogTitle = ""
    
    // bindable list of todos
    $scope.todos = []
 
    // load all info
    $scope.initialize = function() {
       $scope.blogTitle = "Prayag Upd"
    } 
 
    // when we first stat up
    $scope.initialize()
}

