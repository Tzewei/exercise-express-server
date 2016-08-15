module.exports = {
  index: function(req, res) {
    res.json([
      {
        name: 'Gerald Ang',
        age: 33,
        email: 'geraldangw@gmail.com'
      },
      {
        name: 'benyang',
        age: 31,
        email: 'benyang00@gmail.com'
      },
      {
        name: 'weiyang',
        age: 81,
        email: 'thetaiwanese@gmail.com'
      },
      {
        name: 'jen',
        age: 12,
        email: 'jen@gmail.com'
      },
      {
        name: 'chong',
        age: 25,
        email: 'chong@gmail.com'
      },
    ]);
  }


};
