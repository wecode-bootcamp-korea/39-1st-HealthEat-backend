const request = require("supertest");
const loginRequired = require("../src/util/auth");

jest.mock("../src/util/auth");

// supertest의 request에 app을 담아 활용하기 위해 createApp 함수를 불러옵니다.
const { createApp } = require("../app");
// DB와의 커넥션을 위해 DataSource 객체를 불러옵니다.
const { sqlDataSource } = require("../src/models/data-source");
const { JsonWebTokenError } = require("jsonwebtoken");
describe("로그인 테스트!", () => {
  let app;
  beforeAll(async () => {
    app = createApp();
    await sqlDataSource.initialize();
  });
  afterAll(async () => {
    await sqlDataSource.query(`TRUNCATE users`);
    await sqlDataSource.destroy();
  });

  test("로그인되어 있으면 next를 호출!", async () => {
    loginRequired.mockImpl;
  });
});

describe("회원가입 테스트!", () => {
  let app;

  beforeAll(async () => {
    // 모든 테스트가 시작하기 전(beforeAll)에 app을 만들고, DataSource를 이니셜라이징 합니다.
    app = createApp();
    await sqlDataSource.initialize();
  });

  afterAll(async () => {
    // 테스트 데이터베이스의 불필요한 데이터를 전부 지워줍니다.
    await sqlDataSource.query(`TRUNCATE users`);

    // 모든 테스트가 끝나게 되면(afterAll) DB 커넥션을 끊어줍니다.
    await sqlDataSource.destroy();
  });
  test("FAILED: invalid email", async () => {
    // supertest의 request를 활용하여 app에 테스트용 request를 보냅니다.
    await request(app)
      .post("/users/signup") // HTTP Method, 엔드포인트 주소를 작성합니다.
      .send({ name: "Joe", phone: "01012345678", email: "", password: "password001@" }) // body를 작성합니다.
      .expect(400) // expect()로 예상되는 statusCode, response를 넣어 테스트할 수 있습니다.
      .expect({ error: "KEY_ERROR" });
  });

  test("SUCCESS: created user", async () => {
    await request(app)
      .post("/users/signup")
      .send({
        name: "조상원",
        phone: "010-4925-3333",
        email: "lee@gmail.com",
        password: "12345678",
      })
      .expect(201);
  });

  test("FAILED: duplicated email", async () => {
    await request(app)
      .post("/users/signup")
      .send({
        name: "조상원",
        phone: "010-4925-3333",
        email: "lee@gmail.com",
        password: "12345678",
      })
      .expect(400)
      .expect({ error: "DUPLICATED_EMAIL" });
  });
});
