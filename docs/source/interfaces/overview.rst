*************************
Quick Overview
*************************

API Interfaces
---------------

- :ref:`ICase <sec-icase>`
- :ref:`ICaseSite <sec-icasesite>`
- :ref:`IEthereum <sec-iethereum>`
- :ref:`IItem <sec-iitem>`
- :ref:`ITrade <sec-itrade>`
- :ref:`IUser <sec-iuser>`

OAuth
------
OPSkins OAuth works automatically with WAX Trade. You can use OAuth to log users into your website via OPSkins and (if desired) perform actions on their behalf via the API. Please see `OPSkins OAuth Docs <https://docs.opskins.com/public/en.html#oauth>`__ for more information.



API Response
-------------

Direct URL to API: https://api-trade.opskins.com

All *successful* API responses have return data within the "response" object.  A typical response may look like this:

.. code-block:: json

    {
        "status": 1,
        "time": 1528334546,
        "response": {
            "offer": {
                "some": "data"
            }
        }
    }


If a response is paginated, the pagination details (`current_page` and `total_pages`) occur at the top-level of the object, not inside the `response` body.

Response Status Codes
----------------------
All `status` codes and their titles can be found in the table below. In some instances, the `status` code may be an HTTP status code (e.g. 404). We recognize that mixing of these codes is not ideal and will fix this in the near future.

+----------------------------+-----+
| Status                     | Code|
+============================+=====+
| OK                         | 1   |
+----------------------------+-----+
| GENERIC_USER_ACCOUNT_ERROR | 102 |
+----------------------------+-----+
| ACCESS_DENIED              | 106 |
+----------------------------+-----+
| NOT_LOGGED_IN              | 108 |
+----------------------------+-----+
| NEEDS_TWOFACTOR            | 112 |
+----------------------------+-----+
| TWOFACTOR_INCORRECT        | 122 |
+----------------------------+-----+
| USERNAME_TAKEN             | 124 |
+----------------------------+-----+
| UNACCEPTABLE_USERNAME      | 126 |
+----------------------------+-----+
| GENERIC_INTERNAL_ERROR     | 202 |
+----------------------------+-----+
| DATABASE_ERROR             | 204 |
+----------------------------+-----+
| NOT_FOUND                  | 206 |
+----------------------------+-----+
| BAD_STATE                  | 208 |
+----------------------------+-----+
| NO_MATCHING_ITEMS_FOUND    | 210 |
+----------------------------+-----+
| CANNOT_CREATE_DIRECTORY    | 216 |
+----------------------------+-----+
| FILE_UPLOAD_ERROR          | 218 |
+----------------------------+-----+
| FILE_UPLOAD_ALREADY_EXISTS | 220 |
+----------------------------+-----+
| CANNOT_DELETE_FILE         | 222 |
+----------------------------+-----+
| ALREADY_IN_THAT_STATE      | 226 |
+----------------------------+-----+
| LOCKED                     | 228 |
+----------------------------+-----+
| DISABLED                   | 234 |
+----------------------------+-----+
| MALFORMED_RESPONSE         | 236 |
+----------------------------+-----+
| EXPIRED                    | 238 |
+----------------------------+-----+
| EMPTY_DATA                 | 240 |
+----------------------------+-----+
| ITEM_NEEDS_REPAIR          | 246 |
+----------------------------+-----+
| ITEM_NOT_IN_INVENTORY      | 248 |
+----------------------------+-----+
| BAD_INPUT                  | 302 |
+----------------------------+-----+
| UNACCEPTABLE_ITEM          | 304 |
+----------------------------+-----+
| DUPLICATE_ITEM             | 306 |
+----------------------------+-----+
| BAD_REQUEST                | 312 |
+----------------------------+-----+
| CAPTCHA_INVALID            | 316 |
+----------------------------+-----+
| RATE_LIMIT_EXCEEDED        | 318 |
+----------------------------+-----+
| MISSING_DEPENDENCY         | 326 |
+----------------------------+-----+
| REQUEST_OR_FILE_TOO_LARGE  | 330 |
+----------------------------+-----+
| UNACCEPTABLE_FILE_TYPE     | 332 |
+----------------------------+-----+
| THIRD_PARTY_UNAVAILABLE    | 408 |
+----------------------------+-----+

Additional Notes
------------------
- On some endpoints you may be required to send a `twofactor_code`. Please see `this comment <https://github.com/OPSkins/trade-opskins-api/issues/16#issuecomment-399715578>`__ if you need help.
- For transferring items from OPSkins to WAX ExpressTrade, see: `OPSkins Docs: IInventory/TransferToTradeSite/v1 <https://docs.opskins.com/public/en.html#IInventory_TransferToTradeSite_v1>`__

Dynamic Images
------------------
- On some items, you may see image URLs like so: ``https://static.wax.io/d-img/...7cea75.png``
- Default image dimensions will be ``300x300`` (Width x Height) or lower (depending on the original image).
- You may request a different dimension by changing the end of the URL: ``/600x600``, ``/900x900``, etc.
- Best fit will be chosen automatically, so you may not always get the exact dimensions you choose.
- You can request the original (highest resolution) image with ``/original``
- e.g. https://static.wax.io/d-img/dynamic-apps/img/cdff6f51e89199e8c9772535a17cea75.png/50x50
- e.g. https://static.wax.io/d-img/dynamic-apps/img/cdff6f51e89199e8c9772535a17cea75.png/600x600
- e.g. https://static.wax.io/d-img/dynamic-apps/img/cdff6f51e89199e8c9772535a17cea75.png/original