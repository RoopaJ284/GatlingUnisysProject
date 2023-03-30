package Simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class TC6_PATCH_API extends Simulation {

  val httpRequest = http.baseUrl("https://reqres.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  val scn = scenario("To update an existing user using PUT method")
    .exec(http("UPDATE USER-PUT API")
      .patch("/api/users/2")
      .body(RawFileBody("src/test/resources/TestData/updateUserPatchTestData.json")).asJson
      .check(status.is(200))
      .check(jsonPath("$.name") is "Sandeep")
      .check(jsonPath("$.job") is "Gatling Engineer")
    )

  setUp(
    scn.inject(atOnceUsers(300))
  ).protocols(httpRequest)
}