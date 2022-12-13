"use strict";
const debug = require("debug")("controller:user");
const Database = use("Database");
const Env = use("Env");
const User = use("App/Models/User");
const Config = use("Config");
const Hash = use("Hash");
const moment = require("moment");
const { validate } = use("Validator");
const CryptoJS = require("crypto-js");

class HomeController {
  async show({ view, params, request, response }) {
    const data = params.modal 
    let modal = {
      get_started : false,
      get_quote : false,
    }
    if(data == 'get_started'){
      modal.get_started = true
    }else if(data == 'get_quote'){
      modal.get_quote = true
    }
    return view.render('pages/contact', {modal})
  }

  async showGetStarted({ view, params, request, response }) {
    let modal = {
      get_started : true,
      get_quote : false,
    }
    return view.render('pages/contact', {modal})
  }

  async showGetQuote({ view, params, request, response }) {
    let modal = {
      get_started : false,
      get_quote : true,
    }
    return view.render('pages/contact', {modal})
  }

  async insertGetStarted ({ view, params, request, response }) {

    let { username, email, password, role } = request.all();

    const rules = {
      username: "required",
      email: "required|email|unique:cms.t_mtr_user,email",
      password: "required",
      role: "required",
    };

    const validation = await validate(request.all(), rules);

    if (validation.fails()) {
      response.redirect().status(401).toPath('/contact')
    }

    response.redirect().toRoute('ContactController.show', { getStarted:true, getQuote:false })
  }
}

module.exports = HomeController;
