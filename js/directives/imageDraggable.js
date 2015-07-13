angularArt.directive('imageDraggable', ['$document', function($document) {
  return function(scope, element, attr) {
    var startX = 211, startY = 189, x = 211, y = 189;

    element.css({
      position: 'relative',
      width: scope.imageOne.size + 'px',
      top: scope.imageOne.positionY + 'px',
      left: scope.imageOne.positionX + 'px',
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
			scope.imageOne.positionX = x;
			scope.imageOne.positionY = y;
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
