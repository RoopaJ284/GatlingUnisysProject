package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC3_AUTH_GET_API extends Simulation {

  // http configuration

  val httpRequest = http.baseUrl("https://gorest.co.in")
 // http.header("Connection", "keep-alive")
  http.header("Authorization", "Bearer 667dece74690e03e122b63da95bc7a8edf63ff4a32520ae0466c7a352f35049e")

  // scenario builder configuration

  val scn = scenario("Test the authorization GET API to read all users data")
    .exec(http("GET ALL USERS-AUTH API")
      .get("/public/v2/users")
      .check(status.is(200))
    )

  // load testing configuration

  setUp(
    scn.inject(atOnceUsers(1))
      ).protocols(httpRequest)
}