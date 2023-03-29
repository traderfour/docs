---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="webSocket" endpoint="/bridge-client">

# Bridge-Client

<template #params>

- `trading_account` <span>String</span>, The id of trading account.
- `command` <span>String</span>, name of function.
- `arguments` <span>Array of JSON Objects</span>, arguments.
  - `symbol` <span>String</span>,symbol.
  - `period` <span>String</span>,period.
  - `step` <span>String</span>,step.
  - `maximum` <span>String</span>,maximum.

</template>
<!--@include: /partials/authorization.md-->

<template #code>

```bash

  ws://api.trader4.net/bridge-client
    -d '{
    "trading_account":"98b9d304-5132-4bf8-b491-cce462a1803b" ,
        "command"   : "OrderOpenTime",
        "arguments" : {
          "symbol"  : "XAUUSD",
          "period"  : "PERIOD_M5",
           "step"   : "0.54",
          "maximum" : "0.91"
    }
  }'
```

</template>

</CodeBox>


<CodeBox lang="Restful" method="webSocket" endpoint="/bridge-mql">

# Bridge-Mql

<template #params>

- `result` <span>String</span>,result .

</template>
<!--@include: /partials/authorization.md-->

<template #code>

```bash

  ws://api.trader4.net/bridge-mql
    -d '{
          "result" : "45.9"
    }
  }'
```

</template>

</CodeBox>


