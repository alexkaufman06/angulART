angularArt.controller('CanvasCtrl', function CanvasCtrl($scope) {
  $scope.imageOne = { url: "http://png-4.findicons.com/files/icons/1012/racing_cars/256/lamborghini.png",
                    sepia: 0, invert: 0, rotate: 345, width: 153, positionX: 211, positionY: 189,
                    scaleX: 1, scaleY: 1, border: 0 };
  $scope.canvas = { url: "http://www.psdgraphics.com/wp-content/uploads/2011/06/curved-road.jpg",
            color: "#0080c0", sepia: 0, invert: 0, saturation: 100, hue: 0, radialColor: "" };
  $scope.logo = { url: "http://ukartsdirectory.com/wp-content/uploads/2013/11/your-logo-here.png",
          width: 250, positionX: -253, positionY: -38, rotate: 0, border: 0, scaleX: 1,
          scaleY: 1 };
  $scope.font = { type: "'Arial Black', Gadget, sans-serif", size: 52, positionX: -103, positionY: 164,
          text: "112-325-1321", color: "#000000", strokeColor: "#ffffff", strokeSize: 2,
          rotate: 0 };
});
