const users = [
{
    id: 1,
    name: 'Prasad'
},
{
    id: 2,
    name:'Prasadi',
},
];

const getUsers = (cb) => {
    cb(users);
    
};

const getUserById = (id,cb) =>{
    const user = users.find(user => user.is == id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;