import chai from "chai";
import chaiHttp from "chai-http";

import server from "./api.js";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Express API", () => {
  it("should return healthcheck OK", (done) => {
    chai
      .request(server)
      .get("/catalog/healthcheck")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({ healthcheck: "OK" });
        done();
      });
  });

  it("should return all cat registrations", (done) => {
    chai
      .request(server)
      .get("/catalog/allcats")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});