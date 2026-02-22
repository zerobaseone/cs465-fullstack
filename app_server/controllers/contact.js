const contact = (req, res) => {
    res.render('contact', { title: 'Contact - Travlr Getaways', contactSelected: true });
};

module.exports = {
    contact
};
