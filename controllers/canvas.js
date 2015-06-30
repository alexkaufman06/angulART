angularArt.controller('CanvasCtrl', function CanvasCtrl($scope) {
  $scope.imageOne = { url: "http://png-4.findicons.com/files/icons/1012/racing_cars/256/lamborghini.png",
                    sepia: 0, invert: 0, rotate: 345, width: 153, positionX: 211, positionY: 189,
                    scaleX: 1, scaleY: 1, border: 0 };
  $scope.canvas = { url: "http://www.psdgraphics.com/wp-content/uploads/2011/06/curved-road.jpg",
            color: "#0080c0", sepia: 0, invert: 0, saturation: 100, hue: 0 };
  $scope.logo = { url: "http://ukartsdirectory.com/wp-content/uploads/2013/11/your-logo-here.png",
          width: 250, positionX: -253, positionY: -38, rotate: 0, border: 0, scaleX: 1,
          scaleY: 1 };
  $scope.font = { type: "'Arial Black', Gadget, sans-serif", size: 52, positionX: -103, positionY: 164,
          text: "112-325-1321", color: "#000000", strokeColor: "#ffffff", strokeSize: 2,
          rotate: 0 };
});

// .directive('fontDraggable', ['$document', function($document) {
// 	return function(scope, element, attr) {
// 		var startX = 3, startY = 181, x = 3, y = 181;
//
// 		element.css({
// 			position: 'relative',
// 			width: scope.phonesize + 'px',
// 			top: scope.phoneX + 'px',
// 			left: scope.phoneY + 'px',
// 			cursor: 'pointer'
// 		});
//
// 		element.on('mousedown', function(event) {
// 			event.preventDefault();
// 			startX = event.pageX - x;
// 			startY = event.pageY - y;
// 			$document.on('mousemove', mousemove);
// 			$document.on('mouseup', mouseup);
// 		});
//
// 		function mousemove(event) {
// 			y = event.pageY - startY;
// 			x = event.pageX - startX;
// 			scope.phoneX = x;
// 			scope.phoneY = y;
// 			scope.$apply();
// 			element.css({
// 				top: y + 'px',
// 				left: x + 'px'
// 			});
// 		}
//
// 		function resize(event){
// 		}
//
// 		function mouseup() {
// 			$document.off('mousemove', mousemove);
// 			$document.off('mouseup', mouseup);
// 		}
// 	};
// }])
//
// .directive('logoDraggable', ['$document', function($document) {
// 	return function(scope, element, attr) {
// 		var startX = -160, startY = -38, x = -160, y = -38;
//
// 		element.css({
// 			position: 'relative',
// 			width: scope.logoWidth + 'px',
// 			top: scope.logoX + 'px',
// 			left: scope.logoY + 'px',
// 			cursor: 'pointer'
// 		});
//
// 		element.on('mousedown', function(event) {
// 			event.preventDefault();
// 			startX = event.pageX - x;
// 			startY = event.pageY - y;
// 			$document.on('mousemove', mousemove);
// 			$document.on('mouseup', mouseup);
// 		});
//
// 		function mousemove(event) {
// 			y = event.pageY - startY;
// 			x = event.pageX - startX;
// 			scope.logoX = x;
// 			scope.logoY = y;
// 			scope.$apply();
// 			element.css({
// 				top: y + 'px',
// 				left: x + 'px'
// 			});
// 		}
//
// 		function resize(event){
// 		}
//
// 		function mouseup() {
// 			$document.off('mousemove', mousemove);
// 			$document.off('mouseup', mouseup);
// 		}
// 	};
// }])
//
// .directive('myDraggable', ['$document', function($document) {
// 	return function(scope, element, attr) {
// 		var startX = 290, startY = 221, x = 290, y = 221;
//
// 		element.css({
// 			position: 'relative',
// 			width: scope.updatesize + 'px',
// 			top: scope.updateY + 'px',
// 			left: scope.updateX + 'px',
// 			cursor: 'pointer'
// 		});
//
// 		element.on('mousedown', function(event) {
// 			event.preventDefault();
// 			startX = event.pageX - x;
// 			startY = event.pageY - y;
// 			$document.on('mousemove', mousemove);
// 			$document.on('mouseup', mouseup);
// 		});
//
// 		function mousemove(event) {
// 			y = event.pageY - startY;
// 			x = event.pageX - startX;
// 			scope.updateX = x;
// 			scope.updateY = y;
// 			scope.$apply();
// 			element.css({
// 				top: y + 'px',
// 				left: x + 'px'
// 			});
// 		}
//
// 		function resize(event){
// 		}
//
// 		function mouseup() {
// 			$document.off('mousemove', mousemove);
// 			$document.off('mouseup', mouseup);
// 		}
// 	};
// }])
