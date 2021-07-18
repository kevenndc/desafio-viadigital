export default class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    static fromResponse(response) {
        return new User(response.name, response.email)
    }
}