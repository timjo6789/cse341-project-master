
var dummy_users = ['User 1', 'User 2', 'User 3'];

const routeHandler = (request, respond) => {
  const url = request.url;
  const method = request.method;

  respond.setHeader('content-type', 'text/html');

  if (url === '/') {
    respond.write(`
      <h1>Hello user!</h1>
      <form method="POST" action="/create-user">
        <label for="username">Username: </label>
        <input name="username" id="username">
        <input type="Submit" value="Create User!">
      </form>
    `);

    respond.end();
    return;
  }

  if (url === '/create-user' && method === 'POST') {
    respond.setHeader('Location', '/');
    respond.statusCode = 302;

    var chunks = [];
    request.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    request.on('end', () => {
      var parsedContent = Buffer.concat(chunks).toString();
      console.log(parsedContent);

      // removes the left side
      parsedContent = parsedContent.substring(parsedContent.indexOf('=')+1, parsedContent.length);
      dummy_users.push(parsedContent);
    });

    respond.end();
    return;
  }

  if (url === '/users') {
    respond.write('<ul>');
    dummy_users.forEach((item) => {
      respond.write(`<li>${item}</li>`);
    });
    respond.write('</ul>');

    respond.end();
    return;
  }

  respond.statusCode = 418;
  respond.write(`
    <h1>I'm a Teapot</h1>
    <img src="https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg">
    <p>In other words, your link is invalid. ;) it's actually error 404 but I like to have fun.</p>
  `);
  respond.end();
  return;

}

exports.routeHandler = routeHandler;
exports.dummy_users = dummy_users;