const getUsers = (req, res) => {
    res.send([
        'Jose Alvarez',
        'Emilio Caccia'
    ]);
};

module.exports = {
    getUsers
};
