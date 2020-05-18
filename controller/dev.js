const devService = require('../service/dev');

class DevController {
  constructor() {
    this.devService = devService;

    this.createDev = this.createDev.bind(this);
  }

  async createDev(req, res) {
    // in prod, you'd do request schema validation before trying to access
    // the service level
    // just left it as it is to keep the tutorial simple
    try {
      const result = await this.devService.createDev(req.body);
      res.status(201).json(result);
    } catch (err) {
      // in prod, don't use console.error because it is not async
      console.error(err);
      res.status(500).json('internal error');
    }
  }
}

// to keep this tutorial simple, we do not use
// dependency injection
module.exports = new DevController();
