---
title: "Images"
description:
date: 2021-06-16T16:36:38-04:00
weight: 4
draft: false
tags:
    - shortcode
    - images
---

A shortcode that will place a image in the bootstrap framework.

## Examples

### Standard

This will display the image that is provided in the path

{{< img path="/images/sample.png" width="200" height="200" >}}

```perl
{{</* img path="/images/sample.png" */>}}
```

### With Size

You can add the width and height to display the image at

{{< img path="/images/sample.png" width="300" height="300" >}}

```perl
{{</* img path="/images/sample.png" width="300" height="300" */>}}
```

### Alignment

#### Right

{{< img path="/images/sample.png" width="200" height="200" class="float-end" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id fermentum ligula, quis volutpat dolor. Aliquam erat volutpat. Integer sed urna ac quam sagittis interdum. Donec suscipit, odio quis congue viverra, nibh ipsum mattis felis, et pellentesque lectus libero ac ligula. Quisque vel tortor feugiat, consequat purus nec, viverra tellus. Aliquam mattis molestie pretium. Aliquam sed sapien ac orci posuere pretium a in sem. Aenean varius justo nec convallis sodales. Nulla vel velit nec nisi ullamcorper fermentum. Aenean eu nunc lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

{{< clearfix >}}

```perl
{{</* img path="/images/sample.png" class="float-end" */>}}
```

#### Left

{{< img path="/images/sample.png" width="200" height="200" class="float-start" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id fermentum ligula, quis volutpat dolor. Aliquam erat volutpat. Integer sed urna ac quam sagittis interdum. Donec suscipit, odio quis congue viverra, nibh ipsum mattis felis, et pellentesque lectus libero ac ligula. Quisque vel tortor feugiat, consequat purus nec, viverra tellus. Aliquam mattis molestie pretium. Aliquam sed sapien ac orci posuere pretium a in sem. Aenean varius justo nec convallis sodales. Nulla vel velit nec nisi ullamcorper fermentum. Aenean eu nunc lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

{{< clearfix >}}

```perl
{{</* img path="/images/sample.png" class="float-end" */>}}
```

#### Center

{{< img path="/images/sample.png" width="200" height="200" class="mx-auto d-block" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id fermentum ligula, quis volutpat dolor. Aliquam erat volutpat. Integer sed urna ac quam sagittis interdum. Donec suscipit, odio quis congue viverra, nibh ipsum mattis felis, et pellentesque lectus libero ac ligula. Quisque vel tortor feugiat, consequat purus nec, viverra tellus. Aliquam mattis molestie pretium. Aliquam sed sapien ac orci posuere pretium a in sem. Aenean varius justo nec convallis sodales. Nulla vel velit nec nisi ullamcorper fermentum. Aenean eu nunc lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

{{< clearfix >}}

```perl
{{</* img path="/images/sample.png" class="mx-auto d-block" */>}}
```

### Thumbnail

Adding the thumb flag to the image will added a boarder and when clicked will open a larger preview of the image on the  page.

{{< img path="/images/sample.png" width="200" height="200" thumb=true title="Image Title" >}}

```perl
{{</* img path="/images/sample.png" thumb=true title="Image Title" */>}}
```


## Options

{{% table tableClass="" headerClass="table-secondary" %}}
| Option | Type |  Default Value | Description |
|---|---|---|---|
| path   | String  | A place holder image | The path to the image you wish to display |
| class  | String  | "img-fluid"          | Specify any classes you wish to add to the image |
| width  | String  | ""                   | Set the width of the image |
| height | String  | ""                   | Set the height of the image |
| thumb  | boolean | false                | show as a thumbnail |
| title  | String  | ""    | the title to be shown on the preview of the image .. also added as an alt text |
{{% /table %}}