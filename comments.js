//create web server
const express = require('express');
const app = express();
const PORT = 3000;

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/comments', (req, res) => {
  res.send('Hello, world!');
});
"Hi"
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Path: public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <form action="/comments" method="POST">
      <input type="text" name="comment" />
      <button type="submit">Add</button>
    </form>
  </body>
</html>
```

## 3.4 - Express Router

- **Express Router** is a class that helps us create a modular, mountable route handlers. It is used to create a mini application that only handles routes.
- It is used to create a modular route handlers.

```javascript
// Path: server.js
const express = require('express');
const app = express();
const PORT = 3000;
const commentsRouter = require('./comments');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/comments', commentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

```javascript
// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = router;
```

## 3.5 - Express Middleware

- **Middleware** is a function that has access to the request object (req), the response object (res), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

```javascript
// Path: server.js
const express = require('express');
const app = express();
const PORT =