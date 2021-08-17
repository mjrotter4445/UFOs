// from data.js - all provided 
const tableData = data;

// get table references - from 11.5.2
var tbody = d3.select("tbody");
///////////////////////////////////////////////////////////////////////////buildTable function
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
///////////////////////////////////////////////////////////////////////////var filters 
// 1. Create a variable to keep track of all the filters as an object - my entry
var filters = {}

///////////////////////////////////////////////////////////////////////////updateFilters function
// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
     if(elementValue) {
        filters[filterId] = elementValue;
    }
    else {
    delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table - provided 
    filterTable();
  
  }
///////////////////////////////////////////////////////////////////////////////filterTable function
  // 7. Use this function to filter the table when data is entered-provided
  function filterTable() {
  
    // 8. Set the filtered data to the tableData -  my entry, pretty sure.
    var filteredTable = tableData;
  
    // 9. Loop through all of the filters and keep any data that matches the filter values

    //NEED HELP HERE 
  
    // 10. Finally, rebuild the table using the filtered data
      buildTable(filteredTable);  
  }
  
  // 2. Attach an event to listen for changes to each filter
    //maybe?    d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads - provided 
  buildTable(tableData);
