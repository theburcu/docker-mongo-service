const { get } = require('lodash');
const User = require('../model/UserSchema');

exports.CreateUser = async (req, res) => {
  const wallet = get(req, 'body.wallet');
  const balance = get(req, 'body.balance');

  await User.create({ wallet, balance })
    .then((response) => {
      console.log(`UserController : Added ${wallet} to Database`);
      res.status(201).json({
        status: 'S',
        message: `Added ${wallet} to Database`,
        id: response._id
      });
    })
    .catch(() => {
      console.error('UserController : Failed to add to DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Add to Database'
      });
    });
};

exports.DeleteUser = async (req, res) => {
  const id = get(req, 'params.id');

  await User.findByIdAndDelete(id)
    .then(() => {
      console.log('UserController : Deleted from database');
      res.status(200).json({ status: 'S', message: `Deleted from database` });
    })
    .catch(() => {
      console.error('UserController : Failed to delet from DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Delete from Database'
      });
    });
};

exports.GetUser = async (req, res) => {
  const id = get(req, 'params.id');

  await User.findById(id)
    .then((data) => {
      console.log('UserController : Fetch successfully from Database');
      res
        .status(200)
        .json({ status: 'S', message: 'Fetch successfully', data });
    })
    .catch(() => {
      console.error('UserController : Failed to fetch from  DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Fetch from Database'
      });
    });
};
