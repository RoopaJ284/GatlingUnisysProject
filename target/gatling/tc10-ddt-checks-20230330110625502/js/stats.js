var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34",
        "ok": "34",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles2": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles3": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "percentiles4": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    }
},
contents: {
"req_single-user-api-c944c": {
        type: "REQUEST",
        name: "SINGLE USER API",
path: "SINGLE USER API",
pathFormatted: "req_single-user-api-c944c",
stats: {
    "name": "SINGLE USER API",
    "numberOfRequests": {
        "total": "34",
        "ok": "34",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles2": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles3": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "percentiles4": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17",
        "ok": "17",
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
