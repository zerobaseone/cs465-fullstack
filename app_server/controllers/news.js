const news = (req, res) => {
    res.render('news', { title: 'News - Travlr Getaways', newsSelected: true });
};

module.exports = {
    news
};
