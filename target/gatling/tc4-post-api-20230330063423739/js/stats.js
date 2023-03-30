var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "79",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "10041"
    },
    "maxResponseTime": {
        "total": "10487",
        "ok": "1094",
        "ko": "10487"
    },
    "meanResponseTime": {
        "total": "2814",
        "ok": "827",
        "ko": "10289"
    },
    "standardDeviation": {
        "total": "3856",
        "ok": "118",
        "ko": "122"
    },
    "percentiles1": {
        "total": "862",
        "ok": "837",
        "ko": "10311"
    },
    "percentiles2": {
        "total": "1011",
        "ok": "890",
        "ko": "10368"
    },
    "percentiles3": {
        "total": "10368",
        "ok": "1007",
        "ko": "10466"
    },
    "percentiles4": {
        "total": "10466",
        "ok": "1091",
        "ko": "10483"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 60
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 21,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "7.182",
        "ko": "1.909"
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
        "ok": "79",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "10041"
    },
    "maxResponseTime": {
        "total": "10487",
        "ok": "1094",
        "ko": "10487"
    },
    "meanResponseTime": {
        "total": "2814",
        "ok": "827",
        "ko": "10289"
    },
    "standardDeviation": {
        "total": "3856",
        "ok": "118",
        "ko": "122"
    },
    "percentiles1": {
        "total": "862",
        "ok": "837",
        "ko": "10311"
    },
    "percentiles2": {
        "total": "1011",
        "ok": "890",
        "ko": "10368"
    },
    "percentiles3": {
        "total": "10368",
        "ok": "1007",
        "ko": "10466"
    },
    "percentiles4": {
        "total": "10466",
        "ok": "1091",
        "ko": "10483"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 60
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 21,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "7.182",
        "ko": "1.909"
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
