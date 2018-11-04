var app = angular.module('universidadApp',[]);

app.controller('mainCtrl', ['$scope', function($scope){
  

$scope.personas = [];


$scope.fnAgregar = function(){

    if($scope.nuevoNombre != null){
        $scope.personas.push({nombre: $scope.nuevoNombre,
                            apellido: $scope.nuevoApellido,
                            edad: $scope.nuevaEdad});
            $scope.nuevoNombre = null;
            $scope.nuevoApellido = null;
            $scope.nuevaEdad = null;


    }else{
        swal("Hello world!");
    }
}
$scope.fnEliminar = function(){
    

    if($scope.personas != null){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                $scope.personas = [];
                $scope.$apply();
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }
    
}


}]);
