const userList = document.getElementById('users');

const getData = async () => {
  const response = await fetch('https://5fd73d069dd0db0017ee8fbb.mockapi.io/mock-users/users');
  return await response.json();
}

const populatePage = () => {
  getData()
    .then (users => users.forEach(user => userList.innerHTML += `<li><span>${user.name}</span></li>`))
    .catch(e => console.log('Something went wrong:', e));
}

populatePage();
