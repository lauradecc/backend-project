const printInfo = info => {

  document.querySelector('#result').innerHTML = ""

  info.forEach((Item) => {

    const { name, lastname, email, _id } = Item

    const text = `<li> ${name} ${lastname} (${email}) <small>- <a href="/moderators/${_id}/edit">[Editar]</a></small></li>`

    document.querySelector('#result').innerHTML += text
  });
}

const printError = () => {

  document.querySelector('#result').innerHTML = `<span style="color: red">User not found...</span>`
}

const getUsers = (search) => {

  if (search === '') return []

  axios
    .get(window.location.href.includes("happiapp") ? `https://happiapp.herokuapp.com/api/users/` : 'http://localhost:3000/api/users/')
    .then(response => {

      let users = response.data
      let matchedUser = users.filter((user) => {
        if (user.name.toLowerCase().includes(search.toLowerCase())) return user
      })

      printInfo(matchedUser)
    })
    .catch(() => printError())
}

document.querySelector('#searchUserRoleUSER').onkeyup = () => {
  const search = document.querySelector('#searchUserRoleUSER').value
  getUsers(search)
}
