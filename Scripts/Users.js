module.exports = class Users {
    constructor({name, id, level, status, points }) {
        this.name = name;
        this.id = id;
        this.info = {
            level,
            status,
            points
        }
    }
}
