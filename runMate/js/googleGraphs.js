 // Load the Visualization API and the corechart package.
var arrayAktivitet = [];
var cykelArray=[];
var arrayAktivitet2 = [];
var lobeArray=[];
var arrayAktivitet3 = [];
var gaaArray=[];
$(document).ready(function () {
                // Sending data from the client via AJAX
                            //CYKEL DATA
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykel/" + localStorage.getItem("user"),
                    success: function (data) {
                        console.log(data);
                        $('body').append('Response from the Java web server:<br>' +
                                    data);

                        // Possible use of the data
                        arrayAktivitet = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<arrayAktivitet.length;i++){
                        	console.log( i , arrayAktivitet[i]);
                        }
                        console.log(arrayAktivitet.toString());
                        
                        for (var i=0;i<arrayAktivitet.length;i++){
                            if (i % 2 !== 0) { 
                        	cykelArray.push(arrayAktivitet[i]);}
                        }
                        console.log("hej1");
                        console.log(cykelArray.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
                            //LØBE DATA
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_lob/" + localStorage.getItem("user"),
                    success: function (data) {
                        console.log(data);
                        $('body').append('Response from the Java web server:<br>' +
                                    data);

                        // Possible use of the data
                        arrayAktivitet2 = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<arrayAktivitet2.length;i++){
                        	console.log( i , arrayAktivitet2[i]);
                        }
                        console.log(arrayAktivitet2.toString());
                        
                        for (var i=0;i<arrayAktivitet2.length;i++){
                            if (i % 2 !== 0) { 
                        	lobeArray.push(arrayAktivitet2[i]);}
                        }
                        console.log("hej2");
                        console.log(lobeArray.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
                            //GÅ DATA
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_gaa/" + localStorage.getItem("user"),
                    success: function (data) {
                        console.log(data);
                        $('body').append('Response from the Java web server:<br>' +
                                    data);

                        // Possible use of the data
                        arrayAktivitet3 = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<arrayAktivitet3.length;i++){
                        	console.log( i , arrayAktivitet3[i]);
                        }
                        console.log(arrayAktivitet3.toString());
                        
                        for (var i=0;i<arrayAktivitet3.length;i++){
                            if (i % 2 !== 0) { 
                        	gaaArray.push(arrayAktivitet3[i]);}
                        }
                        console.log("hej3");
                        console.log(gaaArray.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
            });
      google.charts.load('current', {'packages':['corechart']});
        google.charts.load('current', {'packages':['table']});
google.charts.load('current', {'packages':['columnchart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);

//console.log("this is arraySktivitet:"+ strinArray.toString());
    
        
        //var løbKm = [1, 2, 11];
        //var cykelKm = [1,20];
        //var gaaKm = [1, 7];
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        
        var lobeSum = 0;
        for (i=0; i<lobeArray.length; i++)
            {
                var lobeInt = parseInt("" + lobeArray[i]);
                lobeSum += lobeInt;
            }
        var j;
        var cykelSum = 0;
        for (j=0; j<cykelArray.length; j++)
            {
                var cykelInt = parseInt("" + cykelArray[j]);
                cykelSum += cykelInt;
            }
        var h;
        var gaaSum = 0;
        for (h=0; h<gaaArray.length; h++)
            {
                var gaaInt = parseInt("" + gaaArray[h]);
                gaaSum += gaaInt;
            }
          
        data.addColumn('string', 'Aktivitet');
        data.addColumn('number', 'Længde');
        data.addRows([
          ['Løb', lobeSum],
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
        //var data 1 = new google.visualization.DataTable();
        
        arrayAktivitet = new google.visualization.DataTable();
        arrayAktivitet.addColumn('number', 'Uge');
        arrayAktivitet.addColumn('number', 'Længde');
        arrayAktivitet.addColumn('number', 'Mål')
        arrayAktivitet.addColumn('boolean', 'Personligt mål nået');
        for (var i = 0; i < cykelArray.length; i++){
            arrayAktivitet.addRows([[i, {f: '' + cykelArray[i] + ' KM'}, 5, true], ])
        }
        /*arrayAktivitet.addRows([
          [1,  {f: strinArray[3]}, 5, true],
          [2,   {f: '8 KM'}, 10,  false],
          [3, {f: '10 KM'}, 10, true],
          [4,   {f: '7 KM'}, 5,  true],
          [5, {f: '12 KM'}, 10, true],
          [6,   {f: '7 KM'}, 5,  true]
        ]);*/
         
         var options2 = {
         width:'400',
         height:'400'
        };

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(arrayAktivitet, options2);
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