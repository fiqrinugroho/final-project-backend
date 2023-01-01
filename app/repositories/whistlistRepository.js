const { airplane, airport, company, user, ticket, whistlist, } = require("../models");

const createWish = async (newWish) => {

  return await whistlist.create(newWish);

};

const getWish= () => {

  return whistlist.findAll({

    include: [

      {

        model: user,

      },

      {

        model: ticket,

        include: [

          {

            model: airport, 

            as:"origin",

          },

          {

            model: airport, 

            as:"destination",

          },

          {

            model: airplane, attributes: { exclude: ["seatCapacity",], },

            include: company,

          },

        ],

      },

    ],

  });

};

const findWish = (userId) => {

  const find = whistlist.findAll({

    where: {

      userId,

    },

    include: [

      {

        model: user,

      },

      {

        model: ticket,

        include: [

          {

            model: airport, 

            as:"origin",

          },

          {

            model: airport, 

            as:"destination",

          },

          {

            model: airplane, attributes: { exclude: ["seatCapacity",], },

            include: company,

          },

        ],

      },

    ],

  });

  return find;

};

const deleteWish = async (id) => {

  return await whistlist.destroy({ where: { id, }, });

};

module.exports = {

  createWish,

  getWish,

  findWish,

  deleteWish,

};
