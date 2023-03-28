"use strict";

var axios = require("axios");

const getActivity = (data, res) => {
  axios
    .get("http://www.boredapi.com/api/activity/")
    .then((response) => {
      if (response) {
        res.send({ result: 200, data: response.data });
      }
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  getActivity,
};

