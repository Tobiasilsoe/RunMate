 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
        google.charts.load('current', {'packages':['table']});
google.charts.load('current', {'packages':['columnchart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
    
        
        var løbKm = [1];
        var cykelKm = [1];
        var gaaKm = [1];
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        
        var i;
        var løbSum = 0;
        for (i=0; i<løbKm.length; i++)
            {
                løbSum += løbKm[i];
            }
        var j;
        var cykelSum = 0;
        for (j=0; j<cykelKm.length; j++)
            {
                cykelSum += cykelKm[j];
            }
        var h;
        var gaaSum = 0;
        for (h=0; h<gaaKm.length; h++)
            {
                gaaSum += gaaKm[h];
            }
          
        data.addColumn('string', 'Aktivitet');
        data.addColumn('number', 'Længde');
        data.addRows([
          ['Løb', løbSum],
          ['Gå', gaaSum],
          ['Cykel', cykelSum],
        ]);
          

        // Set chart options
          var options = {
              title:'Din fordeling i km',
              width:'350',
              height:'400'
          }
        

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


     function drawTable() {
        var data1 = new google.visualization.DataTable();
        data1.addColumn('number', 'Uge');
        data1.addColumn('number', 'Længde');
        data1.addColumn('number', 'Mål')
        data1.addColumn('boolean', 'Personligt mål nået');
        data1.addRows([
          [1,  {f: '10 KM'}, 8, true],
          [2,   {f: '8 KM'}, 10,  false],
          [3, {f: '10 KM'}, 10, true],
          [4,   {f: '7 KM'}, 5,  true],
          [5, {f: '12 KM'}, 10, true],
          [6,   {f: '7 KM'}, 5,  true]
        ]);
         
         var options2 = {
         width:'400',
         height:'400'
        };

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data1, options2);
      }


      function drawChart3() {
        var data3 = google.visualization.arrayToDataTable([
          ['Uge', 'Længde', 'Mål'],
          ['1',  10,      4],
          ['2',  11,      4],
          ['3',  6,       11],
          ['4',  10,      5],
          ['5',  6,       11],
          ['6',  10,      5]
        ]);

        var options3 = {
          title: 'Distance løbet',
          curveType: 'function',
          width:'400',
          height:'400',
          legend: { position: 'bottom' }
        };

        var chart3 = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart3.draw(data3, options3);
      }
function drawChart4() {
var data4 = google.visualization.arrayToDataTable([
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ]);

      var options4 = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      }
        var chart4 = new google.visualization.ColumnChart(document.getElementById('stack_chart'));

        chart4.draw(data4, options4);
      
      };