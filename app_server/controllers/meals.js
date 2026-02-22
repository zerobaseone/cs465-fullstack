const meals = (req, res) => {
    res.render('meals', { title: 'Foods - Travlr Getaways', mealsSelected: true });
};

module.exports = {
    meals
};
