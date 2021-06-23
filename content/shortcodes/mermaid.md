---
title: "Mermaid"
description:
date: 2021-06-16T16:30:44-04:00
weight: 4
draft: false
tags:
---

Mermaid lets you create diagrams and visualizations using text and code.

It is a Javascript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.


## Usage

To add a mermaid graph to you page you will use the follosing basic template

```perl
{{</* mermaid align="left" */>}}
    And you place the graph code here
{{</* /mermaid */>}}
```

Align can be set to either ```left``` or ```right``` otherwise it will be set to center

## Graph Types

### Flowchart

All Flowcharts are composed of nodes, the geometric shapes and edges, the arrows or lines. The mermaid code defines the way that these nodes and edges are made and interact.

It can also accomodate different arrow types, multi directional arrows, and linking to and from subgraphs.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/flowchart?id=flowcharts-basic-syntax)

#### Example 

{{< mermaid align="left" >}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{</* /mermaid */>}}
```


### Sequence diagram

A Sequence diagram is an interaction diagram that shows how processes operate with one another and in what order.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)'

#### Example 

{{< mermaid align="left" >}}
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
{{</* /mermaid */>}}
```


### Gantt diagrams

A Gantt chart is a type of bar chart, first developed by Karol Adamiecki in 1896, and independently by Henry Gantt in the 1910s, that illustrates a project schedule and the amount of time it would take for any one project to finish. Gantt charts illustrate number of days between the start and finish dates of the terminal elements and summary elements of a project.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/gantt)'

#### Example 

{{< mermaid align="left" >}}
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
{{</* /mermaid */>}}
```

### Class diagrams

In software engineering, a class diagram in the Unified Modeling Language (UML) is a type of static structure diagram that describes the structure of a system by showing the system's classes, their attributes, operations (or methods), and the relationships among objects

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/classDiagram)

#### Example 

{{< mermaid align="left" >}}
classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
{{</* /mermaid */>}}
```


### Git graph

Shows a graph to imagin a git flow


#### Example 

{{< mermaid align="left" >}}
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{{</* /mermaid */>}}
```



### Entity Relationship Diagrams

An entity–relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types).

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram)

#### Example 

{{< mermaid align="left" >}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{</* /mermaid */>}}
```

### User Journey Diagram

User journeys describe at a high level of detail exactly what steps different users take to complete a specific task within a system, application or website. This technique shows the current (as-is) user workflow, and reveals areas of improvement for the to-be workflow.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/user-journey)

#### Example 

{{< mermaid align="left" >}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
{{</* /mermaid */>}}
```




### State diagrams

A state diagram is a type of diagram used in computer science and related fields to describe the behavior of systems. State diagrams require that the system described is composed of a finite number of states; sometimes, this is indeed the case, while at other times this is a reasonable abstraction.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/stateDiagram)

#### Example 

{{< mermaid align="left" >}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{</* /mermaid */>}}
```

### Pie Chart

A pie chart (or a circle chart) is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents. While it is named for its resemblance to a pie which has been sliced, there are variations on the way it can be presented. The earliest known pie chart is generally credited to William Playfair's Statistical Breviary of 1801

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/pie)

#### Example 

{{< mermaid align="left" >}}
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{</* /mermaid */>}}
```

### Requirement Diagram

A Requirement diagram provides a visualization for requirements and their connections, to each other and other documented elements. The modeling specs follow those defined by SysML v1.6.

For the docs on how to make this graph is [here](https://mermaid-js.github.io/mermaid/#/requirementDiagram)

#### Example 

{{< mermaid align="left" >}}
requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req
{{< /mermaid >}}

```perl
{{</* mermaid align="left" */>}}
requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req
{{</* /mermaid */>}}
```











