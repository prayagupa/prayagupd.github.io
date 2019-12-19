// Create a BlogController for Angular
function BlogController( $scope, $routeParams, $http ) {
 
    // description for title
    $scope.blogTitle = ""
    
    // bindable list of todos
    $scope.todos = []
 
    // load all info
    $scope.initialize = function() {
       $scope.blogTitle = "prayagupd"
       $scope.address = "North West"
       $scope.email = "email - openssl enc -base64 -d <<< cHJheWFnLnVwZEBnbWFpbC5jb20K"
       $scope.header = "/code/love/meditate"
    }
 
    // when we first stat up
    $scope.initialize()
}

