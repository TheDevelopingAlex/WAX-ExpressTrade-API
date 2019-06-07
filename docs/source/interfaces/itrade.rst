.. _sec-itrade:

**********************
ITrade
**********************

Endpoints which allows Peer-to-Peer Trading.

.. contents::




ITrade/AcceptOffer
==================

.. data:: POST https://api-trade.opskins.com/ITrade/AcceptOffer/v1/

Accepts offer sent by another user


Authentication
---------------

API key required.


OAuth Scopes
---------------

- ``trades``
- ``open_cases`` (restricted to only case-opening offers)


Input
------

+----------------+--------+----------+-----------------------------------+
| Parameter      | Type   | Required | Description                       |
+================+========+==========+===================================+
| twofactor_code | string | +        | 2-factor authentication code      |
+----------------+--------+----------+-----------------------------------+
| offer_id       | int    | +        | Trade offer Id you want to accept |
+----------------+--------+----------+-----------------------------------+


Output
-------

+--------------+--------------+------------------------------------------------------------------------------------+
| Parameter    | Type         | Description                                                                        |
+==============+==============+====================================================================================+
| offer        | object       | Standard Trade Offer Object                                                        |
+--------------+--------------+------------------------------------------------------------------------------------+
| new items    | array-object | New items for the recipient (user that makes this API call). Standard Item Object  |
+--------------+--------------+------------------------------------------------------------------------------------+
| failed_cases | int          | A count of failed cases opened with keys, 0 if none failed.                        |
+--------------+--------------+------------------------------------------------------------------------------------+




ITrade/CancelOffer
==================

.. data:: POST https://api-trade.opskins.com/ITrade/CancelOffer/v1/

Cancels a trade offer

If cancelled by the sender it will go into `STATE_CANCELLED` (6) and if cancelled by the receiver it will go into `STATE_DECLINED` (7).


Authentication
---------------

API key required.

OAuth Scopes
---------------

``trades``


Input
------

+-----------+------+----------+------------------------------------------------------+
| Parameter | Type | Required | Description                                          |
+===========+======+==========+======================================================+
| offer_id  | int  | +        | Offer ID that you're a party to (sender or receiver) |
+-----------+------+----------+------------------------------------------------------+


Output
-------

+-----------+--------+-----------------------------+
| Parameter | Type   | Description                 |
+===========+========+=============================+
| offer     | object | Standard Trade Offer Object |
+-----------+--------+-----------------------------+




ITrade/GetApps
==============

.. data:: GET https://api-trade.opskins.com/ITrade/GetApps/v1/

Get all supported apps and their descriptions.


Authentication
---------------

No auth required.


Input
------
none

Output
-------

+--------------------+--------+----------------------------------------------------------------------------+
| Parameter          | Type   | Description                                                                |
+====================+========+============================================================================+
| apps               | object | List of apps and descriptions                                              |
+--------------------+--------+----------------------------------------------------------------------------+
| --internal_app_id  | int    | Internal App ID                                                            |
+--------------------+--------+----------------------------------------------------------------------------+
| --steam_app_id     | int    | Steam App ID                                                               |
+--------------------+--------+----------------------------------------------------------------------------+
| --steam_context_id | int    | Steam Context ID                                                           |
+--------------------+--------+----------------------------------------------------------------------------+
| --name             | string | Short name of app                                                          |
+--------------------+--------+----------------------------------------------------------------------------+
| --long_name        | string | Long name of app                                                           |
+--------------------+--------+----------------------------------------------------------------------------+
| --img              | string | Image URL of app icon https://opskins.com/images/games/logo-small-vgo.jpg  |
+--------------------+--------+----------------------------------------------------------------------------+
| --img_thumb        | string | Thumbnail image for app https://opskins.com/images/game-thumb-vgo.jpg      |
+--------------------+--------+----------------------------------------------------------------------------+
| --default          | int    | If property exists, this is the default app. Not outputted for other apps. |
+--------------------+--------+----------------------------------------------------------------------------+


.. code-block:: json
    :caption: Output Example 

    {
        "status": 1,
        "time": 1528135996,
        "response": {
            "apps": [
                {
                    "internal_app_id": 1,
                    "steam_app_id": 1912,
                    "steam_context_id": 1,
                    "name": "VGO",
                    "long_name": "VGO",
                    "img": "https://opskins.com/images/games/logo-small-vgo.jpg",
                    "default": 1
                }
            ]
        }
    }




ITrade/GetOffer
===============

.. data:: GET https://api-trade.opskins.com/ITrade/GetOffer/v1/

Get an individual trade offer

You must be one of the parties involved in the offer (sender/receiver).


Authentication
--------------

API key required.

OAuth Scopes
--------------

``items``

Input
------

+-----------+------+----------+-------------------+
| Parameter | Type | Required | Description       |
+===========+======+==========+===================+
| offer_id  | int  | +        | ID of trade offer |
+-----------+------+----------+-------------------+

Output
------

+-----------+--------+-----------------------------+
| Parameter | Type   | Description                 |
+===========+========+=============================+
| offer     | object | Standard Trade Offer Object |
+-----------+--------+-----------------------------+




ITrade/GetOffers
=================

.. data:: GET https://api-trade.opskins.com/ITrade/GetOffers/v1/

Get user's trade offers


Authentication
---------------

API key required.

OAuth Scopes
--------------

``items``

Input
------

+-----------+---------+----------+---------------------------------------------------------------------------------------+
| Parameter | Type    | Required | Description                                                                           |
+===========+=========+==========+=======================================================================================+
| uid       | int     |          | ID of other user, involved in offers                                                  |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| state     | string  |          | A comma-separated list of offer states to filter by (See available states in ITrade). |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| type      | string  |          | One of sent, received                                                                 |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| page      | int     |          | page number in response (starting with 1, default to 1)                               |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| per_page  | int     |          | number of items per_page in response (no more than 100, defaults to 100)              |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| ids       | int-csv |          | Trade offer IDs list filter                                                           |
+-----------+---------+----------+---------------------------------------------------------------------------------------+
| sort      | string  |          | One of created, expired, modified                                                     |
+-----------+---------+----------+---------------------------------------------------------------------------------------+

Output
-------

+-----------+--------------+---------------------------------------------------+
| Parameter | Type         | Description                                       |
+===========+==============+===================================================+
| offers    | array-object | Array of Standard Trade Offer Object              |
+-----------+--------------+---------------------------------------------------+
| total     | int          | Total number of offers matching the input filters |
+-----------+--------------+---------------------------------------------------+




ITrade/GetTradeUrl
==================

.. data:: GET https://api-trade.opskins.com/ITrade/GetTradeURL/v1/

Get your account's trade URL, allowing P2P trading.


Authentication
---------------

API key required.


OAuth Scopes
--------------

``identity_basic``, ``identity``, ``trades``


Input
------
none

Output
-------

+-----------+--------+---------------------------------------------------------------------------------------------------+
| Parameter | Type   | Description                                                                                       |
+===========+========+===================================================================================================+
| uid       | int    | Your OPSkins User ID                                                                              |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| token     | string | Your trade token                                                                                  |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| long_url  | string | The actual URL someone should go to in order to send a trade offer to your account.               |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| short_url | string | A shortened alias for long_url of the type ".../t/1/Lhn9d7fVL1U". This redirects to the long URL. |
+-----------+--------+---------------------------------------------------------------------------------------------------+




ITrade/GetUserInventory
=======================

.. data:: GET https://api-trade.opskins.com/ITrade/GetUserInventory/v1/

Get trade offer recipient's inventory.


Authentication
--------------

No auth required.

Input
------

+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| Parameter | Type   | Required | Description                                                                                   |
+===========+========+==========+===============================================================================================+
| uid       | int    | +        | User ID of user whose inventory you want to see                                               |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| app_id    | int    | +        | Internal App ID (see ITrade/GetApps)                                                          |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| page      | int    |          | Page number in response (starting with 1, defaults to 1)                                      |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| per_page  | int    |          | Number of items per_page in response (no more than 500)                                       |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| search    | string |          | Additional search by item's name                                                              |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| sort      | int    |          | Code to set how results should be sorted. See available types below or in the output response |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+


Output
-------

+-----------------+--------------+-----------------------------------------------------------------+
| Parameter       | Type         | Description                                                     |
+=================+==============+=================================================================+
| total           | int          | Total number of items (filtered, if search parameter is passed) |
+-----------------+--------------+-----------------------------------------------------------------+
| items           | object       | Standard Item Object                                            |
+-----------------+--------------+-----------------------------------------------------------------+
| user_data       | object       | Standard User Public Profile Object                             |
+-----------------+--------------+-----------------------------------------------------------------+
| sort_parameters | array-object | Available sort parameters                                       |
+-----------------+--------------+-----------------------------------------------------------------+


Sort parameter values
-----------------------
- `1`: By name ASC (alphabetical, `z` first)
- `2`: By name DESC (alphabetical, `a` first)
- `3`: By last_update ASC (oldest first)
- `4`: By last_update DESC (newest first)
- `5`: By suggested price ASC (lowest first)
- `6`: By suggested price DESC (highest first)




ITrade/GetUserInventoryFromSteamId
===================================

.. data:: GET https://api-trade.opskins.com/ITrade/GetUserInventoryFromSteamId/v1/

Get trade offer recipient's inventory by SteamID.


Authentication
--------------

API key required.


OAuth Scopes
--------------

``items``, ``trades``


Input
------

+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| Parameter | Type   | Required | Description                                                                                   |
+===========+========+==========+===============================================================================================+
| steam_id  | int    | +        | Steam ID of user whose inventory you want to see                                              |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| app_id    | int    | +        | Internal App ID (see ITrade/GetApps)                                                          |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| page      | int    |          | Page number in response (starting with 1, default to 1)                                       |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| per_page  | int    |          | Number of items per_page in response (no more than 500)                                       |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| search    | string |          | Additional search by item's name                                                              |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+
| sort      | int    |          | Code to set how results should be sorted. See available types below or in the output response |
+-----------+--------+----------+-----------------------------------------------------------------------------------------------+

Output
-------

+-----------------+--------------+-----------------------------------------------------------------+
| Parameter       | Type         | Description                                                     |
+=================+==============+=================================================================+
| total           | int          | Total number of items (filtered, if search parameter is passed) |
+-----------------+--------------+-----------------------------------------------------------------+
| items           | object       | Standard Item Object                                            |
+-----------------+--------------+-----------------------------------------------------------------+
| user_data       | object       | Standard User Public Profile Object                             |
+-----------------+--------------+-----------------------------------------------------------------+
| sort_parameters | array-object | Available sort parameters                                       |
+-----------------+--------------+-----------------------------------------------------------------+

Sort parameter values
-----------------------
- `1`: By name ASC (alphabetical, `z` first)
- `2`: By name DESC (alphabetical, `a` first)
- `3`: By last_update ASC (oldest first)
- `4`: By last_update DESC (newest first)
- `5`: By suggested price ASC (lowest first)
- `6`: By suggested price DESC (highest first)




ITrade/RegenerateTradeUrl
=========================

.. data:: POST https://api-trade.opskins.com/ITrade/RegenerateTradeURL/v1/

Regenerate your account's trade URL for P2P trading, invalidating the old one.


Authentication
---------------

API key required.


OAuth Scopes
---------------

``edit_account``

Input
-------
none

Output
-------

+-----------+--------+---------------------------------------------------------------------------------------------------+
| Parameter | Type   | Description                                                                                       |
+===========+========+===================================================================================================+
| uid       | int    | Your OPSkins User ID                                                                              |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| token     | string | Your new trade token                                                                              |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| long_url  | string | The actual URL someone should go to in order to send a trade offer to your account.               |
+-----------+--------+---------------------------------------------------------------------------------------------------+
| short_url | string | A shortened alias for long_url of the type ".../t/1/Lhn9d7fVL1U". This redirects to the long URL. |
+-----------+--------+---------------------------------------------------------------------------------------------------+




ITrade/SendOffer
=================

.. data:: POST https://api-trade.opskins.com/ITrade/SendOffer/v1/

Sends trade offer to another user including your and their items


Authentication
---------------

API key required.

OAuth Scopes
-------------

``trades``

Input
------

One of: ``uid`` + ``token`` **or** ``trade_url`` is required.

+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| Parameter        | Type    | Required | Description                                                                                           |
+==================+=========+==========+=======================================================================================================+
| twofactor_code   | int     | +        | 2-factor authentication code                                                                          |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| uid              | int     |          | User ID of user you want to send your trade offer to                                                  |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| token            | string  |          | Trade token of user you want to send your trade offer to                                              |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| trade_url        | string  |          | Trade URL of the user you want to send your trade offer to.                                           |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| items_to_send    | csv-int |          | A comma-separated list of (int) Item IDs you wish to send to recipient. Maximum 100 items.            |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| items_to_receive | csv-int |          | A comma-separated list of (int) Item IDs you wish to receive from the recipient. Maximum 100 items.   |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| expiration_time  | int     |          | Custom expiration time for an offer in seconds. Minimum 120 seconds (2 minutes). Defaults to 14 days. |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| message          | string  |          | Trade offer message that will be displayed to the recipient                                           |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+


Output
-------

+-----------+--------+-----------------------------+
| Parameter | Type   | Description                 |
+===========+========+=============================+
| offer     | object | Standard Trade Offer Object |
+-----------+--------+-----------------------------+




ITrade/SendOfferToSteamId
===========================

.. data:: POST https://api-trade.opskins.com/ITrade/SendOfferToSteamId/v1/

Sends trade offer to another user, including your and their items


Authentication
---------------

API key required.

OAuth Scopes
-------------

``trades``

Input
------

+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| Parameter        | Type    | Required | Description                                                                                           |
+==================+=========+==========+=======================================================================================================+
| twofactor_code   | int     | +        | 2FA Auth Code                                                                                         |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| steam_id         | string  | +        | Steam ID of user you want to send your trade offer to                                                 |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| items_to_send    | csv-int |          | A comma-separated list of (int) Item IDs you wish to send to recipient. Maximum 100 items.            |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| items_to_receive | csv-int |          | A comma-separated list of (int) Item IDs you wish to receive from the recipient. Maximum 100 items.   |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| expiration_time  | int     |          | Custom expiration time for an offer in seconds. Minimum 120 seconds (2 minutes). Defaults to 14 days. |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+
| message          | string  |          | An optional message to include with your trade offer, up to 190 characters.                           |
+------------------+---------+----------+-------------------------------------------------------------------------------------------------------+


Output
-------

+-----------+--------+-----------------------------+
| Parameter | Type   | Description                 |
+===========+========+=============================+
| offer     | object | Standard Trade Offer Object |
+-----------+--------+-----------------------------+
