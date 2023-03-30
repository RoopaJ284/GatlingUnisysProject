package Simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class TC9_GET_PUT_CORRELATION extends Simulation {

  // http configuration

  val httpRequest = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  // scenario builder configuration  https://gorest.co.in/public/v2/users

  val scn = scenario("E2E TEST & CORRELATION")

    .exec(http("GET THE CREATED STUDENT TO VERIFY")
      .get("/api/studentsDetails/7391275")
      .check(status.is(200))
      .check(jsonPath("$.data.first_name") is "prabha")
      .check(jsonPath("$.data.date_of_birth") is "11/01/1990")
      check(jsonPath("$.data.id").saveAs("studID"))  // to achieve correlation
    )
    .pause(8) // to simulate constant think time

    .exec(http("UPDATE THE NEWLY CREATED USER")
      .put("/api/studentsDetails/${studID}")
      .body(RawFileBody("src/test/resources/TestData/updateStudent.json")).asJson
      .check(status.is(200))
      .check(jsonPath("$.status") is "true")
    )

  // load setup configuration

  setUp(scn.inject(atOnceUsers(1))).protocols(httpRequest)
}