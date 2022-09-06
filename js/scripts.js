// console.log("The script is linked");



// getData();


async function getData(){

    xlabelData = []
    ylabelData = []
    // fetch data from csv
    const response = await fetch('test.csv');
    // convert it to understandable text formart 
    const data = await response.text()
  
    // split the data into columns and remove the first 2 lines
    const header = data.split("\n")[0];
    const table = data.split('\n').slice(2)

    // loop throgh the table data
    console.log('--',header);
    table.forEach(row => {
        // extract the columns
        const columns = row.split(',').slice(0,2)


        // extract the rows years and global temp
        const year = row.split(',')[0]
        xlabelData.push(year)
        const temp = row.split(',')[1]
        // add the global mean temperature of 14
        ylabelData.push(parseFloat(temp)+14)
    })
    return {header, xlabelData, ylabelData}
}
// creating the charts

const createChart = async function (){
      
        const data = await getData()
        const chartCanvas = document.getElementById('charts')
        const myChart = new Chart(chartCanvas, {
          type: "line",
          data: {
            labels: data.xlabelData,
            datasets: [
              {
                label: data.header,
                data: data.ylabelData,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
                fill: true
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
              },
            },
          },
        });

}

createChart();