angularArt.controller('CanvasCtrl', function CanvasCtrl($scope) {
  $scope.imageOne = { url: "http://vignette2.wikia.nocookie.net/imaginaughts/images/8/81/Purple-dragon.png/revision/latest?cb=20110909191420",
                    sepia: 0, invert: 0, rotate: 357, width: 253, positionX: 253, positionY: 198,
                    scaleX: 1, scaleY: 1, border: 0 };
  $scope.canvas = { url: "", color: "", sepia: 80, invert: 5,
                    saturation: 826, hue: 0, radialColor: "#ff0000" };
  $scope.logo = { url: "http://static.socialpoint.es/content/imgsxml/en/galeria_personajes/flame-.png",
          width: 250, positionX: -297, positionY: 163, rotate: 0, border: 0, scaleX: 1,
          scaleY: 1 };
  $scope.font = { type: "'Arial Black', Gadget, sans-serif", size: 52, positionX: 8, positionY: 129,
          text: "By: Alex Kaufman", color: "#000000", strokeColor: "#ffffff", strokeSize: 2,
          rotate: 0 };
});
