# Team Profile Generator [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)  
  ##Table of Contents
  - [About The Project](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributing)
  - [License](#License)
  - [Questions](#Questions)

  ## Description  
  This application takes employee informaiton from the command line and uses it to generate a HTML website to display it. To accomplish this, inquirer was used to gather the information and javascript to generate the webpage. Jest was used to create and run tests.

  The exact acceptance criteria are as follows: 
  ```md
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for my team members and their information
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  WHEN I click on an email address in the HTML
  THEN my default email program opens and populates the TO field of the email with the address
  WHEN I click on the GitHub username
  THEN that GitHub profile opens in a new tab
  WHEN I start the application
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  WHEN I enter the team manager’s name, employee ID, email address, and office number
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  WHEN I select the engineer option
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  WHEN I select the intern option
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  WHEN I decide to finish building my team
  THEN I exit the application, and the HTML is generated
  ```

  ## Installation  
  ```
  npm i
  ```

  ## Usage  
  node index.js.    

  ## Contributing  
  Do what you want man  

  ## License    
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.  
  
  ## Tests  
  ```
  npm run test
  ```

  ## Questions  
  Have any questions? Feel free to reach out at:  
  [github](https://github.com/Squid300)  
  or email me at:  
  squid400@gmail.com
