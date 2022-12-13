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
  
  async looping({ view, params, request, response }) {
    const dataKelas = [
      {id: 1,name: 'AdonisJS'},
      {id: 2,name: 'Javascript'}
    ]
  
    if (request.format() === 'json') {
      return dataKelas
    }
  
    return view.render('test_loop/index', { dataKelas })
  }

  async show({ view, params, request, response }) {
    let user = {
      id : 1,
      name : 'lutfi',
      kelas : '1KA07'
    }
    return view.render('pages/home', {user})
  }

  async showNotFound({ view, params, request, response }) {
    return view.render('pages/404')
  }
}

module.exports = HomeController;
