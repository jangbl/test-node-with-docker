const devService = require('../service/dev');

class DevController {
  constructor() {
    this.devService = devService;

    this.createDev = this.createDev.bind(this);
  }

  async createDev(req, res) {
    // in prod, you'd do additional request validation
    // like checking if email looks like an email
    const { email, firstName } = req.body;
    if (!email || !firstName) {
      return res
        .status(400)
        .json('you need to privde an email and a first name');
    }

    // just left it as it is to keep the tutorial simple
    // you would need to check if firstName and email is passed and if
    // the email looks like a valid email
    try {
      const result = await this.devService.createDev(email, firstName);
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
