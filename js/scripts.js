// console.log("The script is linked");

getData();

async function getData(){
    // fetch data from csv
    const response = await fetch('test.csv');
    // convert it to understandable text formart 
    const data = await response.text()
  
    // split the data into columns and remove the first 2 lines
    const table = data.split('\n').slice(2)

    // loop throgh the table data
    table.forEach(row => {
        // extract the columns
        const columns = row.split(',').slice(0,2)

        // extract the rows first and second
        const year = row.split(',')[0]
        const temp = row.split(',')[1]


       console.log(year, temp);
    })

}