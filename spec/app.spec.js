var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }

describe("Express Server API", function() {
  describe("should return users json on get /users", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/users')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    })
})

describe("Express Server API", function() {
  describe("should return profiles json on get /profiles", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/profiles')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it("returns status code 404", function(done) {
        supertest(app)
          .get('/profiles/edit')
          .expect('Content-Type', /json/)
          .expect(404, done);
      });

      it("returns a correct json format", function(done) {
        supertest(app)
          .get('/profiles')
          .expect(
            {
              name: 'Chong Tze Wei',
              email: 'chongtw0990@gmail.com',
              contactnum: '+6591190990',
              hobbies: 'Watch youtube, cycling',
              facebook: 'https://www.facebook.com/tzewei.chong.96',
              emailme: 'mailto:chongtw0990@gmail.com'
            }, done);
      });
  });
});


// describe("Express Server API", function() {
//   describe("should return users json on get /users", function() {
//       it("returns status code 200", function(done) {
//         supertest(app)
//           .get('/users')
//           .expect('Content-Type', /json/)
//           .expect(200, done);
//       });
//
//       it("returns a correct json format", function(done) {
//         supertest(app)
//           .get('/users')
//           .expect([
//             {
//               name: 'Gerald Ang',
//               age: 33,
//               email: 'geraldangw@gmail.com'
//             },
//             {
//               name: 'benyang',
//               age: 31,
//               email: 'benyang00@gmail.com'
//             },
//             {
//               name: 'weiyang',
//               age: 81,
//               email: 'thetaiwanese@gmail.com'
//             },
//             {
//               name: 'jen',
//               age: 12,
//               email: 'jen@gmail.com'
//             },
//             {
//               name: 'chong',
//               age: 25,
//               email: 'chong@gmail.com'
//             },
//           ], done);
//       });
//   });
// });
