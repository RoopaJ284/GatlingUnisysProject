package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC2_GET_ALL_USERS extends Simulation {

  // http configuration

    val httpRequest = http.baseUrl("https://reqres.in") // mandatory
                      http.header("Connection", "keep-alive")
                      http.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15")

  // scenario builder configuration

    val scn = scenario("To fetch all users from page-1")
      .exec(
        http("LIST-USERS-PAGE-1")
          .get("/api/users?page=1")
          .check(status is 200)  // verify if response code received from the server is 200
      )

  // load testing configuration
  // we can refer httpRequest & scn configuration here
    setUp(
      scn.inject(atOnceUsers(5))
    ).protocols(httpRequest)
}