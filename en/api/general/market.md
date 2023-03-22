---
aside: false
---

<!--@include: ..//partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/markets">

# List

Using our market list Method, users are now able to easily retrieve markets list.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` (optional) <span>String</span>, Filter by gateway name.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `parent_id` (optional) <span>String</span>, Filter by parent id.
- `sort` (optional) <span>String</span>, sort markets.
    - sort[name]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/markets
```

</template>

</CodeBox>

<Response jfile="v1/market/list" >
<template #result>

- `id` <span>String</span> ID of market.
- `name` <span>String</span> Name of market.
- `slug` <span>String</span> Slug of market.
- `icon` <span>String</span> Icon of market.
- `cover` <span>String</span> Cover of market.
- `status` <span>Integer</span> The status of market. Check out [Status Codes](#status-codes).
- `children` <span>Array of JSON Objects</span> child markets.

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/general/markets/{id}">

# Details

Using our market details method, users are now able to easily retrieve information of a market.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/markets/{id}
```

</template>

</CodeBox>

<Response jfile="v1/market/read" >
<template #result>

- `id` <span>String</span> ID of market.
- `name` <span>String</span> Name of market.
- `slug` <span>String</span> Slug of market.
- `icon` <span>String</span> Icon of market.
- `url` <span>String</span> URL of market.
- `description` <span>String</span> Description of market.
- `cover` <span>String</span> Cover of market.
- `status` <span>Integer</span> The status of market. Check out [Status Codes](#status-codes).
- `parent_id` <span>String</span> ID of parent market.
- `children` <span>Array of JSON Objects</span> child markets.

</template>
</Response>

### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                      |
|--------------------|---------------------|--------------------------------------------------|
| <code>12100</code> | <pre>ACTIVE</pre>   | The purse is active and have full functionality. |
| <code>12101</code> | <pre>INACTIVE</pre> | The purse is inactive and just can read data.    |