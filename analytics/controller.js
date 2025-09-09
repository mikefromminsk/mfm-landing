function openAnalytics(success) {
    trackCall(arguments)
    showDialog("wallet/settings/analytics", success, function ($scope) {
        $scope.funnels = [
            {
                "title": "Place orders",
                "events": [
                    "start",
                    "openProfile",
                    "place"
                ]
            },
            {
                "title": "Get credits",
                "events": [
                    "start",
                    "openEarn",
                    "getCredit"
                ]
            }
        ]

        for (let funnel of $scope.funnels) {
            post("mfm-analytics/funnel", {
                funnel: funnel.events.join(",")
            }, function (response) {
                funnel.response = response
                $scope.$apply()
            })
        }

        post("mfm-analytics/candles", {
            key: "start",
            period_name: "D"
        }, function (response) {
            $scope.dau = response.change24
            $scope.$apply()
        })
    })
}