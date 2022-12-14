
$.ajax({
  url: "http://localhost/Lafayi/controllers/chartsdata/healthdata.php",
  method: "GET",
  success: function (data) {
    var data = $.parseJSON(data)
    var healthCondition = [];
    var numberOfSubscribers = [];

    for (var i in data) {
      healthCondition.push(data[i].healthcondition);
      numberOfSubscribers.push(data[i].freq);
    }
    console.log(numberOfSubscribers);

    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];

    var chartdata = {
      labels: healthCondition,
      datasets: [
        {
          label: 'Number of Subscribers',
          backgroundColor: barColors,
          borderColor: barColors,
          hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
          hoverBorderColor: 'rgba(200, 200, 200, 1)',
          data: numberOfSubscribers,

        }
      ]
    };

    var healthchart = $("#myhealthcanvas");

    var barGraph = new Chart(healthchart, {
      type: 'bar',
      data: chartdata,
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Disease'
            }
          }],

          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Number of Subscribers'
            }
          }]
        }
      }
    });
  },
  error: function (data) {
    console.log(data);
  }
});
