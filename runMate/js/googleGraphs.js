/*var table = {};
table['cycle'] = [];
//table['cycle'].push(1,2,3,4);
console.log( table['cycle'] );
table['running'] = [];
table['running'].push(10,20,30,40,50);
console.log( table['running'] ); 
console.log( table['running'].length );*/

// Load the Visualization API and the corechart package.

var table = {};
table['cykle'] = [];
    cykle = table['cykle'];
table['arrayAktivitetCykel']= [];
    aktiviCykel = table['arrayAktivitetCykel'];
table['lobe'] = [];
    lobe=table['lobe'];
table['arrayAktivitetLobe']= [];
    aktiviLobe=table['arrayAktivitetLobe'];
table['gaa'] = [];
    gaa=table['gaa'];
table['arrayAktivitetGaa']= [];
    aktiviGaa = table['arrayAktivitetGaa'];
table['grpCykel'] = [];
    grpCykel = table['grpCykel'];
table['grpArrayAktivitetCykel']= [];
    grpAktiviCykel = table['grpArrayAktivitetCykel']= [];
table['grpLobe'] = [];
    grpLobe = table['grpLobe'] = [];
table['grpArrayAktivitetLobe']= [];
    grpAktiviLobe = table['grpArrayAktivitetLobe']= [];
table['grpGaa'] = [];
    grpGaa = table['grpGaa'];
table['grpArrayAktivitetGaa']= [];
    grpAktiviGaa = table['grpArrayAktivitetGaa']= [];


/*
function display(t,activity){
    for (var i=0;i<t[activity].length;i++)
        console.log( t[activity][i] );
}
display( table, 'cykle');
display( table, 'lobe');
*/

$(document).ready(function () {
                // Sending data from the client via AJAX
    
                            //CYKEL DATA
    function smartRecursion2(){
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykel/" + localStorage.getItem("user"),
                    success: function (data) {
                        console.log(data);

                        // Possible use of the data
                       aktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<aktiviCykel.length;i++){
                        	console.log( i , aktiviCykel[i]);
                        }
                        
                        for (var i=0;i<aktiviCykel.length;i++){
                            if (i % 2 !== 0) { 
                        	cykle.push(aktiviCykel[i]);}
                        }
   
                        
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

                        // Possible use of the data
                        aktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<aktiviLobe.length;i++){
                        	console.log( i , aktiviLobe[i]);
                        }
                        console.log(aktiviLobe.toString());
                        
                        for (var i=0;i<aktiviLobe.length;i++){
                            if (i % 2 !== 0) { 
                        	lobe.push(aktiviLobe[i]);}
                        }
                        console.log("hej2");
                        console.log(lobe.toString());
                        
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
                        

                        // Possible use of the data
                        aktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<aktiviGaa.length;i++){
                        	console.log( i , aktivigaa[i]);
                        }
                        console.log(aktiviGaa.toString());
                        
                        for (var i=0;i<aktivigaa.length;i++){
                            if (i % 2 !== 0) { 
                        	gaa.push(aktiviGaa[i]);}
                        }
                        console.log("hej3");
                        console.log(gaa.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
    
    $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykelgrp/" + localStorage.getItem("user"),
                    success: function (data) {
                      
                        console.log(data);

                        // Possible use of the data
                        grpAktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<grpAktiviCykel.length;i++){
                        	console.log( i , grpAktiviCykel[i]);
                        }
                        console.log(grpAktiviCykel.toString());
                        
                        for (var i=0;i<grpAktiviCykel.length;i++){
                            if (i % 2 !== 0) { 
                        	grpcykel.push(grpAktiviCykel[i]);}
                        }
                        console.log("hejgrp");
                        console.log(grpCykelArray.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });

$.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_lobgrp/" + localStorage.getItem("user"),
                    success: function (data) {
                       
                        console.log(data);

                        // Possible use of the data
                        grpAktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<grpAktiviLobe.length;i++){
                        	console.log( i , grpAktiviLobe[i]);
                        }
                        console.log(grpAktiviLobe.toString());
                        
                        for (var i=0;i<grpAktiviLobe.length;i++){
                            if (i % 2 !== 0) { 
                        	grpLobe.push(grpAktiviLobe[i]);}
                        }
                        console.log("hejgrp2");
                        console.log(grpLobe.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
$.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_gaagrp/" + localStorage.getItem("user"),
                    success: function (data) {
                        console.log(data);

                        // Possible use of the data
                        grpAktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<grpAktiviGaa.length;i++){
                        	console.log( i , grpAktiviGaa[i]);
                        }
                        console.log(grpAktiviGaa.toString());
                        
                        for (var i=0;i<grpAktiviGaa.length;i++){
                            if (i % 2 !== 0) { 
                        	grpGaa.push(grpAktiviGaa[i]);}
                        }
                        console.log("hejgrp3");
                        console.log(grpGaa.toString());
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
        setTimeout(smartRecursion2,28000);
    }
    smartRecursion2();
            });
      google.charts.load('current', {'packages':['corechart']});
        google.charts.load('current', {'packages':['table']});
google.charts.load('current', {'packages':['columnchart']});

      // Set a callback to run when the Google Visualization API is loaded.
function smartRecursion(){

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
    setTimeout(smartRecursion, 30000);
}
smartRecursion();

//console.log("this is arraySktivitet:"+ strinArray.toString());
    
        
        //var løbKm = [1, 2, 11];
        //var cykelKm = [1,20];
        //var gaaKm = [1, 7];
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
           setTimeout(drawChart, 3000);

        // Create the data table.
        var data = new google.visualization.DataTable();
        
        var lobeSum = 0;
        for (i=0; i<lobe.length; i++)
            {
                var lobeInt = parseInt("" + lobe[i]);
                lobeSum += lobeInt;
            }
        var j;
        var cykelSum = 0;
        for (j=0; j<cykle.length; j++)
            {
                var cykelInt = parseInt("" + cykle[j]);
                cykelSum += cykelInt;
            }
        var h;
        var gaaSum = 0;
        for (h=0; h<gaa.length; h++)
            {
                var gaaInt = parseInt("" + gaa[h]);
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
        
        aktiviCykel = new google.visualization.DataTable();
        aktiviCykel.addColumn('number', 'Uge');
        aktiviCykel.addColumn('number', 'Længde');
        aktiviCykel.addColumn('number', 'Mål')
        aktiviCykel.addColumn('boolean', 'Personligt mål nået');
        for (var i = 0; i < cykle.length; i++){
            aktiviCykel.addRows([[i, {f: '' + cykle[i] + ' KM'}, 5, true], ])
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

        table.draw(aktiviCykel, options2);
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
      
      }

 function drawChart5() {
     setTimeout(drawChart5, 3000);

        // Create the data table.
        var data5 = new google.visualization.DataTable();
        
        var j = 0;
        var cykelSumGrp = 0;
        for (j=0; j<grpCykel.length; j++)
            {
                var cykelGrpInt = parseInt("" + grpCykel[j]);
                cykelSumGrp += cykelGrpInt;
            }
     
        var i = 0;
        var lobSumGrp = 0;
        for (i=0; i<grpLobe.length; i++)
            {
                var lobGrpInt = parseInt("" + grpLobe[i]);
                lobSumGrp += lobGrpInt;
            }
     
        var h = 0;
        var gaaSumGrp = 0;
        for (h=0; h<grpGaa.length; h++)
            {
                var gaaGrpInt = parseInt("" + grpGaa[h]);
                gaaSumGrp += gaaGrpInt;
            }
          
        data5.addColumn('string', 'Aktivitet');
        data5.addColumn('number', 'Længde');
        data5.addRows([
          ['Løb', lobSumGrp],
          ['Gå', gaaSumGrp],
          ['Cykel', cykelSumGrp],
        ]);
          

        // Set chart options
          var options5 = {
              title:'Din gruppes fordeling i km',
              width:'350',
              height:'400'
          }
        

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div5'));
        chart.draw(data5, options5);
      };