/* GET Homepage */
const index = (req, res) => {
    res.render('index', { title: "Thravlr Getaways"});
};

module.exports = {
    index
}