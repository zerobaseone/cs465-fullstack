const about = (req, res) => {
    res.render('about', { title: 'About - Travlr Getaways', aboutSelected: true });
};

module.exports = {
    about
};
