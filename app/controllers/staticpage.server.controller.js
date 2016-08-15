module.exports.renderHome = function(req, res) {
    res.render('static_pages/index', {
      title: 'Hello Page'
    });
};

module.exports.renderAbout = function(req, res) {
    res.render('static_pages/about', {
      title: 'About Page'
    });
};

module.exports.renderContact = function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact Page'
    });
};
