package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC5_PUT_API extends Simulation {

  val httpRequest = http.baseUrl("https://reqres.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  val scn = scenario("To update an existing user using PUT method")
    .exec(http("UPDATE USER-PUT API")
      .put("/api/users/2")
      .body(RawFileBody("src/test/resources/TestData/updateUserTestData.json")).asJson
      .check(status.is(200))
      .check(jsonPath("$.name") is "Kiran G")
      .check(jsonPath("$.job") is "Gatling Lead")
    )

  setUp(
    scn.inject(atOnceUsers(300))
  ).protocols(httpRequest)
}