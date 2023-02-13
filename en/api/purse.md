---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/purses">

# Purse List

This API method enables you to obtain the complete listing of your account's purse information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/purses
--header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/purse/list" >

- `uuid` <span>UUID V4</span>, The unique identifier of purse.  
- `name` <span>String</span>, The name of purse, user sent in create form/request.  
- `currency` <span>String</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)  
- `note` <span>String</span>, A note that user sent in create form/request.  
- `status` <span>Integer</span>, The status of purse, Check out [Purse Status Table](#purse-status-table)  
- `number` <span>Integer</span>, The unique generated number for purse.  
- `color` <span>String</span>, The color of purse, user sent in create form/request.  
- `balance` <span>Float</span>, The balance of purse.  
- `freeze` <span>Float</span>, The freeze of purse.  

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/purses/:uuid">

# Purse Read

This API method enables you to obtain the complete information of your purse information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/purses/:uuid
  --header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/purse/read" >

- `id` <span>UUID V4</span>, The unique identifier of purse.
- `name` <span>String</span>, The name of purse, user sent in create form/request.
- `currency` <span>String</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `note` <span>String</span>, A note that user sent in create form/request.
- `status` <span>Integer</span>, The status of purse, Check out [Purse Status Table](#purse-status-table)
- `number` <span>Integer</span>, The unique generated number for purse.
- `color` <span>String</span>, The color of purse, user sent in create form/request.
- `balance` <span>Float</span>, The balance of purse.
- `freeze` <span>Float</span>, The freeze of purse.

</Response>


## Purse Status Table

| CODE               | CONSTANT                           | DESCRIPTION                                                                                |
|--------------------|------------------------------------|--------------------------------------------------------------------------------------------|
| <code>11010</code> | <pre>purse_status_registered</pre> | The purse has been registered and not activated yet.                                       |
| <code>11011</code> | <pre>purse_status_active</pre>     | The purse is active, full functionality state.                                             |
| <code>11012</code> | <pre>purse_status_hold</pre>       | The purse is temporary is inactive, it happen by fraud system.                             |
| <code>11013</code> | <pre>purse_status_inactive</pre>   | The purse has been inactivated. In this state user can access read method.                 |
| <code>11014</code> | <pre>purse_status_blocked</pre>    | The purse disabled, it happen by fraud and/or anti-money laundering and/or legal requests. |