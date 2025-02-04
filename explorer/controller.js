function start($scope) {
    addFormats($scope)
    addSearch($scope)
    addTran($scope)
    addTrans($scope)
    addTokenProfile($scope)
    addNodes($scope)

    $scope.multiSearch = function () {
        if ($scope.search_text.length < 64) {
            $scope.search()
        } else if ($scope.search_text.length == 64) {
            $scope.txid = $scope.search_text
            $scope.trens = []
            $scope.tran = null
            $scope.loadTran($scope.search_text, tranLoadSuccess)
        }
    }

    if (getParam("txid") != null) {
        $scope.search_text = getParam("txid")
        $scope.multiSearch()
    }

    $scope.show_token_profile = false
    $scope.openSearchResult = function (domain) {
        $scope.clear()
        $scope.show_token_profile = true
        $scope.loadTokenProfile(domain)
    }

    $scope.selectTran = function (tran) {
        $scope.loadTran(tran.next_hash, tranLoadSuccess)
    }

    function tranLoadSuccess(response) {
        $scope.show_token_profile = false
        $scope.tran = response.tran
        $scope.trans = $scope.groupByTimePeriod([response.tran])
        $scope.loadTokenProfile(response.tran.domain)
    }

    $scope.loadVersion()
}
