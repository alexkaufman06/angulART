angularArt.directive('logoDraggable', ['$document', function($document) {
  return function(scope, element, attr) {
    var startX = -253, startY = -40, x = -253, y = -40;

    element.css({
      position: 'relative',
      width: scope.logo.size + 'px',
      top: scope.logo.positionY + 'px',
      left: scope.logo.positionX + 'px',
      cursor: 'pointer'
    });

		element.on('mousedown', function(event) {
			event.preventDefault();
			startX = event.pageX - x;
			startY = event.pageY - y;
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {
			y = event.pageY - startY;
			x = event.pageX - startX;
			scope.logo.positionX = x;
			scope.logo.positionY = y;
			scope.$apply();
			element.css({
				top: y + 'px',
				left: x + 'px'
			});
		};

		function resize(event){
		};

		function mouseup() {
			$document.off('mousemove', mousemove);
			$document.off('mouseup', mouseup);
		};
  };
}]);
