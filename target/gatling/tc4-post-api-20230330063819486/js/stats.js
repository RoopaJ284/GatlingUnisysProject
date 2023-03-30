var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "86",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "525",
        "ok": "525",
        "ko": "10071"
    },
    "maxResponseTime": {
        "total": "10655",
        "ok": "1121",
        "ko": "10655"
    },
    "meanResponseTime": {
        "total": "2106",
        "ok": "786",
        "ko": "10216"
    },
    "standardDeviation": {
        "total": "3275",
        "ok": "128",
        "ko": "190"
    },
    "percentiles1": {
        "total": "817",
        "ok": "776",
        "ko": "10130"
    },
    "percentiles2": {
        "total": "920",
        "ok": "872",
        "ko": "10240"
    },
    "percentiles3": {
        "total": "10190",
        "ok": "1022",
        "ko": "10628"
    },
    "percentiles4": {
        "total": "10614",
        "ok": "1100",
        "ko": "10650"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "7.818",
        "ko": "1.273"
    }
},
contents: {
"req_create-user-api-a2a42": {
        type: "REQUEST",
        name: "CREATE USER API",
path: "CREATE USER API",
pathFormatted: "req_create-user-api-a2a42",
stats: {
    "name": "CREATE USER API",
    "numberOfRequests": {
        "total": "100",
        "ok": "86",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "525",
        "ok": "525",
        "ko": "10071"
    },
    "maxResponseTime": {
        "total": "10655",
        "ok": "1121",
        "ko": "10655"
    },
    "meanResponseTime": {
        "total": "2106",
        "ok": "786",
        "ko": "10216"
    },
    "standardDeviation": {
        "total": "3275",
        "ok": "128",
        "ko": "190"
    },
    "percentiles1": {
        "total": "817",
        "ok": "776",
        "ko": "10130"
    },
    "percentiles2": {
        "total": "920",
        "ok": "872",
        "ko": "10240"
    },
    "percentiles3": {
        "total": "10190",
        "ok": "1022",
        "ko": "10628"
    },
    "percentiles4": {
        "total": "10614",
        "ok": "1100",
        "ko": "10650"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "7.818",
        "ko": "1.273"
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
