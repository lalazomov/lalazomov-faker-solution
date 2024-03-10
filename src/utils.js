const mapResponse = (data) => {
  return {
    gender: data.gender,
    name: data.name,
    email: data.email,
    uuid: data.login.uuid,
    username: data.login.username,
    password: data.login.password,
    phone: data.phone,
    dob: new Date(data.dob.date).toLocaleDateString('en-US'),
    age: data.dob.age,
    location: {
      street: data.location.street,
      city: data.location.city,
      state: data.location.state,
      country: data.location.country,
      country_code: data.nat,
      postcode: data.location.postcode.toString(),
    },
    picture: data.picture,
  }
}

module.exports = { mapResponse }
