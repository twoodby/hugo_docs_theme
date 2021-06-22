---
title: "Alerts"
description:
date: 2021-06-16T16:33:52-04:00
weight: 1
draft: false
tags:
    - shortcode
    - alerts
    - notes
---

A Shortcode that will display an alert. Alerts are great to notifiy the reader about something very important.

## Examples

### Note

{{% alert type="note" title="" %}}Note Message{{% /alert %}}

### Info

{{% alert type="info" title="" %}}Info Message{{% /alert %}}

### Tip

{{% alert type="tip" title="" %}}Tip Message{{% /alert %}}

### Warning

{{% alert type="warning" title="" %}}Warning Message{{% /alert %}}

### Large Title

{{% alert type="note" title="Sample Title" large=true %}}Warning Message{{% /alert %}}


## Code

```perl
{{%/* alert type="note" title="Sample Title" large=true %}}Warning Message{{% /alert */%}}
```


## Options

{{% table tableClass="" headerClass="table-secondary" %}}
| Option | Type |  Default Value | Description |
|---|---|---|---|
| type  | String | note | tell it what type of note to show (note, info, tip, warning ) |
| title | String | type spacific title | This will override the default title for each type (note, info, tip, warning ) |
| large | boolean | false | if passed it will show as a large title |
{{% /table %}}
