const req = require("supertest");
const app = require("../../src/app");
const connection = require('../../src/database/connection')

//TODO: test other requests
describe("ONG", () => {
    beforeEach( async () => {
        await connection.migrate.rollback(); //tip: clean teste.sqlite
        await connection.migrate.latest(); //tip: same as npx knex migrate:latest
    })

    afterAll( async () => {
        await connection.destroy();
    })

  it("should be able to create a new ONG", async () => {
      const res = await req(app)
        .post("/ongs")
        // .set('Authorization', '898b2616') //tip: to test requests with a header
        .send({
            name: "Teste teste",
            email: "email@gmail.com",
            whatsapp: "351933000000",
            city: "Porto",
            uf: "PT"
        });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});