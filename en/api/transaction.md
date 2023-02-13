---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/transactions">

# Transaction List

This API method enables you to obtain the complete listing of your account's transactions information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/transactions
  --header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/transaction/list" >

<template #result>

- `uuid` <span>UUID V4</span>, The unique identifier of item.
- `authority` <span>String</span>, The authority of transaction.
- `type` <span>String</span>, The type of transaction, Check out [Transaction Type Table](#transaction-type-table)
- `payee` <span>JSON Object</span>, A payee <small>(who *receive* amount of transaction)</small> user account public information.
- `payer` <span>JSON Object</span>, A payer <small>(who *send* amount of transaction)</small> user account public information. 
- `amount` <span>Integer</span>, The amount of transaction. Support *36* digits and *18* decimal places.
- `currency` <span>Integer</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `description` <span>String</span>, The description of transaction.
- `payer_description` <span>String</span>, The note of transaction by payer.
- `trace_number` <span>String</span>, The trace number of transaction.
- `detected_at` <span>Datetime</span>, The date and time of transaction detected.
- `verified_at` <span>Datetime</span>, The date and time of transaction verified.
- `status` <span>Float</span>, The status of transaction, Check out [Transaction Status Table](#transaction-status-table)

</template>

<template #meta>

- `current_page` <span>Integer</span>, The current page of transaction list.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/transactions/:uuid">

# Transaction Read

This API method enables you to obtain the complete information of your transaction information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl https://api.azpays.net/v1/transactions/:uuid
  --header 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="azpays/transaction/read" >

<template #result>

- `uuid` <span>UUID V4</span>, The unique identifier of item.
- `authority` <span>String</span>, The authority of transaction.
- `type` <span>String</span>, The type of transaction, Check out [Transaction Type Table](#transaction-type-table)
- `payee` <span>JSON Object</span>, A payee <small>(who *receive* amount of transaction)</small> user account public information.
- `payer` <span>JSON Object</span>, A payer <small>(who *send* amount of transaction)</small> user account public information.
- `amount` <span>Integer</span>, The amount of transaction. Support *36* digits and *18* decimal places.
- `currency` <span>Integer</span>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `description` <span>String</span>, The description of transaction.
- `payer_description` <span>String</span>, The note of transaction by payer.
- `trace_number` <span>String</span>, The trace number of transaction.
- `detected_at` <span>Datetime</span>, The date and time of transaction detected.
- `verified_at` <span>Datetime</span>, The date and time of transaction verified.
- `status` <span>Float</span>, The status of transaction, Check out [Transaction Status Table](#transaction-status-table)

</template>

</Response>


## Transaction Status Table

| CODE               | CONSTANT                                 | DESCRIPTION                                             |
|--------------------|------------------------------------------|---------------------------------------------------------|
| <code>11010</code> | <pre>transaction_status_registered</pre> | The transaction registered, but not any event detected. |
| <code>11011</code> | <pre>transaction_status_detected</pre>   | The event detected, waiting for verifying.              |
| <code>11012</code> | <pre>transaction_status_verifying</pre>  | The processor are verifying transaction.                |
| <code>11013</code> | <pre>transaction_status_confirmed</pre>  | The transaction has been process and confirmed.         |
| <code>11014</code> | <pre>transaction_status_canceled</pre>   | The transaction has been canceled by payer/payee.       |

## Transaction Type Table

| CODE               | CONSTANT                                 | DESCRIPTION                                                          |
|--------------------|------------------------------------------|----------------------------------------------------------------------|
| <code>12020</code> | <pre>transaction_type_deposit</pre>      | Amount has been deposited to purses by owner.                        |
| <code>12022</code> | <pre>transaction_type_transfer</pre>     | Amount has been transferred from one purse to an other purse.        |
| <code>12022</code> | <pre>transaction_type_payout</pre>       | Amount has been payout from purse to out of system financial network. |
| <code>12023</code> | <pre>transaction_type_payment</pre>      | Amount has been paid from payer to payee purse.                      |
| <code>12024</code> | <pre>transaction_type_subscription</pre> | Amount has been paid for subscription of service and/or product.     |
| <code>12024</code> | <pre>transaction_type_fee</pre>          | Amount has been transferred cause of fee of action/operation.        |
