package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC1_GET extends Simulation {

  // http configuration

    val httpRequest = http.baseUrl("https://reqres.in")
                      http.header("Connection", "keep-alive")
                      http.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36")

  // GET https://reqres.in/api/users?page=1

  // scenario building

    val scn = scenario("To get the list of users from the database")
      .exec(http("LIST USERS")
        .get("/api/users?page=1")
        .check(status is 200)
      )

  // load configuration/load setup

    setUp(
      scn.inject(atOnceUsers(30000))
        .protocols(httpRequest)
    )
}