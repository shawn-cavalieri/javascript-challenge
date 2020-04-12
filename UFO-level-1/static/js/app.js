// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

// load data into the table

function loadData(data) {
    tbody.text("")

    data.forEach(function(ufosightings) {
        console.log(ufosightings);
        var row = tbody.append("tr");
        Object.entries(ufosightings).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

loadData(tableData);

// filter table

var filter = d3.select("#filter-btn");

var reset = d3.select("#reset-btn");

filter.on("click", function() {
  
  d3.event.preventDefault();
  var inputDate = d3.select("#datetime").property("value");  
  console.log(inputDate);

  var filteredData = data.filter(bydate => bydate.datetime === inputDate);
  console.log(filteredData)

  filteredData.forEach(function(updated) {
    console.log(updated);
    var row = tbody.append("tr");


    Object.entries(updated).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
});

// reset table
reset.on("click", function() {
    loadData(tableData)
    d3.select("#datetime").property("value", '');
  });