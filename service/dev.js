const devDao = require('../dao/dev');

class DevService {
  constructor() {
    this.devDao = devDao;
  }

  createDev(email, firstName) {
    return this.devDao.createDev(email, firstName);
  }
}
// to keep this tutorial simple, we do not use
// dependency injection
module.exports = new DevService();
