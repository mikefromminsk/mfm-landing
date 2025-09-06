function start($scope) {
    addScopeUtils($scope)

    function clear() {
        $scope.accounts = null
        $scope.tran = null
        $scope.trans = null
    }

    $scope.multiSearch = function () {
        if ($scope.search_text.length == 64) {
            clear()
            loadTran($scope.search_text)
        } else if ($scope.search_text.startsWith('V')) {
            clear()
            loadTrans()
            loadAccounts()
        }
    }

    function loadTrans() {
        post("mfm-token/trans", {
            address: $scope.search_text,
            size: 100,
        }, function (response) {
            $scope.trans = $scope.groupByTimePeriod(response.trans)
            $scope.$apply()
        })
    }

    function loadAccounts() {
        post("mfm-token/accounts", {
            address: $scope.search_text,
        }, function (response){
            $scope.accounts = response.accounts
            $scope.$apply()
        })
    }

    $scope.openTran = function (tran) {
        console.log(tran)
    }

    function loadTran(hash) {
        post("mfm-token/tran", {
            next_hash: hash,
        }, function (response){
            $scope.tran = response.tran
            loadTokenProfile(response.tran.domain)
            $scope.$apply()
        })
    }

    function loadTokenProfile(domain) {
        post("mfm-token/token", {
            domain: domain
        }, function (response) {
            $scope.token = response.token
            $scope.$apply()
        })
    }

    $scope.loadVersion = function () {
        post("mfm-token/version", {}, function (response) {
            $scope.node = response
            $scope.$apply()
        })
    }

    if (getParam("hash") != null) {
        $scope.search_text = getParam("hash")
        $scope.multiSearch()
    }
    $scope.loadVersion()
}
