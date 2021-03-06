angularArt.directive('fontDraggable', ['$document', function($document) {
  return function(scope, element, attr) {
    var startX = 8, startY = 129, x = 8, y = 129;

    element.css({
      position: 'relative',
      width: scope.font.size + 'px',
      top: scope.font.positionY + 'px',
      left: scope.font.positionX + 'px',
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
			scope.font.positionX = x;
			scope.font.positionY = y;
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
