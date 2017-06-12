document.body.removeChild(document.getElementById('warning'))

fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(response => response.json())
  .then(json => json.results)
  .then(results => {
    console.log(results)
    return results.map((employee, index) => ({
      thumb: employee.picture.large,
      name: `${employee.name.first} ${employee.name.last}`,
      username: employee.login.username,
      email: employee.email,
      cell: employee.phone,
      address: employee.location.street,
      state: employee.location.state,
      zip: employee.location.postcode,
      city: employee.location.city,
      birth: employee.dob.split(' ')[0],
      nat: employee.nat,
      index: index,
    }))
  })
  .then(employees => {
    console.log(employees)

    let directory = document.getElementsByTagName('my-directory')[0];
    employees.forEach((emp, index) => Object.assign(directory.children[index], emp))
  });

  // "related_applications": [{
  //   "platform": "web"
  // }, {
  //   "platform": "play",
  //   "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  // }]
