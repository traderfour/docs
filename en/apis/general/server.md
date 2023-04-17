---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/server/:id">

# List

Using our server list Method, users are now able to easily retrieve server list.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` (optional) <span>String</span>, Filter by market name.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `parent_id` (optional) <span>String</span>, Filter by parent id.
- `sort` (optional) <span>String</span>, sort markets.
    - sort[name]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/server
```

</template>

</CodeBox>

<Response jfile="v1/server/list" >
<template #result>

- `id` <span>String</span> ID of server.
- `title` <span>String</span> title of server.
- `ip` <span>String</span> ip.
- `ip_type` <span>Integer</span> ip_type.
- `port` <span>Integer</span> port.
- `proxy_ip` <span>Integer</span> proxy_ip.
- `proxy_port` <span>Integer</span> proxy_port.
- `proxy_type` <span>Integer</span> proxy_type.
- `proxy_username` <span></span> proxy_username.
- `proxy_password` <span></span> proxy_password.
  - `market` <span>JSON Object</span>, withdrawal method market.
    - `id` <span>String</span>, id of market.
    - `name` <span>String</span>, name of market.
    - `slug` <span>String</span>, slug of market.
    - `icon` <span>String</span>, icon of market.
  - `broker` <span>JSON Object</span>, withdrawal method market.
    - `id` <span>String</span>, id of broker.
    - `name` <span>String</span>, name of broker.
    - `slug` <span>String</span>, slug of broker.
    - `icon` <span>String</span>, icon of broker.
  - `platform` <span>JSON Object</span>, withdrawal method market.
    - `id` <span>String</span>, id of platform.
    - `name` <span>String</span>, name of platform.
    - `slug` <span>String</span>, slug of platform.
    - `icon` <span>String</span>, icon of platform.
</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/general/server/:id/instrument">

# instrument

Using our instrument  method, users are now able to easily retrieve information of a instrument.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/server/:id/instrument
```

</template>

</CodeBox>

<Response jfile="v1/server/instruments" >
<template #result>

- `id` <span>String</span> ID of instruments.
- `name` <span>String</span> Name of instruments.
- `slug` <span>String</span> Slug of instruments.
- `logo` <span>String</span> logo of instruments.
- `sector` <span>String</span> sector.
- `industry` <span>Integer</span> industry
- `digits` <span>Integer</span> digits
- `contract_size` <span>Integer</span> contract_size
- `spread` <span>Integer</span> spread
- `stops_level` <span>Integer</span> stops_level
- `margin_currency` <span>String</span> margin_currency
- `profit_currency` <span>String</span> profit_currency
- `calculation_mode` <span>Integer</span> calculation_mode
- `tick_size` <span>String</span> tick_size.
- `tick_value` <span>Integer</span> tick_value.
- `chart_mode` <span>Integer</span> chart_mode.
- `margin_rate` <span>Integer</span> margin_rate.
- `swap_rate` <span>Integer</span> swap_rate.
- `sessions` <span>Integer</span> sessions.
- `max_leverage` <span>Integer</span> max_leverage.
- `min_lot_size` <span>String</span> min_lot_size.
- `max_lot_size` <span>String</span> max_lot_size.
- `commission` <span>String</span> commission.
- `commission_calculation_mode` <span>String</span> commission_calculation_mode.
- `status` <span>Integer</span> status.


</template>
</Response>
