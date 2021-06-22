---
title: "Tables"
description:
date: 2021-06-17T11:02:26-04:00
weight: 6
draft: false
tags: 
    - table 
    - shortcode 
---

This is a shortode that will alow you to override the default table theme based on classes in the [bootstrap](https://getbootstrap.com/docs/5.0/content/tables/) theme

## Default

### Preview

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

## Variants

### Preview

{{% table tableClass="table-primary" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
{{% /table %}}
{{% table tableClass="table-secondary" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-success" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-danger" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-warning" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-info" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-light" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}
{{% table tableClass="table-dark" headerClass="" %}}
| Col1 Name | Col2 Name|  Col3 Name | Col4 Name |
|---|---|---|---|
| Value 1A | Value 2A | Value 3A | Value 4A |
{{% /table %}}

### Code