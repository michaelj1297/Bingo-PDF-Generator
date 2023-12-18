# About The Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application was created for the sole purpose of generating Bingo Cards in the form of PDF documents for a specific event, of which I was acquainted with the organizer.

Currently there are two versions, existing in the two branches version1 and version2. 
+ **[Version1](/../Version1/) branch** - contains the application in the state in which it was initially utilised. 
+ **[Version2](/../Version2/) branch** - contains an updated version of the application which has been updated to a more useable version that enhances user-friendliness and offers greater flexibility.

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

# How to access

For your convenience the `build` folder was included in the repository, and as of right now this project is accessible via this [link](https://michaelj1297.github.io). 