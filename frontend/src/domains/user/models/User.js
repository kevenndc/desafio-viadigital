export default class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    static fromResponse(payload) {
        return new User(payload.id, payload.name, payload.email)
    }
}
