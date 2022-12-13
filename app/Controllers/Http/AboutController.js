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

class AboutContoller {
  async show({ view, params, request, response }) {
    let user = {
      id : 1,
      name : 'lutfi',
      kelas : '1KA07'
    }
    return view.render('pages/about', {user})
  }
}

module.exports = AboutContoller;
