angular.module("blockchainApp").controller("AddBlockController", [
  "$scope",
  "BlockchainService",
  function ($scope, BlockchainService) {
    $scope.transactions = [];
    $scope.newTransaction = "";

    $scope.addTransaction = function () {
      if ($scope.newTransaction) {
        $scope.transactions.push($scope.newTransaction);
        $scope.newTransaction = "";
      }
    };

    $scope.addBlock = function () {
      if ($scope.transactions.length > 0) {
        var newBlock = BlockchainService.mineBlock($scope.transactions);
        BlockchainService.addBlock(newBlock);
        $scope.transactions = [];
        alert("Block added successfully!");
      } else {
        alert("Please add at least one transaction.");
      }
    };
  },
]);
