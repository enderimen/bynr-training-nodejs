const helper = require('./helper');
const yargs = require('yargs');

yargs.command({
  command: 'new',
  describe: 'yeni kullanıcı ekle',
  builder: {
    name: {
      type: 'string',
      describe: 'kullanıcı ismi',
      demandOption: true,
    },
    username: {
      type: 'string',
      describe: 'kullanıcı ismi',
      demandOption: true,
    },
    email: {
      type: 'string',
      describe: 'kullanıcı email adresi',
      demandOption: true,
    },
    website: {
      type: 'string',
      describe: 'kullanıcının websitesi',
      demandOption: true,
    },
  },
  handler(argv) {
    helper.newUser({
      id: 20,
      name: argv.name,
      username: argv.username,
      email: argv.email,
      website: argv.website,
    });
  },
});

yargs.parse();
