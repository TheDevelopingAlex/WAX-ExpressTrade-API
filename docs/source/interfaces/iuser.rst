.. _sec-iuser:

**********************
IUser
**********************

Endpoints to handle user related things

.. contents::




IUser/CreateVCaseUser
======================

.. data:: POST https://api-trade.opskins.com/IUser/CreateVCaseUser/v1/

Create a special case-website user

VCase Site users are restricted from most parts of the API.  They cannot own items or send regular trades.  But they gain access to a set of new API endpoints under the ICaseSite interface.

You generally only need to create a VCase Site API key once, which can be done with the following example CURL command.

.. parsed-literal::

    $ curl -d '{"site_url":"http://yoursite.com","display_name":"yoursite"}' -H "Content-Type: application/json" -X POST https://api-trade.opskins.com/IUser/CreateVCaseUser/v1/


Authentication
---------------

No auth required.

**Creates a case-website user, which can access all endpoints under the ICaseSite interface.**

Input
-----

+--------------+--------+----------+--------------------------------------------------------------------------------+
| Parameter    | Type   | Required | Description                                                                    |
+==============+========+==========+================================================================================+
| site_url     | string | +        | Must be a valid & unique full URL to your case-website.                        |
+--------------+--------+----------+--------------------------------------------------------------------------------+
| display_name | string | +        | Display name for case-website user. This name will appear in all trade offers. |
+--------------+--------+----------+--------------------------------------------------------------------------------+


Output
-------

+-----------+--------+---------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter | Type   | Description                                                                                                                                       |
+===========+========+===================================================================================================================================================+
| api_key   | string | User API key. Keep it in a safe place and use it to access ICaseSite endpoints.                                                                   |
+-----------+--------+---------------------------------------------------------------------------------------------------------------------------------------------------+
| user      | object | Standard User Profile Object -- User ID will not be a matching OPSkins UID, it will be unique to WAX ExpressTrade and will be a negative integer. |
+-----------+--------+---------------------------------------------------------------------------------------------------------------------------------------------------+




IUser/GetInventory
===================

.. data:: GET https://api-trade.opskins.com/IUser/GetInventory/v1/

Get Your Inventory


Authentication
---------------

API key required.


OAuth Scopes
---------------

``items``, ``trades``

Input
-----

+-----------------+---------+----------+-------------------------------------------------------------------+
| Parameter       | Type    | Required | Description                                                       |
+=================+=========+==========+===================================================================+
| app_id          | int     | +        | Internal App ID (see ITrade/GetApps)                              |
+-----------------+---------+----------+-------------------------------------------------------------------+
| page            | int     |          | Page number in response (starting with 1, defaults to 1)          |
+-----------------+---------+----------+-------------------------------------------------------------------+
| per_page        | int     |          | Number of items per_page in response (no more than 500)           |
+-----------------+---------+----------+-------------------------------------------------------------------+
| search          | string  |          | Additional search by item's name                                  |
+-----------------+---------+----------+-------------------------------------------------------------------+
| sort            | int     |          | Standard Item Sorts                                               |
+-----------------+---------+----------+-------------------------------------------------------------------+
| filter_in_trade | boolean |          | Removes items that are part of an active trade from the response. |
+-----------------+---------+----------+-------------------------------------------------------------------+

Output
------

+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter              | Type         | Description                                                                                                                               |
+========================+==============+===========================================================================================================================================+
| total                  | int          | Total number of items (filtered, if search parameter is passed)                                                                           |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| items                  | array-object | Items list, based on pagination and search filters. Standard Item Object                                                                  |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| sort_parameters        | array-object | Available sort parameters                                                                                                                 |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| items_in_active_offers | object-array | List of Item IDs and matching Offer IDs that are involved in active trade offers. Keys are Item IDs and values are an array of Offer IDs. |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| --value                | int          | Value expected in this method                                                                                                             |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| --display_name         | string       | Display name                                                                                                                              |
+------------------------+--------------+-------------------------------------------------------------------------------------------------------------------------------------------+




IUser/GetProfile
================

.. data:: GET https://api-trade.opskins.com/IUser/GetProfile/v1/

Get Your Profile


Authentication
---------------

API key required.


Authentication
---------------

``identity_basic``, ``identity``

Input
------

+------------+------+----------+-------------------------------------------------------+
| Parameter  | Type | Required | Description                                           |
+============+======+==========+=======================================================+
| with_extra | bool |          | Should we send sensitive user data? Defaults to false |
+------------+------+----------+-------------------------------------------------------+

Output
------

+-----------+--------+------------------------------+
| Parameter | Type   | Description                  |
+===========+========+==============================+
| user      | object | Standard User Profile Object |
+-----------+--------+------------------------------+




IUser/UpdateProfile
===================

.. data:: POST https://api-trade.opskins.com/IUser/UpdateProfile/v1/

Update Your Profile


Authentication
---------------

API key required.


OAuth Scopes
-------------

``edit_account``


Input
-------

+----------------------------+---------+----------+-----------------------------------------------------------------------------+
| Parameter                  | Type    | Required | Description                                                                 |
+============================+=========+==========+=============================================================================+
| display_name               | string  |          | Name to display on trade offers                                             |
+----------------------------+---------+----------+-----------------------------------------------------------------------------+
| inventory_is_private       | boolean |          | Whether inventory is private (nobody can see it, even with token)           |
+----------------------------+---------+----------+-----------------------------------------------------------------------------+
| allow_twofactor_code_reuse | boolean |          | Allow Two Factor code reuse for certain features (Send Offer, Accept Offer) |
+----------------------------+---------+----------+-----------------------------------------------------------------------------+
| auto_accept_gift_trades    | boolean |          | Auto-accept gift trade offers                                               |
+----------------------------+---------+----------+-----------------------------------------------------------------------------+
| anonymous_transactions     | boolean |          | Hide my username in WAX transaction records                                 |
+----------------------------+---------+----------+-----------------------------------------------------------------------------+


Output
-------

+-----------+--------+------------------------------+
| Parameter | Type   | Description                  |
+===========+========+==============================+
| user      | object | Standard User Profile Object |
+-----------+--------+------------------------------+


IUser/UserReports
==================

.. data:: POST https://api-trade.opskins.com/IUser/UserReports/v1


Authentication
---------------

API key required.

Input
------

+-------------+---------+----------+---------------------------------------------+
| Parameter   | Type    | Required | Description                                 |
+=============+=========+==========+=============================================+
| message     | string  | +        | Message included in the report              |
+-------------+---------+----------+---------------------------------------------+
| report_type | integer | +        | Reason - spam = 1, phishing = 2, error = 3; |
+-------------+---------+----------+---------------------------------------------+
| offer_id    | integer | +        | Id of the reported offer                    |
+-------------+---------+----------+---------------------------------------------+

Output
------

+-----------+---------+------------------------------+
| Parameter | Type    | Description                  |
+===========+=========+==============================+
| success   | boolean | true if everything went well |
+-----------+---------+------------------------------+