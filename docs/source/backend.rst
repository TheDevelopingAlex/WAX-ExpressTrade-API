.. _sec-backend:

*******************
Backend (Server)
*******************

.. Hint:: The video for this parts can be found `here <https://www.youtube.com/watch?v=Y-GT6gRiUr4>`__

| This section will be about how to request data from the WAX ExpressTrade API and how to bring this data to the frontend (website) so the user.
| For this purpose we will create a simple HTTP server in JavaScript with the help of `Node.js <https://nodejs.org/en/>`__.

.. Hint:: All the code written below is also available on `GitHub <https://github.com/TheDevelopingAlex/WAX-ExpressTrade-API/tree/master/example/backend>`__.

Requirements
=============

| In my opinion the easiest way to get started with an HTTP server is to create an Node.js HTTP Server. We will use the very popular package `express <https://www.npmjs.com/package/express>`__ for this purpose.
| But first let's talk about the requirements to get started

1. We will need `Node.js <https://nodejs.org/en/>`__.
    - Installation guide for `Windows <http://blog.teamtreehouse.com/install-node-js-npm-windows>`__
    - Installation guide for `Linux (all versions) <https://nodejs.org/en/download/package-manager/>`__

2. A more advanced text editor than Notepad in Windows to write our code. Recommended free text editors:
    - `Atom <https://atom.io/>`__
    - `Visual Studio Code <https://code.visualstudio.com/>`__ (only for Windows)
    - `Sublime Text <https://www.sublimetext.com/>`__

3. (Optional and only for Windows users) A different console
    - I personally do not like the command prompt in Windows
    - My favorite console so far is the `GIT Console <https://git-scm.com/>`__ (You will see why later on)

Once you installed `Node.js <https://nodejs.org/en/>`__ and chose your text editor we can start coding. I will use the following setup for this tutorial

- Node version 8.11.4 (you can check it by simply opening a console and by typing in ``node --version``)
- Atom (1.30.0) as my text editor with the `File Icons Package <https://atom.io/packages/file-icons>`__  (just for cosmetic)
- Because I am on Windows 10, I am going to use the GIT console

Step 1
=======

We need to create all the dependencies for our Node.js Server

1. Create a folder where you want to put your server
2. Open up a console and direct into that newly created directory (if you are using the GIT console on Windows, you can simply right-click and choose "Git Bash Here")
3. Once you are in the desired directory type in ``npm init`` to start the setup
    - **package name** Choose the name of your project. Usually it picks up the name of your folder. I will call it ``wax_tut``.
    - **version** Doesn't matter at all, just hit Enter
    - **description** Type in something like "This is a tutorial on how to implement the WAX ExpressTrade API" or if you want to skip it, hit Enter
    - **entry point** This is important. Here you have to choose the name of your main server file. You can either choose the default value "index.js" or rename it to something like ``server.js``. I will call it ``server.js``
    - **test command** Skip this for now
    - **git repository** If you already got an git repository, you can type it in here. Otherwise you can skip this.
    - **keywords** Define some or skip, doesn't really matter
    - **Author** Basically your name
    - **license** Just hit Enter
    - Check your inputs and confirm with ``yes`` (Don't worry you can change the values afterwards)
4. Create a JavaScript file with the name you chose at ``entry point``. In this case you need to create a file called *server.js*
5. Open this file with your desired text editor


Step 2
=======

In Step 1 we created our project and our server file. In this part we will set up the basic structure of our server and test it if everything works.

1. Double-Check your folder if you see both the ``package.json`` and ``server.js`` file.
2. Install the dependencies we need for the HTTP Server
    - As mentioned earlier, we will use `express <https://www.npmjs.com/package/express>`__ for our HTTP server.
    - Open up your console again and type in ``npm install --save express``. This will install the express package and with the option ``--save`` you will also save the dependency to your ``package.json`` file, so you always know what dependencies are install in your "node_modules" folder
3. Paste this basic HTTP server into your ``server.js`` file

.. code-block:: javascript

    var express = require('express')
    var app = express()

    app.get('/', function (req, res) {
      res.send('Hello World')
    })

    app.listen(3000)

Code explanation
-----------------

- ``var express = require('express')`` First of all we implement our express package so we can use all it's functions.
- ``var app = express()`` Afterwards we create an instance of the class so we can access every function.
- Next we create our first route that will send a response once it gets called.
    - But the method has to be GET and the route must be "/" to access it.
- The last part is on which port our server should listen. Keep ``3000`` for now, but you can always change it as you wish.

Let's try it out
-----------------

So if you pasted in this code and saved it to the ``server.js`` file, go over to your console again (make sure you are in the right directory) and type in ``node server.js`` to boot up the server.

.. Note:: For testing purpose I recommend the package ``nodemon`` so the server simply restarts every time we change something. Otherwise you would have to cancel it with CTRL+C and restart it with ``node server.js``. Install the package with ``npm install -g nodemon`` and start your server with ``nodemon server.js``

| Once your server is running either go to your browser or open up Postman and type in ``127.0.0.1:3000``. (This is your local IP-Address on your computer)
| If you are being greeted with "Hello World" you have successfully created your HTTP server in JavaScript


Step 3
=======

| Your HTTP server is up and running and you have successfully accessed it. Time to request data from the WAX WAX ExpressTrade API.
| So the basic idea behind this

1. We request something from OUR HTTP server like we did to check if the server is working e.g. ``127.0.0.1:3000/caseschema``.
2. The server should request data from the WAX ExpressTrade API before it sends the response back to us.
3. Instead of "Hello World" we should see data from the ExpressTrade API.

Let's see how we can do that.

1. We need another package to request data from other sources. For this we will use `axios <https://www.npmjs.com/package/axios>`__.
2. Head to your console and press CTRL+C to stop the server.
3. Type in ``npm install --save axios`` to install the package.
4. Head over to the text editor and change the code.

.. code-block:: javascript

  // Packages
  var express = require('express')
  var Axios = require('axios');

  // Variables
  var vgoURL = "https://api-trade.opskins.com";
  var vgoAPIKey = "YOUR API KEY";

  // Variable for WAX ExpressTrade requests
  var vgoAPI = Axios.create({
    baseURL: vgoURL,
    headers: {
      Authorization: 'Basic ' + Buffer.from(vgoAPIKey + ':').toString('base64'),
    },
  });

  // create express server
  var app = express()

  // route 1 (simple GET request)
  app.get('/caseschema', async function (req, res) {
    let response = await vgoAPI.get('/ICase/GetCaseSchema/v1');
    res.send(response.data);
  });

  // start server
  var listener = app.listen(3000, function() {
    console.log('Listening on port ' + listener.address().port);
  });

| So the code changed quite a bit, let's go over it real quick and talk about how you can customize it.
| So following changes have been made:

1. I added the axios package that we use to request the data from the API
2. Two new variables have been added ``vgoURL`` and ``vgoAPIKey``. You do not need to touch the ``vgoURL`` but you have to paste in your generated VGO API Key (**Not the Base64 encoded one, but the plain VGP API Key**)
3. Afterwards I created a new instance of axios and saved it to the variable ``vgoAPI``. This comes in pretty handy because later on we only need to call the variable ``vgoAPI`` to make a request to the actual API. This request will always have the "Authorization Key" in it, so we don't have to worry about that.
4. I made some changes to the ``GET /`` route and renamed it ``GET /caseschema``. It now requests data from the WAX ExpressTrade API. You may wonder why there is an async/await in it. I'll explain this as short as possible.
    - The quick and easy answer is, that the ``async`` which stands for "asynchronous" prevents Node.js to do things at the same time.
    - "Asynchronous" means it is not existing or occurring at the same time.
    - If don't use the async/await your response would be empty because Node.js is trying to do this one function at the same time.
    - The request/response to the WAX ExpressTrade API needs more time than our server needs to respond to the ``GET /caseschema`` call.
5. No we send the ``response.data`` as a response instead of "Hello World"
6. I changed to code on how the server starts, it does the same but will show you a console entry when the server has been started successfully

| So once again either head over to your browser or Postman (this time I highly recommend Postman because it will be a lot of JSON data) and try out what results you get.
| You should get a list off all the available cases (name, image) and what item skus are in it.

Additional Examples
====================

This section is about some another examples of how to use the WAX ExpressTrade API.

Example 1
----------

.. code-block:: javascript
  :caption: GET request with additional parameters

  // route 2 (GET request with additional parameters)
  app.get('/keycount', async function (req, res) {

    var trade_url = req.query.trade_url;

    if (!trade_url) {
      return res.send("No trade url provided");
    }

    let response = await vgoAPI.get(`/ICaseSite/GetKeyCount/v1?trade_url=${trade_url}`);
    res.send(response.data);
  });

Explanation
___________

- So this this route requests the key amount a specific user has. Again we use a GET method but this time we have to provide an additional parameter in the URL called ``trade_url``.
- In express you can access those URL parameters via ``req.query.YOUR_PARAMETER``. Easy to use and fast to understand. So you save the ``req.query.trade_url`` parameter to a variable called ``trade_url``.
- Afterwards we quickly check for this parameter if it has been provided. If not provided we simply return a response. (Sidenote: You need to type ``return res.send("...")`` to stop the function from continuing. If there is no ``return`` provided, the code will continue and fail at the request.)
- Anyways, with a provided ``trade_url`` we request the data from the server. Take a look and remember on how to add the query to the URL ``?trade_url=${trade_url}``, you will probably need that for other requests as well.
- And for the last part we send the response back to the request.

.. Note:: You can only request the keycount of people that have been registered on OPSkins.

How To Test It
________________

.. Note:: If you are familiar on URL parameters and how to use them properly you can probably skip this part and just test your newly created route.

For those that are not comfortable with, I got you

- URL parameters are additional string in the URL.
- For example if you go to ``https://www.google.com`` you won't see any parameters in the URL.
- But once you search for something like *wax expresstrade*, Google will add parameters to its URL. The URL will look something like this ``https://www.google.com/search?source=hp&ei=5m6IW6r0LY_YwQL2ma_ACg ...`` (Not the full URL)
- So the URL has a parameter for ``source`` and ``ei`` and so on and so forth.
- In our case the parameter should have the name ``trade_url`` and has to be provided.
- This means our URL has to look like this ``http://127.0.0.1:3000/keycount?trade_url=VALID_TRADE_URL`` to successfully request data from the API

.. Note:: If you encounter some kind of error it will probably be something like ``UnhandledPromiseRejectionWarning`` and the API responded with something like ``Request failed with status code 400``. I will talk about that in the next example **(Explanation, 4.)**.


Example 2
----------

.. code-block:: javascript
  :caption: POST request with additional parameters

  // used to access the body as it was JSON
  app.use(express.json())

  // route 3 (POST request with additional parameters)
  var affiliateAddress = "YOUR ETHEREUM ADRESS";

  app.post('/opencase', function (req, res) {

    if (!req.body.trade_url  || !req.body.caseId || !req.body.amount) {
      return res.send("One or more parameters are missing!");
    }

    vgoAPI.post('/ICaseSite/SendKeyRequest/v1', {
      trade_url : req.body.trade_url,
      case_id: req.body.caseId,
      amount: req.body.amount,
      affiliate_eth_address: affiliateAddress
    })
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      res.send(error.response.data.message);
    })

  });


Explanation
____________

So first of all this is a more advanced example but a very efficient and easy to understand one.

1. We are using a middleware for express to access the body as it was JSON. ``app.use(express.json())``
2. We created a variable ``affiliateAddress``. You need to put your Ethereum Address to receive the commission for an opened case.
3. A new route has been created, but this time we do not use the GET method, for this example we are using the POST method.
4. Once again we check for three parameters that must be included in the request. But this time we are sending it via the body so the parameters won't be in the URL.
5. A new way of requesting data from the WAX ExpressTrade API
    - First of all we are using the POST method again, that is very important because only the POST method will be recognized on this endpoint
    - Second of all we are using a better way of handling the response and sending it back. This means we are using the option of "Promises". Thankfully axios got our back and provides a great and standard way of handling "Promises"
    - So we do not save the response to a variable called ``response`` like we did in all the other routes. Instead we use the ``then()`` callback option.
    - Once our request has succeeded, the ``then()`` function will be called and we can simply send our response as we did in the previous routes
    - The big advantage of "Promises" is the ``catch()`` function.
    - If there is any error it will be handled by this function. If the request wasn't successful, the "message" can be found by the given query ``error.response.data.message`` (the data is an JSON-Object)

.. Caution:: If you are thinking of serious development I highly recommend using "Promises". Not using "Promises" actually is deprecate!
