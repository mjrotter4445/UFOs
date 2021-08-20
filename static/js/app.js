// from data.js - all provided 
const tableData = data;

// get table references - from 11.5.2
const tbody = d3.select("tbody");
///////////////////////////////////////////////////////////////////////////buildTable function
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    const row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      const cell = row.append("td");
      cell.text(val);
    });
  });
}
///////////////////////////////////////////////////////////////////////////var filters 
// 1. Create a variable to keep track of all the filters as an object - my entry
const filters = {};

///////////////////////////////////////////////////////////////////////////updateFilters function
// 3. Use this function to update the filters. Use let because used in this code block - in hint

function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    const changedElement = d3.select(this);
    
    // 4b. Save the value that was changed as a variable.
    const elementValue = changedElement.property("value");
    //console.log(elementValue);
    
    // 4c. Save the id of the filter that was changed as a variable.
    const filterId = changedElement.attr("id");
    //console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object-from Jacob and Justin worktime
     if(elementValue.trim()) {
        filters[filterId] = elementValue;
    }
    else {
    delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table - provided 
    filterTable();
  
  }

///////////////////////////////////////////////////////////////////////////////filterTable function
  // 7. Use this function to filter, called filterTable(), the table when data is entered-provided
  function filterTable() {
  
    // 8. Set the filteredTable data to the tableData -  my entry, pretty sure. confirmed
    var filteredTable = tableData;
  
    // 9. Loop through all of the filters and keep any data that matches the filter values
    //NEED HELP HERE pretty please 

    let filterDataOnly = Object.entries(filters);
    console.log(filters);
    console.log(filterDataOnly);
    for (let [idKey, elValue] of filterDataOnly) {
      filteredTable = filteredTable.filter(row => row[idKey] === elValue)
      //console.log(idKey, elValue)
    }

    // 10. Finally, rebuild the table using the filtered data - 90% sure 
      buildTable(filteredTable);  
  }
  
  // 2.Attach an event to listen for changes to each filter-update all the data in UpdateFilters above-maybe right 80%
  //d3.select("#filter-button").on("click", updateFilters);

  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads - provided 
  buildTable(tableData);
