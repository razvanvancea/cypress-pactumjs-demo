const { spec, request } = require("pactum");

describe("API TESTS", () => {
  before(() => {
    request.setDefaultTimeout(15000);
  });

  it("get comments endpoint test", async () => {
    await spec()
      .get("https://jsonplaceholder.typicode.com/comments")
      .expectStatus(200);
  });
});
