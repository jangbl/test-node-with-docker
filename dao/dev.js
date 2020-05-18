const db = require('../db');

class DevDao {
  constructor() {
    this.db = db;
  }

  async createDev(email, firstName) {
    // in prod, you'd probably also check for the standard SQL error codes
    // https://www.postgresql.org/docs/12/errcodes-appendix.html
    // to keep this tutorial simple, I just left it as it is
    const [id] = await this.db('developer')
      .insert({
        email,
        first_name: firstName,
      })
      .returning('id');

    return id;
  }
}
// to keep this tutorial simple, we do not use
// dependency injection
module.exports = new DevDao();
