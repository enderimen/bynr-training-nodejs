const express = require('express');
const Joi = require('joi');

const router = express.Router();

let allUsers = [
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
  {
    id: 10,
    name: 'Ali',
    username: 'İmen',
    email: 'aliimen@april.biz',
    website: 'test.org',
  },
  {
    id: 20,
    name: 'Ender',
    username: 'enderimen',
    email: 'imen.gmail.com',
    website: 'test.com.tr',
  },
];

router.get('/', (req, res) => {
  res.status(200).json(allUsers);
});

router.get('/:id', (req, res) => {
  const currentUser = allUsers.find(
    (user) => user.id === parseInt(req.params.id)
  );
  res.status(200).json(currentUser);
});

router.post('/', (req, res) => {
  const userScheme = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    username: Joi.string().min(5).max(15).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    website: Joi.string().min(5).max(20).required(),
  });

  const schemeResult = userScheme.validate(req.body);
  if (schemeResult.error) {
    res.send(schemeResult.error.details[0].message);
  } else {
    const newUser = {
      id: allUsers.length + 1,
      ...req.body,
    };
    allUsers.push(newUser);
    res.status(200).json(newUser);
  }
});

router.delete('/:id', (req, res) => {
  allUsers = allUsers.filter((user) => user.id !== parseInt(req.params.id));
  res.status(200).json({
    message: `${req.params.id}li user silindi!`,
    error: '',
  });
});

module.exports = router;
