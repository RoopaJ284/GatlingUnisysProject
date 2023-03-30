var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2508",
        "ok": "2508",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1643",
        "ok": "1643",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1841",
        "ok": "1841",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2128",
        "ok": "2128",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2246",
        "ok": "2246",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 280,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    }
},
contents: {
"req_update-user-put-f6ecb": {
        type: "REQUEST",
        name: "UPDATE USER-PUT API",
path: "UPDATE USER-PUT API",
pathFormatted: "req_update-user-put-f6ecb",
stats: {
    "name": "UPDATE USER-PUT API",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2508",
        "ok": "2508",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1643",
        "ok": "1643",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1841",
        "ok": "1841",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2128",
        "ok": "2128",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2246",
        "ok": "2246",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 280,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
