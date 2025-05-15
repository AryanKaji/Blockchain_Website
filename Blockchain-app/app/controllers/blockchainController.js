angular.module("blockchainApp").controller("BlockchainController", [
  "$scope",
  "BlockchainService",
  function ($scope, BlockchainService) {
    $scope.blockchain = BlockchainService.getBlockchain();
    $scope.currentIndex = 0;
    $scope.currentBlock = $scope.blockchain[$scope.currentIndex];

    $scope.selectBlock = function (index) {
      $scope.currentIndex = index;
      $scope.currentBlock = $scope.blockchain[$scope.currentIndex];
    };

    $scope.nextBlock = function () {
      if ($scope.currentIndex < $scope.blockchain.length - 1) {
        $scope.currentIndex++;
        $scope.currentBlock = $scope.blockchain[$scope.currentIndex];
      }
    };

    $scope.previousBlock = function () {
      if ($scope.currentIndex > 0) {
        $scope.currentIndex--;
        $scope.currentBlock = $scope.blockchain[$scope.currentIndex];
      }
    };
  },
]);
