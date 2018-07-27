'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.Dynamodb.DocumentClient({
  region:'localhost', //remove when deploying
  endpoint: 'http://localhost:8000' //remove when deploying
});

module.exports.getOne = (event, context, callback) => {
  const response = {
    statuscode: 200,
    body: JSON.stringify('get a note')
  };
  callback(null, response);
}
module.exports.getAll = (event, context, callback) => {
  const response = {
    statuscode: 200,
    body: JSON.stringify('get all notes')
  };
  callback(null, response);
}
/*
module.exports.create = (event, context, callback) => {
  const response = {
    statuscode: 200,
    body: JSON.stringify('add a note')
  };
  callback(null, response);
}


  module.exports.update = (event, context, callback) => {
    const response = {
      statuscode: 200,
      body: JSON.stringify('update a note')
    };
    callback(null, response);
  }

    module.exports.delete = (event, context, callback) => {
      const response = {
        statuscode: 200,
        body: JSON.stringify('delete a note')
      };
      callback(null, response);
    };

*/

