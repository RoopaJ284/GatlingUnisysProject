package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC8_E2E_CORRELATION extends Simulation {

  // http configuration

  val httpRequest = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  // scenario builder configuration  https://gorest.co.in/public/v2/users

  val scn = scenario("E2E TEST & CORRELATION")
    .exec(http("CREATE A STUDENT")
      .post("/api/studentsDetails")
      .body(RawFileBody("src/test/resources/TestData/createStudent.json")).asJson
      .check(status.is(201))
      .check(jsonPath("$.first_name") is "Kiran")
      .check(jsonPath("$.middle_name") is "Gatling")
      .check(jsonPath("$.last_name") is "G")
      .check(jsonPath("$.date_of_birth") is "01-01-1990")
      .check(jsonPath("$.id").ofType[Int])
      .check(jsonPath("$.id").saveAs("studentID"))  // to achieve correlation
    )
    .pause(10)

    .exec(http("GET THE CREATED STUDENT TO VERIFY")
      .get("/api/studentsDetails/${studentID}")
      .check(status.is(200))
      .check(jsonPath("$.data.first_name") is "Kiran")
      .check(jsonPath("$.data.date_of_birth") is "01-01-1990")
      check(jsonPath("$.data.id").saveAs("studID"))  // to achieve correlation
    )
    .pause(8) // to simulate constant think time

    .exec(http("UPDATE THE NEWLY CREATED USER")
      .put("/api/studentsDetails/${studID}")
      .body(RawFileBody("src/test/resources/TestData/updateStudent.json")).asJson
      .check(status.is(200))
      .check(jsonPath("$.status") is "true")
    )

    .pause(1,10)  // to simulate random think time

    .exec(http("DELETE THE CREATED USER")
      .delete("/api/studentsDetails/${studentID}")
      .check(status.is(200))
      .check(jsonPath("$.status") is "true")
    )

  // load setup configuration

  setUp(scn.inject(atOnceUsers(1))).protocols(httpRequest)
}