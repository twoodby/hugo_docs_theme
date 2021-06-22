---
title: "Tables"
description:
date: 2021-06-17T11:02:26-04:00
weight: 5
draft: false
tags: 
    - table 
    - shortcode 
---

This is a shortode that will alow you to override the default table theme based on classes in the [bootstrap](https://getbootstrap.com/docs/5.0/content/tables/) theme

## Example

{{% table tableClass="" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
| Value 1B | Value 2B | Value 3B | Value 4B |
| Value 1C | Value 2C | Value 3C | Value 4C |
{{% /table %}}

### Code

```perl
    {{%/* table tableClass="" headerClass="" */%}}
    | Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
    |---|---|---|---|
    | Value 1A | Value 2A | Value 3A | Value 4A |
    | Value 1B | Value 2B | Value 3B | Value 4B |
    | Value 1C | Value 2C | Value 3C | Value 4C |
    {{%/* /table */%}}
```

## Options

{{% table tableClass="" headerClass="table-secondary" %}}
| Option | Type |  Default Value | Description |
|---|---|---|---|
| tableClass  | String | null | A list of css classes to add to "table" and added to the table |
| headerClass | String | null | A List of css classes to add to the header   |
{{% /table %}}

To get a list of available classes please check the docs here https://getbootstrap.com/docs/5.0/content/tables/