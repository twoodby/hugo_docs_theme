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

_Note about where the files are located_

The files that will be shown are located in a directory along side the md file you add the shortcode to. For example if the md files path is ```/content/shortcodes/attachments.md``` you would create a directory ```/content/shortcodes/attachments.files``` and place the files in there. But if the md file is an **_index.md** file you will need to to name them as so. The file path is ```/content/shortcodes/_index.md``` you would create a directory ```/content/shortcodes/files``` and that is where you would add your needed files.


## Options

{{% table tableClass="" headerClass="table-secondary" %}}
| Option | Type |  Default Value | Description |
|---|---|---|---|
| title   | String | Related Files | The title you wish have displayed |
| pattern | String | .*            | regx pattern for the file names   |
| icon    | String | \<i class='fas fa-paperclip'\>\</i\> | Any html code that will placed before the title to have no icon set this to a space |
{{% /table %}}