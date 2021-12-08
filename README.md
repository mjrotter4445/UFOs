# UFOs
*A JavaScript Interactive web-page*
<p align="center">
   <img width="1000" height="100" src="https://github.com/mjrotter4445/UFOs/blob/main/static/Images/ufooverhead.png">
</p>   

## Project Overview
### Purpose  
The purpose of this project is to build a dynamic web-page that displays UFOs sightings observations information 
for upcoming annual gathering of UFO enthusiasts in McMinnville, Oregon.  There is a lot of data to display so adding 
filters to the table which lets uses refine their search on one of more than one level is absolutely necessary.   

### Background & the Process of Development
In this development, we used **JavaScript** as the primary coding language.  JavaScript is a scripting or
programming language that allows to implement complex features on web pages.  JavaScript is a front end development 
used often to build extra functionality and customization into web pages.  Also used is the following list of resources
and software.   

### Resources
   - The data for the table is stored in a JavaScript array or list named **data.js**.
   - The table is built by inserting **JavaScript** into **HTML** page. *app.py*.
   - **HTML** is used to to build the webpage *index.html*. 
   - **CSS** and **Boostrap** then builds and styles the page *style.css*.  
   - Fire fox Developer Tools are ideal to test the code as we progress through the development.    
   - Further we use a new Dependency named **D3** Library for maximum webpage visualization and styling.  

 ### Results
Raw data from JavaScript array is now displayed in a dynamic table where userrs can filter data
on multiple criteria by **date**, **city**, **country**, and **shape** of the UFO sighting.  Also, 
including, with styling, the user is given an example of how to format their data entry with forward
slashes, etc.. City, state, and country should be entered in lower case.  

<p align="center">
   <img width="1000" height="100" src="https://github.com/mjrotter4445/UFOs/blob/main/static/Images/the%20truthheading.jpg">
</p>   

<p align="center">
   <img width="200" height="300" src="https://github.com/mjrotter4445/UFOs/blob/main/static/Images/DynamicFilterSearch.jpg">
</p>   
<p align="center">
Dynamic multi-filter for user input
</p>

The user types their criteria in multi-filter and then press the enter the table displays
only the rows that match the user input.   From the picutre below we can see the desired 
data.  There is an important tip in using these search fields.  
**The data must be entered in m/dd/yyy format**.  
*Please follow the example above closely*.    

<p align="center">
   <img width="600" height="300" src="https://github.com/mjrotter4445/UFOs/blob/main/static/Images/results.jpg">
</p>   
<p align="center">
New table that displays only the results that matches the user input
</p>

When resetting the filter, the user has 2 choices.  user can either clear
the input manually or deleting input cell by cell or click the refresh button
*UFO Sightings* that can be found at the top left corner of the page.  After 
the filter is cleared, the user can use filter again.    


<p align="center">
   <img width="200" height="175" src="https://github.com/mjrotter4445/UFOs/blob/main/static/Images/howtoreset.png">
</p>   
<p align="center">
Reset filter and refresh page button at the TOP LEFT CORNER of the web-page
</p>

### Summary
### Drawbacks and Opportunities
To build dynamic webpages that accept user inputs and visually adjust to reflect that
interaction require quite a bit of work and patience.   I like the look of this page, 
but it has some limitations in features that could definately be improved:  
 - The **date entry format** could be improved to something more standard like mm/dd/yyyy. 
 This would improve the user experience to something they are more used to using in daily life.  
 - The **reset button location** could be de
 ned to be closer to the filter input box.  It needs to be easier to see 
 and access without scrolling to the top.
      - Exploring the use of and investing in the time to develop **drop-down menus** would be worth it because it will 
      significantly improve the user experience.  
 - The **text case** is awkward to use and could be improved by converting all letters to lower case from user input.  
 For example, Utah could be found if "ut" or "UT" were entered by the user.    
 
 

