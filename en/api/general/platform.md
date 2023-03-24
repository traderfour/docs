---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/platforms">

# List

Using our platform list Method, users are now able to easily retrieve platforms list.

<!--@include: /partials/authorization.md-->

<template #params>

- `title` (optional) <span>String</span>, Filter by platform title.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `sort` (optional) <span>String</span>, sort platforms.
    - sort[title]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/platforms
```

</template>

</CodeBox>

<Response jfile="v1/platform/list" >
<template #result>

- `id` <span>String</span> ID of platform.
- `title` <span>String</span> Title of platform.
- `slug` <span>String</span> Slug of platform.
- `icon` <span>String</span> Icon of platform.
- `cover` <span>String</span> Cover of platform.
- `description` <span>String</span> Description of platform.
- `content` <span>Text</span> Content.
- `url` <span>String</span> URL of platform.
- `email` <span>String</span> Email.
- `privacy_policy` <span>Text</span> privacy policy.
- `terms_of_use` <span>Text</span> terms of use.
- `api_documentation` <span>Text</span> api documentation.
- `address` <span>Text</span> address.
- `permissions` <span>Array of JSON Objects</span> platform permissions.
  - `title` <span>String</span> permission title.
  - `code` <span>Integer</span> permission code.
  - `description` <span>String</span> Description of permission.
- `oss` <span>Array of JSON Objects</span> platform Operating Systems.
  - `title` <span>String</span> OS title.
  - `code` <span>Integer</span> OS code.
  - `file` <span>String</span> OS file URL.
  - `compatibility` <span>String</span> OS compatibility.
  - `license` <span>String</span> OS license type.
  - `website` <span>String</span> OS website URL.
  - `change_log` <span>String</span> OS change log URL.
- `status` <span>Integer</span> The status of platform. Check out [Status Codes](#status-codes).

</template>
</Response>

### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>11600</code> | <pre>ACTIVE</pre>   | The platform is active and have full functionality. |
| <code>11601</code> | <pre>INACTIVE</pre> | The platform is inactive and just can read data.    |
