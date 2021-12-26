const fs = require('fs');

const deleteUser = (id) => {
  const allUsers = readUserFile();

  const newUsers = allUsers.filter((user) => user.id !== id);

  writeUserFile(newUsers);
};

const newUser = (user) => {
  const allUsers = readUserFile();

  allUsers.push(user);
  console.log(user);

  writeUserFile(allUsers);
};

const readUserFile = () => {
  const buffer = fs.readFileSync('users.json');

  return JSON.parse(buffer);
};

const writeUserFile = (data) => {
  try {
    fs.writeFileSync('users.json', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newUser,
  deleteUser,
};
