---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/trading-accounts">

# List

Using our Account Method, users are now able to easily retrieve their trading-account information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/trading-accounts
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/list" >

<template #result>

- `name` <span>String</span>, The name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `trade_mode` <span>integer</span>.
- `margin-type` <span>integer</span>.
- `order_limit` <span>integer</span>.
- `trade_allowed` <span>boolean</span>.
- `hedge` <span>boolean</span>.
- `capital-road` <span>boolean</span>.
- `server` <span>String</span>the name of server.
- `balance` <span>String</span>.
- `credit` <span>String</span>.
- `equity` <span>String</span>.
- `currency` <span>Integer</span>.
- `margin` <span>String</span>.
- `free-margin` <span>String</span>.
- `margin_level` <span>String</span>.
- `leverage` <span>Integer</span>.
- `stopout_level` <span>Integer</span>.
- `market` <span>Integer</span>.
- `report` <span>Integer</span>.
- `status` <span>Integer</span>.

</template>

</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/trading-accounts">

# Create

Using our store Account Method, users are now able to easily store their trading-account information.


<template #params>

- `name` <span>String</span>, The first name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `password` <span>String</span>, The password of user.
- `server` <span>String</span>.
- `link` <span>String</span>.
- `capital-road` <span>String</span>.


</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/trading-accounts \
  -d '{
    "name": "My Personal Account",
    "broker": 1,
    "company": "ICMarkets",
    "identity": "6598000312",
    "secret": "123456",
    "read_only_secret":"32165456",
    "server": "ICMarkets-Demo",
    "link": "https://www.icmarkets.com/mt4/download/icmarketsdemo.exe"
  }'
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/create" >

<template #result>


- `name` <span>String</span>, The name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `secret` <span>String</span>.
- `read_only_secret` <span>String</span>.
- `trade_mode` <span>integer</span>.
- `margin-type` <span>integer</span>.
- `order_limit` <span>integer</span>.
- `trade_allowed` <span>boolean</span>.
- `hedge` <span>boolean</span>.
- `capital-road` <span>boolean</span>.
- `server` <span>String</span>the name of server.
- `balance` <span>String</span>.
- `credit` <span>String</span>.
- `equity` <span>String</span>.
- `currency` <span>Integer</span>.
- `margin` <span>String</span>.
- `free-margin` <span>String</span>.
- `margin_level` <span>String</span>.
- `leverage` <span>Integer</span>.
- `stopout_level` <span>Integer</span>.
- `market` <span>Integer</span>.
- `report` <span>Integer</span>.
- `status` <span>Integer</span>.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/trading-accounts/:id">

# Read

Using our show Method, users are now able to show information.

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/trading-accounts/:id
```

</template>

</CodeBox>

<Response jfile="v1/tradingAccount/trading-account/single" >

<template #result>


- `name` <span>String</span>, The name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `secret` <span>String</span>.
- `read_only_secret` <span>String</span>.
- `trade_mode` <span>integer</span>.
- `margin-type` <span>integer</span>.
- `order_limit` <span>integer</span>.
- `trade_allowed` <span>boolean</span>.
- `hedge` <span>boolean</span>.
- `capital-road` <span>boolean</span>.
- `server` <span>String</span>the name of server.
- `balance` <span>String</span>.
- `credit` <span>String</span>.
- `equity` <span>String</span>.
- `currency` <span>Integer</span>.
- `margin` <span>String</span>.
- `free-margin` <span>String</span>.
- `margin_level` <span>String</span>.
- `leverage` <span>Integer</span>.
- `stopout_level` <span>Integer</span>.
- `market` <span>Integer</span>.
- `report` <span>Integer</span>.
- `status` <span>Integer</span>.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/trading-accounts">

# Update
Using our Update Method, users are now able to easily update their information.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` <span>String</span>, The first name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `password` <span>String</span>, The password of user.
- `server` <span>String</span>.
- `link` <span>String</span>.
- `capital-road` <span>String</span>.
</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/trading-accounts \
    -d '{
    "name": "johnDoe",
    "broker": 1,
    "company": "ekvan",
    "identity": "identity",
    "password": "123456",
    "server": "server",
    "link": "link",
    
    }'
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/update" >

<template #result>

- `name` <span>String</span>, The name of user.
- `broker` <span>integer</span>, The type of broker.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of user.
- `secret` <span>String</span>.
- `read_only_secret` <span>String</span>.
- `trade_mode` <span>integer</span>.
- `margin-type` <span>integer</span>.
- `order_limit` <span>integer</span>.
- `trade_allowed` <span>boolean</span>.
- `hedge` <span>boolean</span>.
- `capital-road` <span>boolean</span>.
- `server` <span>String</span>the name of server.
- `balance` <span>String</span>.
- `credit` <span>String</span>.
- `equity` <span>String</span>.
- `currency` <span>Integer</span>.
- `margin` <span>String</span>.
- `free-margin` <span>String</span>.
- `margin_level` <span>String</span>.
- `leverage` <span>Integer</span>.
- `stopout_level` <span>Integer</span>.
- `market` <span>Integer</span>.
- `report` <span>Integer</span>.
- `status` <span>Integer</span>.


</template>

</Response>


<CodeBox lang="Restful" method="DELETE" endpoint="/v1/trading-accounts/:id">

# Delete
Using our Delete Method, users are now able to easily delete their information.

<!--@include: /partials/authorization.md-->

<template #params>


</template>

<template #code>

```bash
$ curl --request DELETE \
  https://api.trader4.net/v1/tradind-accounts/:id
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/delete" >

<template #result>

- `id` <span>Integer</span>, The ID of trading account.

</template>

</Response>

