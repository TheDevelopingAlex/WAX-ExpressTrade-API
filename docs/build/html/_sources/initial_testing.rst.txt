*******************
Initial Testing
*******************

This specific section should help you to verify and understand how and if you requests work.

The First Request
=================

| To make your first request I recommend a program like `Postman <https://www.getpostman.com/>`__.
|
| `But why would we need that?`
| Simply because it is easier to use if you want to make requests to the API and you can quickly test and check specific API endpoints. You can add your API Key which we will need for some actions and you can format the JSON much more easier as well.
|
| Once you downloaded the program you will be prompted to sign in (You can skip that at the bottom). Afterwards we can try to make our first request to the WAX ExpressTrade API.
|
| Our first request will not require an VGO API Key. At the top input bar where it says ``Enter request URL`` type in something like ``https://api-trade.opskins.com/ICase/GetCaseSchema/v1`` and choose ``GET`` as your request method.

.. image:: _img/first_request.PNG

| If it was successful, you should see something like that in the image above.
| Well that was easy, but you also could have done that request in your browser by typing in the URL.

The Second Request
===================

Now we want to make a request that requires the API Key. The WAX ExpressTrade API has a "Basic Authorization" System. This means we have to convert your VGO API Key to Base64 before we make our request.

1. Head over to  `https://www.base64encode.org/ <https://www.base64encode.org/>`__.
2. Type in your API Key and add a colon ``:`` at the end of it so it looks something like this ``47319062320152072c7da23f51327d:``
3. Hit **ENCODE** and copy the Base64 string
4. Head over to Postman again and click on the tab "Headers"
5. For the **Key** you need to type in ``Authorization`` and for the **Value** you have to type in ``Basic YOUR_BASE64_STRING``

.. image:: _img/auth_base64.PNG

6. Once this header is set you can choose an API endpoint that requires the API key. In this case I chose ``https://api-trade.opskins.com/IItem/GetItems/v1/`` to get all the items and stats to each item in the cases.


.. image:: _img/second_request.PNG

If you messed up something it probably will have a response like

.. code-block:: json

    {
      "status": 401,
      "time": 1535573754,
      "message": "API Key Required"
    }

Troubleshooting
----------------

1. Check if you have ticked the box to send the ``Authorization Header``
2. Check your ``Key`` and ``Value`` for this specific header
3. Check your Base64-String. Does it end with "==" or not?
4. Check your String before converting it to Base64. Have you added to colon ``:``?
5. Try a new API Key, or this one, used for the tutorial ``NDczMTkwNjIzMjAxNTIwNzJjN2RhMjNmNTEzMjdkOg==``


Conclusion
===========

| So you have successfully requested data from the WAX ExpressTrade API. You can also POST data to the API. Search for a POST request in the "Advanced Documentation", add your API Key like we did in the tutorial above and POST your data.
| Of course you can try different endpoints, scroll through all the JSON-Data the server has returned and check it's content or use other request types such as POST.
| But all in all this is pretty easy isn't it? But we want to implement this into a website, not just requesting data in Postman to view it.
