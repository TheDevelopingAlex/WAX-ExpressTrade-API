.. _sec-iitem:

**********************
IItem
**********************

Endpoints to handle cases

.. contents::



IItem/GetAllItems
===================

.. data:: GET https://api-trade.opskins.com/IItem/GetAllItems/v1/

Authentication
---------------

API key required.

Input
-----

+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| Parameter     | Type    | Required | Description                                                                                         |
+===============+=========+==========+=====================================================================================================+
| app_id        | int     | +        | Internal App ID (see ITrade/GetApps)                                                                |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| sku           | csv-int |          | Optional filtering by SKU (for VGO), or def_id for all other items                                  |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| name          | string  |          | Optional filter/search by item market name                                                          |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| page          | int     |          | Page number (starting with 1, defaults to 1)                                                        |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| per_page      | int     |          | Number of items per page (default 25, max 100, min 1)                                               |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| sort          | int     |          | Standard Item Sorts                                                                                 |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+
| no_exclusions | boolean |          | By default some items are excluded, see list below. Sending 1 here will disable all SKU exclusions. |
+---------------+---------+----------+-----------------------------------------------------------------------------------------------------+

.. hint:: Default Excluded SKUs: ``VGO 1`` (WAX Key)


Output
------

+-----------+--------------+-------------------------------+
| Parameter | Type         | Description                   |
+===========+==============+===============================+
| items     | array-object | Array of Standard Item Object |
+-----------+--------------+-------------------------------+

.. code-block:: json
    :caption: Output Example

      {
         "status":1,
         "time":1538684115,
         "current_page":1,
         "total_pages":9,
         "response":{
            "items":[
               {
                  "id":911,
                  "sku":10011,
                  "wear":0.01472946,
                  "pattern_index":362,
                  "preview_urls":null,
                  "eth_inspect":null,
                  "trade_hold_expires":null,
                  "internal_app_id":1,
                  "inspect":null,
                  "tradable":true,
                  "attributes":{
                     "serial_sku":6,
                     "serial_sku_wear":6
                  },
                  "name":"Bayonet | Poison Target (Factory New)",
                  "category":"Covert Knife",
                  "rarity":"Covert",
                  "type":"Knife",
                  "paint_index":null,
                  "color":"#eb4b4b",
                  "image":{
                     "300px":"https://files.opskins.media/file/vgo-img/item/bayonet-poison-target-factory-new-300.png",
                     "600px":"https://files.opskins.media/file/vgo-img/item/bayonet-poison-target-factory-new-600.png"
                  },
                  "suggested_price":14000,
                  "suggested_price_floor":14000,
                  "wear_tier_index":1
               },
               {
                  "id":910,
                  "sku":106,
                  "wear":0.17418098,
                  "pattern_index":769,
                  "preview_urls":null,
                  "eth_inspect":null,
                  "trade_hold_expires":null,
                  "internal_app_id":1,
                  "inspect":null,
                  "tradable":true,
                  "attributes":{
                     "serial_sku":78,
                     "serial_sku_wear":44
                  },
                  "name":"P90 | Critical (Field-Tested)",
                  "category":"Restricted SMG",
                  "rarity":"Restricted",
                  "type":"SMG",
                  "paint_index":null,
                  "color":"#8847ff",
                  "image":{
                     "300px":"https://files.opskins.media/file/vgo-img/item/p90-critical-field-tested-300.png",
                     "600px":"https://files.opskins.media/file/vgo-img/item/p90-critical-field-tested-600.png"
                  },
                  "suggested_price":121,
                  "suggested_price_floor":121,
                  "wear_tier_index":3
               }
            ]
         }
      }




IItem/GetItemsById
===================

.. data:: GET https://api-trade.opskins.com/IItem/GetItemsById/v1/

Get user items by id numbers.


Authentication
---------------

API key required.

OAuth Scopes
---------------
``items``

Input
-----

+-----------+---------+----------+--------------------------------------+
| Parameter | Type    | Required | Description                          |
+===========+=========+==========+======================================+
| item_id   | int-csv | +        | item id filter, separated with comma |
+-----------+---------+----------+--------------------------------------+

Output
------

+---------------+--------------+----------------------------------------+
| Parameter     | Type         | Description                            |
+===============+==============+========================================+
| items         | array-object | Array of Standard Item Object          |
+---------------+--------------+----------------------------------------+
| unknown_items | array        | Array of item ids that were not found. |
+---------------+--------------+----------------------------------------+




IItem/WithdrawToOpskins
========================

.. data:: POST https://api-trade.opskins.com/IItem/WithdrawToOpskins/v1/

Withdraw items to OPSkins on-site inventory.


Authentication
---------------

API key required.

OAuth Scopes
---------------
``manage_items``

Input
------

+-----------+---------+----------+--------------------------------------+
| Parameter | Type    | Required | Description                          |
+===========+=========+==========+======================================+
| item_id   | int-csv | +        | item id filter, separated with comma |
+-----------+---------+----------+--------------------------------------+

Output
-------

+--------------------+--------+-----------------------------+
| Parameter          | Type   | Description                 |
+====================+========+=============================+
| results            | object | Result from OPSkins API     |
+--------------------+--------+-----------------------------+
| output             | object | Archived items              |
+--------------------+--------+-----------------------------+
| -uid               | int    | OPSkins UID                 |
+--------------------+--------+-----------------------------+
| -items             | object | Archived items              |
+--------------------+--------+-----------------------------+
| --appid            | int    | Steam App ID                |
+--------------------+--------+-----------------------------+
| --contextid        | int    | Steam Context ID            |
+--------------------+--------+-----------------------------+
| --market_name      | string | Market name                 |
+--------------------+--------+-----------------------------+
| --owner_uid        | int    | OPSkins UID                 |
+--------------------+--------+-----------------------------+
| --wear             | float  | Wear float value            |
+--------------------+--------+-----------------------------+
| --original_sale_id | int    | Original sale ID on OPSkins |
+--------------------+--------+-----------------------------+




IItem/GetItems
===============

.. Hint:: This endpoint is deprecated in favor of IItem/GetItemDefinitions!

.. data:: GET or POST https://api-trade.opskins.com/IItem/GetItems/v1/

* Fully supports VGO items

* Partially supports other items for seamless compability with vCase sites.

* (Only if full list of skus is provided from ICase/GetCaseSchema & Beware that the output may contain irrelavent properties to the actual item, such as wear tier)


- All VGO items: ``https://api-trade.opskins.com/IItem/GetItems/v1``

- Filter by SKU (VGO only): ``https://api-trade.opskins.com/IItem/GetItems/v1?sku_filter=100``

- Filter by SKU & Wear Tier (VGO only): ``https://api-trade.opskins.com/IItem/GetItems/v1?sku_filter=100&wear_tier_index=1``

- Multiple SKU (VGO only): ``https://api-trade.opskins.com/IItem/GetItems/v1?sku_filter=100,102&wear_tier_index=1``


.. Note:: POST is recommended, as you could easily exceed maximum URI size with GET when using sku_filter. If you are receiving HTTP 500 errors when using GET, this is most likely the reason.

Authentication
---------------

None required.

Input
-----

+-------------------+---------+----------+-------------------------------------------+
| Parameter         | Type    | Required | Description                               |
+===================+=========+==========+===========================================+
| sku_filter        | int-csv |          | Optional SKU filter, separated with comma |
+-------------------+---------+----------+-------------------------------------------+
| --wear_tier_index | int     |          | Optional alongside sku_filter             |
+-------------------+---------+----------+-------------------------------------------+

Output
------
+------------------------------+--------+-------------------------------------------------------------------------------------------------------+
| Parameter                    | Type   | Description                                                                                           |
+==============================+========+=======================================================================================================+
| items                        | object | Object containing item meta data                                                                      |
+------------------------------+--------+-------------------------------------------------------------------------------------------------------+
| --(sku)                      | string | SKU number                                                                                            |
+------------------------------+--------+-------------------------------------------------------------------------------------------------------+
| ----(wear_tier_index)        | string | Wear tier index                                                                                       |
+------------------------------+--------+-------------------------------------------------------------------------------------------------------+
| ------(meta data properties) | mix    | name, category, rarity, type, color, image, suggested_price, and paint_indexfrom Standard Item Object |
+------------------------------+--------+-------------------------------------------------------------------------------------------------------+

.. Note:: VERSION 1 BUG WARNING: For SKU = 1 items (Skeleton Key), the wear tier index is missing.  Instead, the key is listed inside of a single-element array.  So to access it, you would: `items.1[0].name`.  This will be fixed in version 2.

.. code-block:: json
    :caption: Example Output

    {
      "status": 1,
      "time": 1524850074,
      "response": {
          "items": {
              "10006": {
                  "1": {
                      "name": "Karambit | Poison Target (Factory New)",
                      "category": "Covert Knife",
                      "rarity": "Covert",
                      "type": "Knife",
                      "color": "#eb4b4b",
                      "image": {
                        "300px": "https://files.opskins.media/file/vgo-img/item/karambit-poison-target-factory-new-300.png",
                        "600px": "https://files.opskins.media/file/vgo-img/item/karambit-poison-target-factory-new-600.png"
                      },
                      "suggested_price": 71436,
                      "paint_index": null
                 }
              }
          }
      }
    }

VGO Wear Tier Index Map
------------------------
These mappings will never change, you may store and use as you please. Items without tiers, e.g. keys, have a wear tier index of `0`.

.. code-block:: json
    :caption: Example Output

    {
      "wear_tier_index_map": {
         "": 0,
         "Factory New": 1,
         "Minimal Wear": 2,
         "Field-Tested": 3,
         "Well-Worn": 4,
         "Battle-Scarred": 5
      },
      "wear_tier_index_to_float_map": {
         "1": {
            "min": 0,
            "max": 0.06999999999999
         },
         "2": {
            "min": 0.07,
            "max": 0.14999999999999
         },
         "3": {
            "min": 0.15,
            "max": 0.37999999999999
         },
         "4": {
            "min": 0.38,
            "max": 0.44999999999999
         },
         "5": {
            "min": 0.45,
            "max": 1
         }
      }
    }


IItem/GetItemDefinitions
========================

.. data:: GET or POST https://api-trade.opskins.com/IItem/GetItemDefinitions/v1/

* All items for an app (limit ``1000`` per page): ``GetItemDefinitions/v1?app_id=1``

* Filter by ``def_id``: ``GetItemDefinitions/v1?app_id=1&def_id_filter=900000001,900000002``

.. Note:: POST is recommended, as you could easily exceed maximum URI size with GET when using sku_filter. If you are receiving HTTP 500 errors when using GET, this is most likely the reason.

Authentication
---------------

None required.

Input
-----

+---------------+---------+----------+---------------------------------------------------------------------------------------+
| Parameter     | Type    | Required | Description                                                                           |
+===============+=========+==========+=======================================================================================+
| app_id        | int     | +        | Internal App ID (see ITrade/GetApps)                                                  |
+---------------+---------+----------+---------------------------------------------------------------------------------------+
| def_id_filter | csv-int |          | Optional def_id comma-separated filter                                                |
+---------------+---------+----------+---------------------------------------------------------------------------------------+
| index_by      | string  |          | Optionally index the output by market_name, def_id, or sku, send it as literal string |
+---------------+---------+----------+---------------------------------------------------------------------------------------+
| page          | int     |          | Page number in response (starting with 1, defaults to 1)                              |
+---------------+---------+----------+---------------------------------------------------------------------------------------+
| per_page      | int     |          | Number of items per_page in response (no more than 1000 (default))                    |
+---------------+---------+----------+---------------------------------------------------------------------------------------+


Output
------

+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter               | Type                   | Description                                                                                                                                                                                                                                      |
+=========================+========================+==================================================================================================================================================================================================================================================+
| definitions             | array-object or object | An array of objects or object list if index_by option is used                                                                                                                                                                                    |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --def_id                | int                    | Unique Definition ID, this is a unique & unchanging identifier for each item, regardless of app_id. Not to be confused with sku, which is not unique per wear-tierfor VGO items. VGO item def_id starts at 900,000,000 for no particular reason. |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --sku                   | int                    | SKU for item. Mainly utilized for VGO items, for all other items, this will be the same as def_id.                                                                                                                                               |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --internal_app_id       | int                    | Internal App ID                                                                                                                                                                                                                                  |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --name                  | string                 | Name, non-unique, most likely the same as market_name however                                                                                                                                                                                    |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --market_name           | string                 | Market name, unique per app_id                                                                                                                                                                                                                   |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --color                 | string                 | Color with hex # for VGO (ID 1), for all others, no # 🙁 -- usually corresponds to the rarity of the item                                                                                                                                        |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --image                 | string                 | Generic image URL                                                                                                                                                                                                                                |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --suggested_price       | int                    | Market suggested price                                                                                                                                                                                                                           |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --suggested_price_floor | int                    | The minimum viable suggested price, does not change.                                                                                                                                                                                             |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| --attributes            | object                 | Generic (non-unique) item attributes, all app-specific properties will be in here                                                                                                                                                                |
+-------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. code-block:: json
    :caption: Output Example (Array of objects)

      {
         "status":1,
         "time":1544467201,
         "current_page":1,
         "total_pages":1,
         "response":{
            "definitions":[
               {
                  "def_id":900000001,
                  "internal_app_id":1,
                  "name":"WAX Key",
                  "market_name":"WAX Key",
                  "color":"#777777",
                  "image":"https://files.opskins.media/file/vgo-img/item/wax-key-300.png",
                  "suggested_price":250,
                  "suggested_price_floor":250,
                  "attributes":{
                     "category":"WAX Key",
                     "image_generic_300":"https://files.opskins.media/file/vgo-img/item/wax-key-300.png",
                     "image_generic_600":"https://files.opskins.media/file/vgo-img/item/wax-key-600.png",
                     "image_generic_900":"https://files.opskins.media/file/vgo-img/item/wax-key-900.png",
                     "image_generic_1800":"https://files.opskins.media/file/vgo-img/item/wax-key-1800.png",
                     "image_generic_2500":"https://files.opskins.media/file/vgo-img/item/wax-key-2500.png",
                     "paint_index":null,
                     "rarity":null,
                     "suggested_price_floor":250,
                     "type":"WAX Key",
                     "wear_tier_index":0
                  }
               }
            ]
         }
      }


.. code-block:: json
    :caption: Output Example (Indexed by ``def_id``)

      {
         "status":1,
         "time":1544467222,
         "current_page":1,
         "total_pages":1,
         "response":{
            "definitions":{
               "900000001":{
                  "def_id":900000001,
                  "internal_app_id":1,
                  "name":"WAX Key",
                  "market_name":"WAX Key",
                  "color":"#777777",
                  "image":"https://files.opskins.media/file/vgo-img/item/wax-key-300.png",
                  "suggested_price":250,
                  "suggested_price_floor":250,
                  "attributes":{
                     "category":"WAX Key",
                     "image_generic_300":"https://files.opskins.media/file/vgo-img/item/wax-key-300.png",
                     "image_generic_600":"https://files.opskins.media/file/vgo-img/item/wax-key-600.png",
                     "image_generic_900":"https://files.opskins.media/file/vgo-img/item/wax-key-900.png",
                     "image_generic_1800":"https://files.opskins.media/file/vgo-img/item/wax-key-1800.png",
                     "image_generic_2500":"https://files.opskins.media/file/vgo-img/item/wax-key-2500.png",
                     "paint_index":null,
                     "rarity":null,
                     "suggested_price_floor":250,
                     "type":"WAX Key",
                     "wear_tier_index":0
                  }
               },
               "900000002":{
                  "def_id":900000002,
                  "internal_app_id":1,
                  "name":"AK-47 | Overdrive (Factory New)",
                  "market_name":"AK-47 | Overdrive (Factory New)",
                  "color":"#eb4b4b",
                  "image":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-300.png",
                  "suggested_price":23252,
                  "suggested_price_floor":23252,
                  "attributes":{
                     "category":"Covert Rifle",
                     "image_generic_300":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-300.png",
                     "image_generic_600":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-600.png",
                     "image_generic_900":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-900.png",
                     "image_generic_1800":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-1800.png",
                     "image_generic_2500":"https://files.opskins.media/file/vgo-img/item/ak-47-overdrive-factory-new-2500.png",
                     "paint_index":null,
                     "rarity":"Covert",
                     "suggested_price_floor":23252,
                     "type":"Rifle",
                     "wear_tier_index":1
                  }
               }
            }
         }
      }




IItem/GetRarityStats
====================

.. data:: GET https://api-trade.opskins.com/IItem/GetRarityStats/v1/

Get item rarity stats per Definition ID (SKU) (currently only for VGO)


Authentication
---------------

API key required.

Input
-----
+-----------+---------+----------+-------------------------------------------+
| Parameter | Type    | Required | Description                               |
+===========+=========+==========+===========================================+
| app_id    | int     | +        | Internal App ID (see ITrade/GetApps)      |
+-----------+---------+----------+-------------------------------------------+
| def_id    | int-csv |          | Definition IDs (SKUs) separated by commas |
+-----------+---------+----------+-------------------------------------------+

- If an item was never unboxed (very rare items), no stats will be outputted

- An individual item's permanent serial number will be inside Standard Item Object as ``serial_sku_wear``.


Output
------
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter          | Type     | Description                                                                                                                                      |
+====================+==========+==================================================================================================================================================+
| items              | object   | Object containing rarity data per Definition ID                                                                                                  | 
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| -(def_id)          | string   | Definition ID                                                                                                                                    |
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| --def_id           | int      | Definition ID                                                                                                                                    |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| --def_sub_id       | int/null | Sub-Definition ID, for VGO this is the Wear Tier Index (1,2,3,4,5)                                                                               |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| --latest_serial    | int      | The latest Serial Number given for an item of this type (only per Def ID). Not currently displayed on our sites.                                 |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| --sub_items        | object   | Object containing rarity data per Definition ID & Sub Definition ID                                                                              |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| ---(def_sub_id)    | string   | Sub-Definition ID                                                                                                                                |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| ----def_id         | int      | Definition ID                                                                                                                                    |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| -----def_sub_id    | int      | Sub-Definition ID                                                                                                                                |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+
| -----latest_serial | int      | The latest serial number given for an item of this type. This is what is displayed as "Total Unboxed" on WAX ExpressTrade & OPSkins Marketplace. |                                           
+--------------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------------+

.. code-block:: json
    :caption: Output Example

      {
         "status":1,
         "time":1536707797,
         "response":{
            "items":{
               "102":{
                  "def_id":102,
                  "def_sub_id":null,
                  "latest_serial":2,
                  "sub_items":{
                     "2":{
                        "def_id":102,
                        "def_sub_id":2,
                        "latest_serial":1
                     },
                     "5":{
                        "def_id":102,
                        "def_sub_id":5,
                        "latest_serial":1
                     }
                  }
               }
            }
         }
      }


IItem/InstantSellRecentItems
============================

.. data:: POST https://api-trade.opskins.com/IItem/InstantSellRecentItems/v1/

This endpoint can be used to instant-sell recently (15 min) unboxed items on OPSkins. Items are automatically transferred to OPSkins and then sold via the endpoint ISales/InstantSellItems/v1. Note that partial success is possible with this endpoint. It's also possible that we will send a ``status`` of ``1`` but the OPSkins endpoint will fail completely, as shown in the Output Examples below.

Authentication
---------------

API key required.

OAuth Scopes
-------------

``instant_sell_recent_items``

- If using OAuth, OPSkins wallet balance information will not be shown unless balance scope is available.


Allowed Apps
-------------

- All apps & items allowed. Note that the OPSkins endpoint may still reject some apps & items.


Input
------

+-------------------+---------+----------+-------------------------------------------------------+
| Parameter         | Type    | Required | Description                                           |
+===================+=========+==========+=======================================================+
| item_id           | int-csv | +        | List of Item IDs, separated with commas. Maximum 100. |
+-------------------+---------+----------+-------------------------------------------------------+
| instant_sell_type | int     |          | 1 for OPSkins Credits, 2 for USD (default)            |
+-------------------+---------+----------+-------------------------------------------------------+


Output
------

+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| Parameter                  | Type      | Description                                                                                                     |
+============================+===========+=================================================================================================================+
| valid_item_ids             | array-int | Item IDs considered valid                                                                                       |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| unknown_item_ids           | array-int | Item IDs that were not found in the database or do not belong to you                                            |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| not_recent_item_ids        | array-int | Item IDs created more than 15 minutes ago, which are not eligible                                               |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| ineligible_item_ids        | array-int | Item IDs that are currently not eligible for trade or transfer                                                  |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| not_allowed_item_ids       | array-int | Deprecated (all apps & items allowed). Item IDs that are not allowed for this endpoint. See Allowed Apps above. |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+
| isales_instantsellitems_v1 | mixed     | Full ISales/InstantSellItems/v1 response from OPSkins API                                                       |
+----------------------------+-----------+-----------------------------------------------------------------------------------------------------------------+

.. code-block:: json
    :caption: Output Example (partial success)

      {
         "status":1,
         "time":1542928287,
         "response":{
            "valid_item_ids":[
               391
            ],
            "unknown_item_ids":[
               291,
               292
            ],
            "not_recent_item_ids":[

            ],
            "ineligible_item_ids":[

            ],
            "not_allowed_item_ids":[

            ],
            "isales_instantsellitems_v1":{
               "status":1,
               "time":1542928287,
               "balance":500027520,
               "credits":245,
               "cryptoBalances":{
                  "ETH":"0.000000000000000000",
                  "WAX":"0.000000000000000000"
               },
               "response":{
                  "items":[
                     {
                        "saleid":309421537,
                        "new_itemid":309421538,
                        "item_id":391,
                        "name":"Huntsman Knife | Cyber Sport (Battle-Scarred)"
                     }
                  ],
                  "items_count":1,
                  "total_value":{
                     "usd":6601,
                     "credits":0
                  }
               }
            }
         }
      }


.. code-block:: json
    :caption: Output Example (None of the provided items exist or belong to you)

      {
         "status": 312,
         "time": 1542910778,
         "message": "None of the items provided exist or belong to you: 159, 160"
      }


.. code-block:: json
    :caption: Output Example (None of the items provided are valid/eligible)

      {
         "status": 312,
         "time": 1542910641,
         "message": "None of the items provided are valid/eligible",
         "response": {
            "valid_item_ids": [],
            "unknown_item_ids": [
                  159,
                  160
            ],
            "not_recent_item_ids": [
                  180
            ],
            "ineligible_item_ids": [],
            "not_allowed_item_ids": []
         }
      }

.. code-block:: json
    :caption: Output Example (OPSkins API Error)

      {
         "status": 1,
         "time": 1542852394,
         "response": {
            "isales_instantsellitems_v1": {
                  "status": 2000,
                  "time": 1542852394,
                  "message": "Something went wrong."
            }
         }
      }

.. code-block:: json
    :caption: Output Example (Error while transferring items to OPSkins)

      {
         "status": 202,
         "time": 1542864143,
         "message": "Error during transfer of items to OPSkins. It's possible the items were transferred successfully.",
         "response": {
            "valid_item_ids": [
                  174
            ],
            "unknown_item_ids": [
                  159,
                  160
            ],
            "not_recent_item_ids": [],
            "ineligible_item_ids": [],
            "not_allowed_item_ids": []
         }
      }