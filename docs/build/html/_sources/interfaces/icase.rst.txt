.. _sec-icase:

**********************
ICase
**********************

Endpoints to handle cases

.. contents::




ICase/GetCaseSchema
===================

.. data:: GET https://api-trade.opskins.com/ICase/GetCaseSchema/v1

Returns an object with all currently available cases.


Authentication
---------------

No auth required.

Input
--------

+-----------+---------+----------+-----------------------------------------------------------------------------------------+
| Parameter | Type    | Required | Description                                                                             |
+===========+=========+==========+=========================================================================================+
| cases     | int-csv |          | A comma-separated list of case ids. If sent, output is limited to these specific cases. |
+-----------+---------+----------+-----------------------------------------------------------------------------------------+

Output
-------

+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| Parameter             | Type         | Description                                                                                                                 |
+=======================+==============+=============================================================================================================================+
| cases                 | array-object | cases list                                                                                                                  |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --id                  | int          | Case ID                                                                                                                     |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --name                | string       | Case name                                                                                                                   |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --image               | object       | Case image URLS (Note: these images may change when remaining_opens hits 0)                                                 |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| ----300px             | string       | URL to 300px image                                                                                                          |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| ----600px             | string       | URL to 600px image                                                                                                          |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| ----900px             | string       | URL to 900px image                                                                                                          |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| ----1800px            | string       | URL to 1800px image                                                                                                         |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| ----2500px            | string       | URL to 2500px image                                                                                                         |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --skus                | array        | An array of item SKU in the case. Note that these may be updated overtime for vIRL cases & will not always be the same.     |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --key_amount_per_case | int          | Number of keys required per 1 case opening                                                                                  |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --max_opens           | int          | How many total items can be created from this case                                                                          |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+
| --remaining_opens     | int          | How many items are remaining to be unboxed from this case. If this is 0, the case is depleted and cannot be opened anymore. |
+-----------------------+--------------+-----------------------------------------------------------------------------------------------------------------------------+




ICase/GetCaseOdds
===================
.. data:: GET https://api-trade.opskins.com/ICase/GetCaseOdds/v1


Authentication
---------------

No auth required.

Input
---------------

+-----------+---------+----------+-----------------------------------------------------------------------------------------+
| Parameter | Type    | Required | Description                                                                             |
+===========+=========+==========+=========================================================================================+
| cases     | int-csv |          | A comma-separated list of case ids. If sent, output is limited to these specific cases. |
+-----------+---------+----------+-----------------------------------------------------------------------------------------+

Output
-------

+----------------------+--------------+------------------------------------------------------------------------------------+
| Parameter            | Type         | Description                                                                        |
+======================+==============+====================================================================================+
| cases                | array-object | An array of objects containing each case                                           |
+----------------------+--------------+------------------------------------------------------------------------------------+
| --id                 | int          | Case ID                                                                            |
+----------------------+--------------+------------------------------------------------------------------------------------+
| --name               | string       | Case Name                                                                          |
+----------------------+--------------+------------------------------------------------------------------------------------+
| --total_weight       | string       | Total weight of case in kilograms                                                  |
+----------------------+--------------+------------------------------------------------------------------------------------+
| --total_percent      | string       | Total percent, relative_percent's added together.                                  |
+----------------------+--------------+------------------------------------------------------------------------------------+
| --odds               | array-object | An array containing object lists of odds per sku                                   |
+----------------------+--------------+------------------------------------------------------------------------------------+
| ----sku              | int          | Item sku for VGO, def_id for other apps/items                                      |
+----------------------+--------------+------------------------------------------------------------------------------------+
| ----weight           | string       | Weight correponding to total_weight                                                |
+----------------------+--------------+------------------------------------------------------------------------------------+
| ----relative_weight  | string       | Weight relative to all other items in the case                                     |
+----------------------+--------------+------------------------------------------------------------------------------------+
| ----relative_percent | string       | % chance of receiving this item, can be displayed to user. (relative_weight * 100) |
+----------------------+--------------+------------------------------------------------------------------------------------+

.. code-block:: json
    :caption: Example Output (https://api-trade.opskins.com/ICase/GetCaseOdds/v1?cases=1)

        {
        "status": 1,
        "time": 1545432800,
        "response": {
            "cases": [
            {
                "id": 1,
                "name": "Weapon Case 1",
                "total_weight": "258917554",
                "total_percent": "99.99999999999986",
                "odds": [
                {
                    "sku": 100,
                    "weight": "780000",
                    "relative_weight": "0.00301254197697",
                    "relative_percent": "0.30125419769723"
                },
                {
                    "sku": 101,
                    "weight": "780000",
                    "relative_weight": "0.00301254197697",
                    "relative_percent": "0.30125419769723"
                },
                {
                    "sku": 102,
                    "weight": "10385844",
                    "relative_weight": "0.04011255258498",
                    "relative_percent": "4.01125525849823"
                },
                {
                    "sku": 103,
                    "weight": "10385844",
                    "relative_weight": "0.04011255258498",
                    "relative_percent": "4.01125525849823"
                },
                {
                    "sku": 104,
                    "weight": "10385844",
                    "relative_weight": "0.04011255258498",
                    "relative_percent": "4.01125525849823"
                },
                {
                    "sku": 105,
                    "weight": "12177681",
                    "relative_weight": "0.04703304512138",
                    "relative_percent": "4.70330451213825"
                },
                {
                    "sku": 106,
                    "weight": "12177681",
                    "relative_weight": "0.04703304512138",
                    "relative_percent": "4.70330451213825"
                },
                {
                    "sku": 107,
                    "weight": "12177681",
                    "relative_weight": "0.04703304512138",
                    "relative_percent": "4.70330451213825"
                },
                {
                    "sku": 108,
                    "weight": "12177681",
                    "relative_weight": "0.04703304512138",
                    "relative_percent": "4.70330451213825"
                },
                {
                    "sku": 109,
                    "weight": "12177681",
                    "relative_weight": "0.04703304512138",
                    "relative_percent": "4.70330451213825"
                },
                {
                    "sku": 110,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 111,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 112,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 113,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 114,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 115,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 116,
                    "weight": "23580231",
                    "relative_weight": "0.09107235347975",
                    "relative_percent": "9.10723534797490"
                },
                {
                    "sku": 10000,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10001,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10002,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10003,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10004,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10005,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10006,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10007,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10008,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10009,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10010,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10011,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10012,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10013,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10014,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10015,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10016,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10017,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10018,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10019,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10020,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10021,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10022,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10023,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                },
                {
                    "sku": 10024,
                    "weight": "10000",
                    "relative_weight": "0.00003862233304",
                    "relative_percent": "0.00386223330381"
                }
                ]
            }
            ]
        }
        }


ICase/GetMinimumOpenVolume
==========================

.. data:: GET https://api-trade.opskins.com/ICase/GetMinimumOpenVolume/v1

Returns the number of cases required to open in each case-opening request.


Authentication
--------------

No auth required.

Input
------
none

Output
-------

+-----------+------+--------------------------------------------------------------------+
| Parameter | Type | Description                                                        |
+===========+======+====================================================================+
| count     | int  | The number of cases required to open in each case-opening request. |
+-----------+------+--------------------------------------------------------------------+




ICase/OpenWithKeys
==================

.. admonition:: Info

   Endpoint is disabled until further notice. (Jan. 11 2019)


.. data:: POST https://api-trade.opskins.com/ICase/OpenWithKeys/v1

Open a Case with Keys

Authentication
---------------

API key required.

OAuth Scopes
---------------
``manage_items``

Input
------

+-----------+------+----------+----------------------------------------------------------------------+
| Parameter | Type | Required | Description                                                          |
+===========+======+==========+======================================================================+
| case_id   | int  | +        | The ID of the case being opened                                      |
+-----------+------+----------+----------------------------------------------------------------------+
| amount    | int  |          | Number of cases to open. Defaults to ``1``. Maximum value of ``100`` |
+-----------+------+----------+----------------------------------------------------------------------+

Output
-------

+-----------+--------+----------------------------+
| Parameter | Type   | Description                |
+===========+========+============================+
| cases     | object | Standard OpenedCase Object |
+-----------+--------+----------------------------+
