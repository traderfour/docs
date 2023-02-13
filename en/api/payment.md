---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/payments">

# Payment List

This API method enables you to obtain the complete listing of your account's payments information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/payments
  --header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/payment/list" >

<template #result>

- `uuid` <span>UUID V4</span>, The unique identifier of payment.
- `token` <span>String</span>, The unique public identifier of payment that use for links, receipts, and public views.
- `merchant` <span>JSON Object</span>, The merchant information that accept payment.
- `payer` <span>JSON Object</span>, The payer information that make payment.
- `amount` <span>Float</span>, The amount of payment. This support 36 digits and 18 decimal places.
- `currency` <span>String</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `factor` <span>String</span>, The factor number of payment.
- `description` <span>String</span>, The description of payment.
- `developer` <span>JSON Array</span>, The developer information that private and key value structure
- `valid_card` <span>String</span>, The valid card of payment.
- `verified_at` <span>Datetime</span>, The verified date of payment.
- `status` <span>Integer</span>, The status of payment. Check out [Payment Status Table](#payment-status-table)
- `password` <span>String</span>, The password of payment.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/payment/:uuid">

# Payment Read

This API method enables you to obtain the complete information of your transaction information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/payments/:uuid
  --header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/payment/read" >

<template #result>

- `uuid` <span>UUID V4</span>, The unique identifier of payment.
- `token` <span>String</span>, The unique public identifier of payment that use for links, receipts, and public views.
- `merchant` <span>JSON Object</span>, The merchant information that accept payment.
- `payer` <span>JSON Object</span>, The payer information that make payment.
- `amount` <span>Float</span>, The amount of payment. This support 36 digits and 18 decimal places.
- `currency` <span>String</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `factor` <span>String</span>, The factor number of payment.
- `description` <span>String</span>, The description of payment.
- `developer` <span>JSON Array</span>, The developer information that private and key value structure
- `valid_card` <span>String</span>, The valid card of payment.
- `verified_at` <span>Datetime</span>, The verified date of payment.
- `status` <span>Integer</span>, The status of payment. Check out [Payment Status Table](#payment-status-table)
- `password` <span>String</span>, The password of payment.

</template>

</Response>


## Payment Status Table

| CODE               | CONSTANT                             | DESCRIPTION                                         |
|--------------------|--------------------------------------|-----------------------------------------------------|
| <code>13010</code> | <pre>payment_status_registered</pre> | The payment registered, but not any event detected. |
| <code>13011</code> | <pre>payment_status_detected</pre>   | The event detected, waiting for verifying.          |
| <code>13012</code> | <pre>payment_status_verifying</pre>  | The processor are verifying payment.                |
| <code>13013</code> | <pre>payment_status_confirmed</pre>  | The payment has been process and confirmed.         |
| <code>13014</code> | <pre>payment_status_canceled</pre>   | The payment has been canceled by payer/payee.       |
