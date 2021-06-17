---
title: "Attachments"
description:
date: 2021-06-16T16:28:54-04:00
weight: 1
draft: false
tags:
    - shortcode
    - files    
---

This shortcode will allow you to add a list of files associated with the current page. These files can be anything and will be shown as a group of links listing all files associated with the page.

## Example

{{% attachments  pattern=".*(txt|mp4)" %}}

## Code

```perl
{{%/*attachments title="Related files" pattern=".*(pdf|mp4)"/*/%}}
```

## Options

{{% table tableClass="" headerClass="table-secondary" %}}
| Title | Options | Description |
|---|---|---|
| title | String | The title you wish have displayed 
{{% /table %}}