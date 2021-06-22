---
title: "Tabs"
description:
date: 2021-06-16T16:36:43-04:00
weight: 7
draft: false
tags:
    - shortcode
    - tabs
---

A shortcode that will allow you to tab out options such as code in multiple languages.

## Example

{{< tabs groupId="config" >}}
{{% tab name="Java" %}}
```java
class HelloWorld {
    static public void main( String args[] ) {
        System.out.println( "Hello World!" );
    }
}
```
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun main(args : Array<String>) {
    println("Hello, world!")
}
```
{{% /tab %}}
{{% tab name="Go" %}}
```golang
package main

import "fmt"

func main() {
    fmt.Printf("Hello World\n")
}
```
{{% /tab %}}
{{< /tabs >}}

## Code

```perl
    {{/*< tabs groupId="config" >*/}}
    {{/*% tab name="Java" %*/}}
    ```java
    class HelloWorld {
        static public void main( String args[] ) {
            System.out.println( "Hello World!" );
        }
    }
    ```
    {{/*% /tab %*/}}
    {{/*% tab name="Kotlin" %*/}}
    ```kotlin
    fun main(args : Array<String>) {
        println("Hello, world!")
    }
    ```
    {{/*% /tab %*/}}
    {{/*% tab name="Go" %*/}}
    ```golang
    package main

    import "fmt"

    func main() {
        fmt.Printf("Hello World\n")
    }
    ```
    {{/*% /tab %*/}}
    {{/*< /tabs >*/}}
```









