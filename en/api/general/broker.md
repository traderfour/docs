---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers">

# List

Using our broker list Method, users are now able to easily retrieve brokers list.

<!--@include: /partials/authorization.md-->

<template #params>

- `market_id` (optional) <span>String</span>, Filter by market id.
- `name` (optional) <span>String</span>, Filter by broker name.
- `description` (optional) <span>String</span>, Filter by description.
- `country` (optional) <span>String</span>, Filter by country.
- `account_currencies` (optional) <span>String</span>, Filter by account_currencies.
- `phone` (optional) <span>String</span>, Filter by phone.
- `fax` (optional) <span>String</span>, Filter by fax.
- `email` (optional) <span>String</span>, Filter by email.
- `languages` (optional) <span>String</span>, Filter by languages.
- `is_dealing_desk` (optional) <span>Boolean</span>, Filter by is_dealing_desk.
- `is_stp` (optional) <span>Boolean</span>, Filter by is_stp.
- `is_ecn` (optional) <span>Boolean</span>, Filter by is_ecn.
- `is_market_maker` (optional) <span>Boolean</span>, Filter by is_market_maker.
- `is_ndd` (optional) <span>Boolean</span>, Filter by is_ndd.
- `is_dma` (optional) <span>Boolean</span>, Filter by is_dma.
- `is_prime_of_prime` (optional) <span>Boolean</span>, Filter by is_prime_of_prime.
- `us_clients` (optional) <span>Boolean</span>, Filter by us_clients.
- `has_swap_free` (optional) <span>Boolean</span>, Filter by has_swap_free.
- `has_demo_account` (optional) <span>Boolean</span>, Filter by has_demo_account.
- `has_segregated_account` (optional) <span>Boolean</span>, Filter by has_segregated_account.
- `interest_on_margin` (optional) <span>Boolean</span>, Filter by interest_on_margin.
- `has_managed_account` (optional) <span>Boolean</span>, Filter by has_managed_account.
- `has_mobile_trading` (optional) <span>Boolean</span>, Filter by has_mobile_trading.
- `has_web_trading` (optional) <span>Boolean</span>, Filter by has_web_trading.
- `has_api` (optional) <span>Boolean</span>, Filter by has_api.
- `has_socket` (optional) <span>Boolean</span>, Filter by has_socket.
- `has_oco_orders` (optional) <span>Boolean</span>, Filter by has_oco_orders.
- `allow_hedge` (optional) <span>Boolean</span>, Filter by allow_hedge.
- `has_trailing_stops` (optional) <span>Boolean</span>, Filter by has_trailing_stops.
- `has_one_click_trading` (optional) <span>Boolean</span>, Filter by has_one_click_trading.
- `has_bonus` (optional) <span>Boolean</span>, Filter by has_bonus.
- `has_contests` (optional) <span>Boolean</span>, Filter by has_contests.
- `has_stocks` (optional) <span>Boolean</span>, Filter by has_stocks.
- `has_options` (optional) <span>Boolean</span>, Filter by has_options.
- `has_futures` (optional) <span>Boolean</span>, Filter by has_futures.
- `has_indices` (optional) <span>Boolean</span>, Filter by has_indices.
- `has_commodities` (optional) <span>Boolean</span>, Filter by has_commodities.
- `has_energies` (optional) <span>Boolean</span>, Filter by has_energies.
- `has_shares` (optional) <span>Boolean</span>, Filter by has_shares.
- `has_spread_betting` (optional) <span>Boolean</span>, Filter by has_spread_betting.
- `has_cfd` (optional) <span>Boolean</span>, Filter by has_cfd.
- `has_cryptocurrencies` (optional) <span>Boolean</span>, Filter by has_cryptocurrencies.
- `five_decimals` (optional) <span>Boolean</span>, Filter by five_decimals.
- `allow_scalping` (optional) <span>Boolean</span>, Filter by allow_scalping.
- `allow_super_scalping` (optional) <span>Boolean</span>, Filter by allow_super_scalping.
- `offices` (optional) <span>Array</span>, Filter by offices.
- `regulations` (optional) <span>Array</span>, Filter by regulations.
- `funding_methods` (optional) <span>Array</span>, Filter by funding_methods.
- `withdrawal_methods` (optional) <span>Array</span>, Filter by withdrawal_methods.
- `money_managers` (optional) <span>Array</span>, Filter by money_managers.
- `availability` (optional) <span>Array</span>, Filter by availability.
- `minimum_deposit` (optional) <span>Array</span>, Filter by minimum_deposit.
- `maximal_leverage` (optional) <span>Array</span>, Filter by maximal_leverage.
- `minimum_lot_size` (optional) <span>Array</span>, Filter by minimum_lot_size.
- `maximal_lot_size` (optional) <span>Array</span>, Filter by maximal_lot_size.
- `commission` (optional) <span>Array</span>, Filter by commission.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `spread` (optional) <span>Integer</span>, Filter by spread code. Check out [Spread Codes](#spread-codes).
- `sort` (optional) <span>String</span>, sort brokers.
    - sort[name]=asc
    - sort[spread]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers
```

</template>

</CodeBox>

<Response jfile="v1/broker/list" >
<template #result>

- `id` <span>String</span> ID of broker.
- `market_id` <span>String</span>, market id.
- `name` <span>String</span> Name of broker.
- `logo` <span>String</span> logo.
- `website` <span>String</span> website.
- `description` <span>String</span>, description.
- `country` <span>String</span>, country.
- `account_currencies` <span>String</span>, account_currencies.
- `phone` <span>String</span>, phone.
- `fax` <span>String</span>, fax.
- `email` <span>String</span>, email.
- `languages` <span>String</span>, languages.
- `is_dealing_desk` <span>Boolean</span>, is_dealing_desk.
- `is_stp` <span>Boolean</span>, is_stp.
- `is_ecn` <span>Boolean</span>, is_ecn.
- `is_market_maker` <span>Boolean</span>, is_market_maker.
- `is_ndd` <span>Boolean</span>, is_ndd.
- `is_dma` <span>Boolean</span>, is_dma.
- `is_prime_of_prime` <span>Boolean</span>, is_prime_of_prime.
- `us_clients` <span>Boolean</span>, us_clients.
- `has_swap_free` <span>Boolean</span>, has_swap_free.
- `has_demo_account` <span>Boolean</span>, has_demo_account.
- `has_segregated_account` <span>Boolean</span>, has_segregated_account.
- `interest_on_margin` <span>Boolean</span>, interest_on_margin.
- `has_managed_account` <span>Boolean</span>, has_managed_account.
- `has_mobile_trading` <span>Boolean</span>, has_mobile_trading.
- `has_web_trading` <span>Boolean</span>, has_web_trading.
- `has_api` <span>Boolean</span>, has_api.
- `has_socket` <span>Boolean</span>, has_socket.
- `has_oco_orders` <span>Boolean</span>, has_oco_orders.
- `allow_hedge` <span>Boolean</span>, allow_hedge.
- `has_trailing_stops` <span>Boolean</span>, has_trailing_stops.
- `has_one_click_trading` <span>Boolean</span>, has_one_click_trading.
- `has_bonus` <span>Boolean</span>, has_bonus.
- `has_contests` <span>Boolean</span>, has_contests.
- `has_stocks` <span>Boolean</span>, has_stocks.
- `has_options` <span>Boolean</span>, has_options.
- `has_futures` <span>Boolean</span>, has_futures.
- `has_indices` <span>Boolean</span>, has_indices.
- `has_commodities` <span>Boolean</span>, has_commodities.
- `has_energies` <span>Boolean</span>, has_energies.
- `has_shares` <span>Boolean</span>, has_shares.
- `has_spread_betting` <span>Boolean</span>, has_spread_betting.
- `has_cfd` <span>Boolean</span>, has_cfd.
- `has_cryptocurrencies` <span>Boolean</span>, has_cryptocurrencies.
- `five_decimals` <span>Boolean</span>, five_decimals.
- `allow_scalping` <span>Boolean</span>, allow_scalping.
- `allow_super_scalping` <span>Boolean</span>, allow_super_scalping.
- `offices` <span>Array of JSON Objects</span>, offices.
- `regulations` <span>Array of Strings</span>, regulations.
- `funding_methods` <span>Array of JSON Objects</span>, funding_methods.
- `withdrawal_methods` <span>Array of JSON Objects</span>, withdrawal_methods.
- `money_managers` <span>Array of JSON Objects</span>, money_managers.
- `availability` <span>Array of JSON Objects</span>, availability.
- `minimum_deposit` <span>Array of JSON Objects</span>, minimum_deposit.
- `maximal_leverage` <span>Array of JSON Objects</span>, maximal_leverage.
- `minimum_lot_size` <span>Array of JSON Objects</span>, minimum_lot_size.
- `maximal_lot_size` <span>Array of JSON Objects</span>, maximal_lot_size.
- `commission` <span>Array of JSON Objects</span>, commission.
- `status` <span>Integer</span>, status code. Check out [Status Codes](#status-codes).
- `spread` <span>Integer</span>, spread code. Check out [Spread Codes](#spread-codes).

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers/{id}">

# Details

Using our broker details method, users are now able to easily retrieve information of a broker.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers/{id}
```

</template>

</CodeBox>

<Response jfile="v1/broker/read" >
<template #result>

- `id` <span>String</span> ID of broker.
- `market_id` <span>String</span>, market id.
- `name` <span>String</span> Name of broker.
- `logo` <span>String</span> logo.
- `website` <span>String</span> website.
- `description` <span>String</span>, description.
- `country` <span>String</span>, country.
- `account_currencies` <span>String</span>, account_currencies.
- `phone` <span>String</span>, phone.
- `fax` <span>String</span>, fax.
- `email` <span>String</span>, email.
- `languages` <span>String</span>, languages.
- `is_dealing_desk` <span>Boolean</span>, is_dealing_desk.
- `is_stp` <span>Boolean</span>, is_stp.
- `is_ecn` <span>Boolean</span>, is_ecn.
- `is_market_maker` <span>Boolean</span>, is_market_maker.
- `is_ndd` <span>Boolean</span>, is_ndd.
- `is_dma` <span>Boolean</span>, is_dma.
- `is_prime_of_prime` <span>Boolean</span>, is_prime_of_prime.
- `us_clients` <span>Boolean</span>, us_clients.
- `has_swap_free` <span>Boolean</span>, has_swap_free.
- `has_demo_account` <span>Boolean</span>, has_demo_account.
- `has_segregated_account` <span>Boolean</span>, has_segregated_account.
- `interest_on_margin` <span>Boolean</span>, interest_on_margin.
- `has_managed_account` <span>Boolean</span>, has_managed_account.
- `has_mobile_trading` <span>Boolean</span>, has_mobile_trading.
- `has_web_trading` <span>Boolean</span>, has_web_trading.
- `has_api` <span>Boolean</span>, has_api.
- `has_socket` <span>Boolean</span>, has_socket.
- `has_oco_orders` <span>Boolean</span>, has_oco_orders.
- `allow_hedge` <span>Boolean</span>, allow_hedge.
- `has_trailing_stops` <span>Boolean</span>, has_trailing_stops.
- `has_one_click_trading` <span>Boolean</span>, has_one_click_trading.
- `has_bonus` <span>Boolean</span>, has_bonus.
- `has_contests` <span>Boolean</span>, has_contests.
- `has_stocks` <span>Boolean</span>, has_stocks.
- `has_options` <span>Boolean</span>, has_options.
- `has_futures` <span>Boolean</span>, has_futures.
- `has_indices` <span>Boolean</span>, has_indices.
- `has_commodities` <span>Boolean</span>, has_commodities.
- `has_energies` <span>Boolean</span>, has_energies.
- `has_shares` <span>Boolean</span>, has_shares.
- `has_spread_betting` <span>Boolean</span>, has_spread_betting.
- `has_cfd` <span>Boolean</span>, has_cfd.
- `has_cryptocurrencies` <span>Boolean</span>, has_cryptocurrencies.
- `five_decimals` <span>Boolean</span>, five_decimals.
- `allow_scalping` <span>Boolean</span>, allow_scalping.
- `allow_super_scalping` <span>Boolean</span>, allow_super_scalping.
- `offices` <span>Array of JSON Objects</span>, offices.
- `regulations` <span>Array of Strings</span>, regulations.
- `funding_methods` <span>Array of JSON Objects</span>, funding_methods.
- `withdrawal_methods` <span>Array of JSON Objects</span>, withdrawal_methods.
- `money_managers` <span>Array of JSON Objects</span>, money_managers.
- `availability` <span>Array of JSON Objects</span>, availability.
- `minimum_deposit` <span>Array of JSON Objects</span>, minimum_deposit.
- `maximal_leverage` <span>Array of JSON Objects</span>, maximal_leverage.
- `minimum_lot_size` <span>Array of JSON Objects</span>, minimum_lot_size.
- `maximal_lot_size` <span>Array of JSON Objects</span>, maximal_lot_size.
- `commission` <span>Array of JSON Objects</span>, commission.
- `status` <span>Integer</span>, status code. Check out [Status Codes](#status-codes).
- `spread` <span>Integer</span>, spread code. Check out [Spread Codes](#spread-codes).

</template>
</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers">

# Regulations

Using our Regulations list Method, users are now able to easily retrieve Regulations list.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers
```

</template>

</CodeBox>

<Response jfile="v1/broker/regulations" >
<template #result>

</template>
</Response>


### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>11400</code> | <pre>ACTIVE</pre>   | The broker is active and have full functionality. |
| <code>11401</code> | <pre>INACTIVE</pre> | The broker is inactive and just can read data.    |

### Spread Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>11500</code> | <pre>WIDE</pre>     | Wide Spread.                                      |
| <code>11501</code> | <pre>FIXED</pre>    | Fixed Spread.                                     |
| <code>11502</code> | <pre>HYBRID</pre>   | Hybrid Spread.                                    |
