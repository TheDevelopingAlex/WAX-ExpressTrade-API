*******************
Getting Started
*******************

.. Hint:: The video for this parts can be found `here <https://www.youtube.com/watch?v=y-E3WUB7VHA>`__

This document will show you how to implement the WAX ExpressTrade to your website.

.. admonition:: Info

   If you already have a VGO API Key and an Ethereum Adress you can skip this section.


Basic information
==================

The documentation requires a little bit of knowledge about the following points.

API
---------------------------------------
An application program interface (API) is a set of routines, protocols, and tools for building software applications.
Basically, an API specifies how software components should interact. Additionally, APIs are used when programming graphical user interface (GUI) components.
A good API makes it easier to develop a program by providing all the building blocks. A programmer then puts the blocks together.
So this means it is even easier to implement the WAX ExpressTrade features.

Server & HTTP
--------------
So the server usually handles all the requests made to the API. For better structure you will need some kind of HTTP server to make requests to the WAX ExpressTrade API. HTTP related terms like GET and POST shouldn't be a problem as well.

JSON
------
JSON is very popular nowadays, especially with these so called REST-API's.
The WAX ExpressTrade API uses JSON to format the information. Every requests needs some kind of JSON-structure. The response of every API-endpoint will also always return an JSON-Object (Unless you encounter some kind of other error).



Requirements
================
To get in touch with WAX ExpressTrade API it only requires three things. We will go over them, what they do and how to fulfill them.

VGO API Key
------------
For most of the WAX ExpressTrade API you will need to provide an API Key. (To identify yourself) You can simply generate one by using the following method.

1. Open up some kind of console (Windows Command Prompt, Linux/Mac Terminal)

2. Copy the line beneath and change the ``site_url`` and ``display_name`` to a valid value. (This should be the name of your website)

.. parsed-literal::

    $ curl -d '{"site_url":"http://yoursite.com","display_name":"yoursite"}' -H "Content-Type: application/json" -X POST https://api-trade.opskins.com/IUser/CreateVCaseUser/v1/

3. Wait for the response

.. code-block:: json
    :caption: You probably will receive a response like this (If not, the error should be returned. Try to adjust/edit your ``curl`` line and try again)

    {
       "status":1,
       "time":1535545650,
       "response":{
          "api_key":"some kind of api key",
          "user":{
             "id":-868,
             "steam_id":"",
             "display_name":"yoursite",
             "avatar":null,
             "twofactor_enabled":false,
             "api_key_exists":true,
             "sms_phone":null,
             "contact_email":null,
             "allow_twofactor_code_reuse":false,
             "inventory_is_private":true,
             "auto_accept_gift_trades":false,
             "vcase_restricted":true
          }
       }
    }

4. Your "VGO API Key" will be placed in the JSON-Object with the name "api_key". Save it, you will need it later on


Ethereum Address
----------------
An Ethereum Address is needed for the key requests (to open cases). There are tons of Ethereum Wallets on the internet, nearly all of the are free to use.
For the ease of use I'd recommend `MetaMask <https://metamask.io/>`__ or if you want it more secure maybe go for something like `Coinbase <https://www.coinbase.com//>`__. The choice is up to you.
At some point you should have an Ethereum Adress looking something like this: ``0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe``
