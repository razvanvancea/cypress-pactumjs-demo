const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Create posts endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new post test", async () => {
    const randomEmail = faker.internet.email();

    const requestBody = {
      title: "john",
      body: randomEmail,
    };

    await spec()
      .post(`${baseUrl}/posts`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains(randomEmail);
  });
});
