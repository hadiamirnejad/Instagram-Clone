const controller = require('./controller');
const User = require('../models/user');
const config = require('../config/config')

class dashboardController extends controller{
  async index(req, res, next){
    
    if(config.IS_USERAUTHENTICATE){
      const [users,_] = await User.findAll();
      return res.render('dashboard/index',{usersList:users})
    }
    else{
      return res.redirect('/auth/login');
    }
  }
}

module.exports = new dashboardController();