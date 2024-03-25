const faker = require('faker')
const express = require('express')
const app = express()
class Usuario{
    constructor() {
        this._id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}
class Empresa{
    constructor() {
        this._id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new Usuario())
})
app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa())
})
app.get("/api/user/company", (req, res) => {
    res.json({user: new Usuario(), company: new Empresa()})
})
app.listen(8000, () => console.log("Listeando"))