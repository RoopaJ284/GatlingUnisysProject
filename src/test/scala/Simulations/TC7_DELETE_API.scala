package Simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation

class TC7_DELETE_API extends Simulation {

  val httpRequest = http.baseUrl("https://reqres.in")

  val scn = scenario("Deleting an existing user")
    .exec(http("DELETE USER API")
      .delete("/api/users/2")
      .check(status.is(204))
    )

  setUp(scn.inject(atOnceUsers(26))).protocols(httpRequest)
}