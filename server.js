const express = require ('express');
const faker = require('faker');
const app = express();

app.use(express.json());

class User{
     constructor(){
        this._id = faker.randomuuid();
        this.firstName = faker.firstName();
        this.lastName = faker.lastName();
        this.phoneNumber = faker.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor (){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address.street = faker.address.streetAddress();
        this.address.city = faker.address.city();
        this.address.state = faker.address.state();
        this.address.zipCode = faker.address.zipCode();
        this.address.country = faker.address.country();
    }
}

app.get('/', (req, res) => {
    // res.send('Hello from Express');
    res.json({message: 'Company created'})
})

app.get('/api/user/new', (req, res) => {
    res.json({
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    })
});

app.get('/api/user/company', (req, res)=>{
    res.json({
        user: {
            id: faker.random.uuid(),
            firstName: faker.firstName(),
            lastName: faker.lastName(),
            phoneNumber: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            password: faker.internet.password()
        },
        company: {
            id: faker.random.uuid(),
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        }
    });
});

app.listen(8000, console.log('listening on port 8000'));