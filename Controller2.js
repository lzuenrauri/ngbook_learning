angular.module("myApp", []).controller('MyController' ,
	function($scope, $parse) {
		$scope.$watch('expr', function(newVal, oldVal, scope) {
			if(newVal!=oldVal) {
				var parseFun = $parse(newVal);
				$scope.parseValue = parseFun(scope);
			}
		});
	});