const printInfo = info => {
    //vaciarlo
    document.querySelector('#result').innerHTML = ""

    info.forEach((Item) => {
        const {name, lastname, email}  = Item 
      
        console.log(name);
        
        const text = `The user is ${name} ${lastname}, and email ${email}.`
        
        document.querySelector('#result').innerHTML += text
        
    });

    
    
}

const printError = () => {

    document.querySelector('#result').innerHTML = `<span style="color: red">User not found...</span>`
}

const getUserInfo = (userInfo) => {
    console.log(userInfo)
    //texto buscado
    axios
        .get(`http://localhost:3000/api/users/`)
        .then(response => printInfo(response.data))
        .catch(() => printError())
}


document.querySelector('#searchUserRoleUSER').onkeyup = () => {
    const userInfo = document.querySelector('#searchUserRoleUSER').value
    getUserInfo(userInfo)
}