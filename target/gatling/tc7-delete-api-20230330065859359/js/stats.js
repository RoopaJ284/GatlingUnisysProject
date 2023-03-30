var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26",
        "ok": "26",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "635",
        "ok": "635",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles1": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "percentiles2": {
        "total": "679",
        "ok": "679",
        "ko": "-"
    },
    "percentiles3": {
        "total": "750",
        "ok": "750",
        "ko": "-"
    },
    "percentiles4": {
        "total": "851",
        "ok": "851",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 4
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
        "total": "13",
        "ok": "13",
        "ko": "-"
    }
},
contents: {
"req_delete-user-api-7964c": {
        type: "REQUEST",
        name: "DELETE USER API",
path: "DELETE USER API",
pathFormatted: "req_delete-user-api-7964c",
stats: {
    "name": "DELETE USER API",
    "numberOfRequests": {
        "total": "26",
        "ok": "26",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "635",
        "ok": "635",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles1": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "percentiles2": {
        "total": "679",
        "ok": "679",
        "ko": "-"
    },
    "percentiles3": {
        "total": "750",
        "ok": "750",
        "ko": "-"
    },
    "percentiles4": {
        "total": "851",
        "ok": "851",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 4
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
        "total": "13",
        "ok": "13",
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
