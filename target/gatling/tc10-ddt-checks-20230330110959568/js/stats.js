var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57",
        "ok": "57",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles4": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57,
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
        "total": "9.5",
        "ok": "9.5",
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
        "total": "57",
        "ok": "57",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles4": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57,
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
        "total": "9.5",
        "ok": "9.5",
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
