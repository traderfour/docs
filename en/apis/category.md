---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/categories">

# Category

Using this method, you can easily see the categories

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/categories
```

</template>

</CodeBox>

<Response jfile="v1/category/category" >

<template #result>

- `title` <span>String</span>, The title of category.
- `slug` <span>String</span>, The link that comes after the domain.
- `type` <span>integer</span>, A number that specifies the type of categories .

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/categories">

# Filter Category

Using this method, we can filter the categories.


<template #params>

- `title` <span>String</span>, The title of category.
- `type` <span>String</span>, The type of category.
- `sort[created_at]` <span>String</span>,sort base on category created.
- `sort[id]` <span>String</span>, sort base on category id.


</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account \
  -d '{
    "title": "Scalping",
    "sort[created_at]": "desc",
    "sort[id]": "asc",
    "type": "13000",
  }'
```

</template>

</CodeBox>

<Response jfile="v1/category/filter" >

<template #result>

- `title` <span>String</span>, The title of category.
- `slug` <span>String</span>, The link that comes after the domain.
- `type` <span>integer</span>, A number that specifies the type of categories .

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/categories/{id}">

# Show Category

By using this method, you can display the desired category

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/categories/{id}
```

</template>

</CodeBox>

<Response jfile="v1/category/show" >

<template #result>

- `title` <span>String</span>, The title of category.
- `slug` <span>String</span>, The link that comes after the domain.
- `type` <span>integer</span>, A number that specifies the type of categories .
</template>

</Response>


## Auto Withdraw Table

| CODE               | CONSTANT                              | DESCRIPTION |
|--------------------|---------------------------------------|-------------|
| <code>13000</code> | <pre>BOT</pre>                        |             |
| <code>13001</code> | <pre>INDICATOR</pre>                  |             |
| <code>13002</code> | <pre>SYSTEM</pre>                     |             |
| <code>13003</code> | <pre>SCRIPT</pre>                     |             |
| <code>13004</code> | <pre>TEMPLATE</pre>                   |   
| <code>13005</code> | <pre>ALGORITHM</pre>                  |  
| <code>13006</code> | <pre>ARTIFICIAL_INTELLIGENCE</pre>    |   
| <code>13007</code> | <pre>PORTFOLIO</pre>                  |   
| <code>13008</code> | <pre>AI_LIVE</pre>                    |   
| <code>13009</code> | <pre>FUNDED_ACCOUNT</pre>             |             |
| <code>13010</code> | <pre>TRADING_SIGNAL</pre>             |  
| <code>13011</code> | <pre>TRADING_STRATEGY</pre>           |  
| <code>13012</code> | <pre>COURSE</pre>                     |             |


