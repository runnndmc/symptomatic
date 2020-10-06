# Symptomatic README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Symptomatic** is a symptoms tracker app helping you to mark your symptoms, wthen they occurred and the pain level, all in one place. Symptomatic will provide a marked calendar with how often you felt the symptom and a cummulative count of each symptom to show you what you should be talking to your doctor about. 

<br>

### MVP Goals

- _Create a full-stack application that utilizes user authentication_
- _Allow the user to create a new symptom_
- _Be able to put a note with the symptom and edit it_
- _See each symptom as a color on a calendar_


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Symptomatic main front-end library._ |
|     Ruby on Rails      | _To create the backend database._ |
|   React Router   | _For front-end routing._ |
| Axios | _To make HTTP requests._ |


<br>



#### Wireframes


[Symptomatic Wireframe](https://whimsical.com/FFd9ZV7DhQ84C962p2smtu)





#### Component Hierarchy 

``` structure

src
|__ components/
      |__ Graph.jsx. -- reuseable
      |__ Calendar.jsx 
      |__ SymptomCard.jsx
      |__ Pain.jsx 
      |__ SymptomSummary.jsx 
|__ containers/
      |__ MainContainer.jsx
|__ shared/
      |__ Layout.jsx
      |__ Header.jsx
      |__ Footer.jsx
|__ screens/
      |__ Register.jsx
      |__ Login.jsx
      |__ Home.jsx 
      |__ MySymptoms.jsx
      |__ Calendar.jsx
      |__ AddSymptom.jsx
      |__ Symptom.jsx
      |__ CalendarDetail.jsx
      

```

#### Component Breakdown
 

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo - it will direct the user Home._               |
|  HeaderTable  | functional |   y   |   n   | _The header table will provide a number of movies, reviews and the highest rating._       |
|   MovieCard    |   functional    |   y   |   y   | _Users will be able to see a preview of what movies have been watched  _      |
| Sort | functional |   y   |   n   | _ Have the ability to sort through the movies that are posted and look for the most recently viewed._                 |
|    RatingBubbles    | functional |   y   |   n   | _Have the user be able to click on how many starts they think the movie deserves._ |
|    CreateForm    | functional |   y   |   y   | _Give the user the ability to create a new review or a movie for the site._ |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend models    |    H     |     1 hr      |   1   hrs     |   3hr     |

| TOTAL               |          |     - hrs      |    -hrs     |     -hrs   |

<br>

### Server (Back End)

#### ERD Model

![ERD image](symptomaticERD.png)
>
<br>

***

## Post-MVP

- _Have a total count of each symptom on a graph_
- _Be able to select level of pain a pain chart_
- _Have the faces on the pain chart animated_

***

## Code Showcase
- _Yet to come! 

``` structure


```
## Code Issues & Resolutions

- _Yet to come! 
