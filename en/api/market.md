---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/markets">

# List

Using our market list Method, users are now able to easily retrieve markets list.

<!--@include: /partials/authorization.md-->

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
- `parent_id` <span>String</span> ID of parent market.

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
- `parent_id` <span>String</span> ID of parent market.
- `children` <span>Array of JSON Objects</span> child markets.

</template>
</Response>
