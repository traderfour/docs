---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/account">

# Account

Using our Account Method, users are now able to easily retrieve their account information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account
```

</template>

</CodeBox>

<Response jfile="v1/user/account" >

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account">

# Update Account

Using our Update Account Method, users are now able to easily update their account information.


<template #params>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `country` <span>String</span>, The country that user registered. Check out [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
- `language` <span>String</span>, The language that user selected. Check out [ISO 639](https://www.iso.org/iso-639-language-codes.html).
- `timezone` <span>String</span>, The timezone that user selected. Check out [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `private` <span>Boolean</span>, The user account type.
- `avatar` <span>String</span>, The user avatar.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account \
  -d '{
    "first_name": "John",
    "middle_name": "Doe",
    "last_name": "Doe",
    "country": "US",
    "language": "en",
    "timezone": "America/New_York",
    "private": 1,
    "Avatar": "https://example.com/avatar.png"
  }'
```

</template>

</CodeBox>

<Response jfile="v1/user/account-put" >

<template #result>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered.
- `language` <span>String</span>, The language that user selected.
- `timezone` <span>String</span>, The timezone that user selected.
- `last_connection` <span>Datetime</span>, The last time that user connected to our system.
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/account/settings">

# Settings

Using our Setting Method, users are now able to get setting values.

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account/settings
```

</template>

</CodeBox>

<Response jfile="v1/user/setting" >

<template #result>

- `daily_report` <span>String</span>, Send daily report of account activities at the specified time in user local timezone.
- `auto_renewal` <span>Boolean</span>, The auto renewal of user subscription and services.
- `auto_withdraw` <span>String</span>, The user auto withdraw scheduled period (daily,weekly,monthly,yearly).

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account/settings">

# Update Settings
Using our Settings Method, users are now able to easily update their settings information.

<!--@include: /partials/authorization.md-->
<template #params>
- `daily_report` <span>String</span>, Send daily report of account activities at the specified time in user local timezone.
- `auto_renewal` <span>Boolean</span>, The auto renewal of user subscription and services.
- `auto_withdraw` <span>String</span>, The auto withdraw of user (daily,weekly,monthly,yearly).
</template>
<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account/settings \
    -d '{
        "daily_report": "09:00",
        "auto_renewal": true,
        "auto_withdraw": 'daily'
    }'
```

</template>

</CodeBox>

<Response jfile="v1/user/setting" >

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/account/settings/notifications">

# Notifications
Using our Notifications Method, users are now able to easily get their notifications information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account/settings/notifications
```

</template>

</CodeBox>

<Response jfile="v1/user/notification" >

<template #result>

- `profit_email` <span>Boolean</span>, The profit actions email send setting.
- `profit_push` <span>Boolean</span>, The profit actions push notification send setting.
- `withdraw_email` <span>Boolean</span>, The withdraw actions email send setting.
- `withdraw_push` <span>Boolean</span>, The withdraw actions push notification send setting.
- `deposit_email` <span>Boolean</span>, The deposit actions email send setting.
- `deposit_push` <span>Boolean</span>, The deposit actions push notification send setting.
- `wallet_email` <span>Boolean</span>, The wallet actions email send setting.
- `wallet_push` <span>Boolean</span>, The wallet actions push notification send setting.
- `support_email` <span>Boolean</span>, The support actions email send setting.
- `support_push` <span>Boolean</span>, The support actions push notification send setting.
- `transaction_email` <span>Boolean</span>, The transaction actions email send setting.
- `transaction_push` <span>Boolean</span>, The transaction actions push notification send setting.
- `marketing_email` <span>Boolean</span>, The marketing actions email send setting.
- `marketing_push` <span>Boolean</span>, The marketing actions push notification send setting.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account/settings/notifications">

# Update Notifications

Using our account notifications setting Method, users are now able to easily update account notifications setting.

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account/settings/notifications \
  -u 'token: tr44670677563e9edb832e43'
```

</template>

</CodeBox>

<Response jfile="v1/user/notification" >

<template #result>

- `profit_email` <span>Boolean</span>, The profit actions email send setting.
- `profit_push` <span>Boolean</span>, The profit actions push notification send setting.
- `withdraw_email` <span>Boolean</span>, The withdraw actions email send setting.
- `withdraw_push` <span>Boolean</span>, The withdraw actions push notification send setting.
- `deposit_email` <span>Boolean</span>, The deposit actions email send setting.
- `deposit_push` <span>Boolean</span>, The deposit actions push notification send setting.
- `wallet_email` <span>Boolean</span>, The wallet actions email send setting.
- `wallet_push` <span>Boolean</span>, The wallet actions push notification send setting.
- `support_email` <span>Boolean</span>, The support actions email send setting.
- `support_push` <span>Boolean</span>, The support actions push notification send setting.
- `transaction_email` <span>Boolean</span>, The transaction actions email send setting.
- `transaction_push` <span>Boolean</span>, The transaction actions push notification send setting.
- `marketing_email` <span>Boolean</span>, The marketing actions email send setting.
- `marketing_push` <span>Boolean</span>, The marketing actions push notification send setting.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/account/security">

# Security

Using our account security Method, users are now able to easily check own account securities.

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account/security \
  -u 'token: tr44670677563e9edb832e43'
```

</template>

</CodeBox>

<Response jfile="v1/user/security" >

<template #result>

- `anti_phishing` <span>String</span>, The first name of user.
- `google2fa_secret` <span>Boolean</span>, The middle name of user.
- `email_2step` <span>String</span>, The last name of user.
- `app_2step` <span>String</span>, The email address of user.
- `mobile_2step` <span>String</span>, The mobile number of user.
- `same_wallet` <span>String</span>, The phone number of user.
- `fund_password` <span>String</span>, The country that user registered.
- `registered_wallets` <span>String</span>, The language that user selected.
- `delay` <span>String</span>, The timezone that user selected.

</template>

</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr">

# Update Security

Using our QR Code Check Method, users are now able to easily check the QR Code Token for token has been authorized or not.

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/oauth/qr \
  -u 'token: tr44670677563e9edb832e43'
```

</template>

</CodeBox>

<Response jfile="v1/oauth/qr-post" >

<template #result>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered.
- `language` <span>String</span>, The language that user selected.
- `timezone` <span>String</span>, The timezone that user selected.
- `last_connection` <span>Datetime</span>, The last time that user connected to our system.
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.
- `status` <span>Integer</span>, The status of user account. Check out [Account Status Table](https://docs.trader4.net/en/api/account/#account-status-table).
- `access_token` <span>String</span>, The access token of user.
- `token_type` <span>String</span>, The type of access token.

</template>

</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr">

# Information

Using our QR Code Check Method, users are now able to easily check the QR Code Token for token has been authorized or not.

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/oauth/qr \
  -u 'token: tr44670677563e9edb832e43'
```

</template>

</CodeBox>

<Response jfile="v1/oauth/qr-post" >

<template #result>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered.
- `language` <span>String</span>, The language that user selected.
- `timezone` <span>String</span>, The timezone that user selected.
- `last_connection` <span>Datetime</span>, The last time that user connected to our system.
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.
- `status` <span>Integer</span>, The status of user account. Check out [Account Status Table](https://docs.trader4.net/en/api/account/#account-status-table).
- `access_token` <span>String</span>, The access token of user.
- `token_type` <span>String</span>, The type of access token.

</template>

</Response>