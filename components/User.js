import React from 'react';

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

export default User;
