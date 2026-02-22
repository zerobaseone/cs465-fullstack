const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways', roomsSelected: true });
};

module.exports = {
    rooms
};
