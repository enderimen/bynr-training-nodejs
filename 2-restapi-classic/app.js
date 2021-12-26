const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log('Homepage');
    res.write('Homepage');
  }

  if (req.url === '/users') {
    console.log('all users');
    res.write('tüm kullanıcılar');
  }
  res.end();
});

server.listen(2022, () => {
  console.log('2022 port listening');
});
