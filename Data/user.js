const users = [
    {id: 500, name: 'Annesha', email: 'love@gmail.com'},
    {id: 600, name: 'John', email: 'Johndagiant@gmail.com'},
    {id: 700, name: 'Mya', email: 'runaway@gmail.com'},
    {id: 800, name: 'Booker', email: 'Bookert@gmail.com'}
]

module.exports = {
    getUsers: () => {
        return users;
    }
}