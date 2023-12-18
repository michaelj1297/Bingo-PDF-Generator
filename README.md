# About The Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application was created for the sole purpose of generating Bingo Cards in the form of PDF documents for a specific event, of which I was acquainted with the organizer.

Currently there are two versions, existing in the two branches version1 and version2. 
+ *[Version1](/../Version1/) branch* - will contain the application in the state in which it was initially utilised. 
+ *[Version2](/../Version2/) branch* - Ver
## Project Criteria

The request was uniquely generated Bingo Cards in the form of a printable PDF document. The following outlines the major criterias for this request:

+ The PDF documents must be generated within a certain timeframe. 
+ It was prefered that the PDF included the name of the event. 
+ Color was not a priority as they would have been printed in Black and White.
+ Each card must have a unique Card number. 
+ At least x amount of cards should be generated without any extra cost. (This was important because, while there are several Bingo Card Generaters out there, many of them come with a cost.)
+ The solution should facilitate the ability to supply more cards with unique Card numbers which do not conflict with previously generated cards. 
    ***This criteria was introduced later on when it was determined that more cards were needed. This was facilitated by introducing a Batch Number aspect, however it relied on user input.***


## Project Timeframe

The timeframe for the project was one - two days, within which several options were explored to fit the required criteria. 

# About the Solution

## Technologies Utilised

+ Integrated Development Environment (IDE) -  [Visual Studio Code](https://code.visualstudio.com/)  
+ Major Javascript Libraries Used -  
    1. [ReactJS](https://react.dev/)
    1. [Bootstrap](https://getbootstrap.com/)
    1. [jsPDF](https://github.com/parallax/jsPDF)
    1. [html2canvas](https://html2canvas.hertzen.com/)

## To Note:

It is important to ***note*** that due to the constraining timeframe with a high possibility that I, the developer, will be the only person interacting with the solution, the application was not properly optimized, and proper testing was not fully conducted. However, testing was conducted to ensure that the criteria were succeffully fulfilled.    

## Future Plans

As of right now, there are no immediate plans but in the future, this project may be revisited, optimized and put into production(most likely hosted on GitHub). 

# How to use

For your convenience the `build` folder was included in the repository, and as of right now this project is [hosted](https://michaelj1297.github.io).