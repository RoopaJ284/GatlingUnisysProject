package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC4_POST_API extends Simulation {

  val httpRequest = http.baseUrl("https://reqres.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  val scn = scenario("To create a user in the database")
    .exec(http("CREATE USER API")
      .post("/api/users")
      .body(RawFileBody("src/test/resources/TestData/createUserTestData.json")).asJson
      .check(
        status.is(201),
        jsonPath("$.name") is "Kiran",
        jsonPath("$.job") is "Gatling Engineer"
    ))

  setUp(
    scn.inject(atOnceUsers(100))
  ).protocols(httpRequest)
}