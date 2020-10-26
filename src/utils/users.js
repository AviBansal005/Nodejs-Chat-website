const users = []

//adduser,removeuser,getuser,getusersinroom

const addUser = ({ id,username,room,password }) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    const roompassword = users.find((user) => {
        if(user.room === room){
            return password
        }
    })

    if(roompassword !== undefined && roompassword.password !== password){
        return {
            error: 'Wrong Password'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return {
            error: 'Username is in use'
        }
    }
  
    //Store user
    const user = {id,username,room,password}
    users.push(user)
    return {user} 
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )

    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}