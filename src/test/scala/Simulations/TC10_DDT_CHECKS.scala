package Simulations

import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.Predef.Simulation

class TC10_DDT_CHECKS extends Simulation {

  val httpRequest = http.baseUrl("https://reqres.in/")
  val csvFeeder = csv("src/test/resources/TestData/empID.csv").circular

  val scn = scenario("Verify Single User API using DDT & asssertions")
    .repeat(5) {
      feed(csvFeeder)
        .exec(http("SINGLE USER API")
          .get("/api/users/${empID}")
          .check(status.is(200))
          .check(jsonPath("$.data.first_name").is("${fName}"))
        )
    }

  setUp(
   scn.inject(nothingFor(10),  // nothing will happen for 10 seconds
     atOnceUsers(5),      // 5 users will be created & hit the server at the same time
     rampUsers(9).during(6),  // 9 users should be created & hit the server in the next 6 seconds
     constantUsersPerSec(16).during(8), // 16 users should be created per second, for the next 8 seconds
     rampUsersPerSec(4).to(10).during(6)) // a random number from 4-10 will be generated & those many users will be created per second for the next 6 seconds
     .protocols(httpRequest)
  )
}