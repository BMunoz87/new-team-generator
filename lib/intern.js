const employee = require('./employee')

class Intern extends employee {

    constructor(name, role, id, email, university) {
        super(name, role, id, email);
        this.university = university;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.university
    }
}

module.exports = Intern;
