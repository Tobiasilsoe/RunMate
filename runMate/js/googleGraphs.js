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

table['datoArrayAktivitetCykel']= [];
    datoAktiviCykel = table['datoArrayAktivitetCykel']= [];
table['datoCykel']= [];
    datoCykel = table['datoCykel']= [];
table['datoArrayAktivitetLobe']= [];
    datoAktiviLobe = table['datoArrayAktivitetLobe']= [];
table['datoLobe']= [];
    datoLobe = table['datoLobe']= [];
table['datoArrayAktivitetGaa']= [];
    datoAktiviGaa = table['datoArrayAktivitetGaa']= [];
table['datoGaa']= [];
    datoGaa = table['datoGaa']= [];

table['grpdatoArrayAktivitetCykel']= [];
    grpdatoAktiviCykel = table['grpdatoArrayAktivitetCykel']= [];
table['grpdatoCykel']= [];
    grpdatoCykel = table['grpdatoCykel']= [];
table['grpdatoArrayAktivitetLobe']= [];
    grpdatoAktiviLobe = table['grpdatoArrayAktivitetLobe']= [];
table['grpdatoLobe']= [];
    grpdatoLobe = table['grpdatoLobe']= [];
table['grpdatoArrayAktivitetGaa']= [];
    grpdatoAktiviGaa = table['grpdatoArrayAktivitetGaa']= [];
table['grpdatoGaa']= [];
    grpdatoGaa = table['grpdatoGaa']= [];

$(document).ready(function () {
                // Sending data from the client via AJAX
    
                            //CYKEL DATA
    function smartRecursion2(){
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykel/" + localStorage.getItem("user"),
                    success: function (data) {
                         cykle = [];
                        

                        // Possible use of the data
                       aktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        
                        for (var i=0;i<aktiviCykel.length;i++){
                            if (i % 2 !== 0) { 
                        	cykle.push(aktiviCykel[i]);}
                            
                        }
   
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
        
        // dato for cykel
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykeldat/" + localStorage.getItem("user"),
                    success: function (data) {
                      
                        datoCykel = [];

                        // Possible use of the data
                       datoAktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                      
                        
                        for (var i=0;i<datoAktiviCykel.length;i++){
                            datoCykel.push(datoAktiviCykel[i]);}                       
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
                // dato for løb
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_lobedat/" + localStorage.getItem("user"),
                    success: function (data) {
                       
                        datoLobe = [];

                        // Possible use of the data
                       datoAktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                      
                        for (var i=0;i<datoAktiviLobe.length;i++){
                            datoLobe.push(datoAktiviLobe[i]);}                       
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
                // dato for gang
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_gaadat/" + localStorage.getItem("user"),
                    success: function (data) {
                        
                        datoGaa = [];

                        // Possible use of the data
                       datoAktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        
                        
                        for (var i=0;i<datoAktiviGaa.length;i++){
                            datoGaa.push(datoAktiviGaa[i]);}                       
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
        
         // dato for gruppecykel
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_grpcykeldat/" + localStorage.getItem("user"),
                    success: function (data) {
                      
                        grpdatoCykel = [];

                        // Possible use of the data
                       grpdatoAktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                      
                        
                        for (var i=0;i<grpdatoAktiviCykel.length;i++){
                            grpdatoCykel.push(grpdatoAktiviCykel[i]);} 
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
                // dato for gruppeløb
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_grplobedat/" + localStorage.getItem("user"),
                    success: function (data) {
                      
                        grpdatoLobe = [];

                        // Possible use of the data
                       grpdatoAktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                      
                         console.log(grpdatoAktiviLobe);
                        for (var i=0;i<grpdatoAktiviLobe.length;i++){
                            grpdatoLobe.push(grpdatoAktiviLobe[i]);}     
                    }, 
                    error: function (data) {
                        console.log("error!");
                    },
                });
        
                // dato for gruppe gang
        $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_grpgaadat/" + localStorage.getItem("user"),
                    success: function (data) {
                        
                        grpdatoGaa = [];

                        // Possible use of the data
                       grpdatoAktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                       
                        
                        for (var i=0;i<grpdatoAktiviGaa.length;i++){
                            grpdatoGaa.push(grpdatoAktiviGaa[i]);}                       
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
                       lobe = [];
                       

                        // Possible use of the data
                        aktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                       
                        
                        for (var i=0;i<aktiviLobe.length;i++){
                            if (i % 2 !== 0) { 
                        	lobe.push(aktiviLobe[i]);}
                        }
                        
                        
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
                        gaa = [];
                       
                        

                        // Possible use of the data
                        aktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        
                       
                        
                        for (var i=0;i<aktiviGaa.length;i++){
                            if (i % 2 !== 0) { 
                        	gaa.push(aktiviGaa[i]);}
                        }
                       
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
    
    $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_cykelgrp/" + localStorage.getItem("user"),
                    success: function (data) {
                      grpCykel = [];
                        

                        // Possible use of the data
                        grpAktiviCykel = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        
                        for (var i=0;i<grpAktiviCykel.length;i++){
                            if (i % 2 !== 0) { 
                        	grpCykel.push(grpAktiviCykel[i]);}
                        }
                       
                        
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });

$.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_lobgrp/" + localStorage.getItem("user"),
                    success: function (data) {
                       grpLobe = [];
                       

                        // Possible use of the data
                        grpAktiviLobe = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<grpAktiviLobe.length;i++){
                            if (i % 2 !== 0) { 
                        	grpLobe.push(grpAktiviLobe[i]);}
                        }
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
$.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read_gaagrp/" + localStorage.getItem("user"),
                    success: function (data) {
                        grpGaa = [];
                      

                        // Possible use of the data
                        grpAktiviGaa = data.split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                       
                        
                        for (var i=0;i<grpAktiviGaa.length;i++){
                            if (i % 2 !== 0) { 
                        	grpGaa.push(grpAktiviGaa[i]);}
                        }
                      
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                });
        setTimeout(smartRecursion2,28000);
    }
    smartRecursion2();
            });
      google.charts.load('current', {'packages':['corechart', 'columnchart']});
      // Set a callback to run when the Google Visualization API is loaded.
function smartRecursion(){

google.charts.setOnLoadCallback(drawChart7);
google.charts.setOnLoadCallback(drawChart8);
google.charts.setOnLoadCallback(drawChart6);
    
    setTimeout(smartRecursion, 28000);
}
smartRecursion();


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
startFunctions();

function startFunctions(){
    setTimeout(drawChart7, 7000);
    setTimeout(drawChart8, 8000);
    setTimeout(drawChart6, 9000);
    
}

      /*function drawChart() {
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
          ['Cykel', cykelSum],
          ['Løb', lobeSum],
          ['Gå', gaaSum],
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
      }*/




      
/*
 function drawChart5() {
     

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
          ['Cykel', cykelSumGrp],
          ['Løb', lobSumGrp],
          ['Gå', gaaSumGrp],
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

*/
function drawChart6() {
    var datoCykelSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var datoLobeSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var datoGaaSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};

    for (var i = 0; i < cykle.length; i++){
        if (datoCykel[i] <= 6){
            var datoCykelInt1 = parseInt("" + cykle[i]);
            datoCykelSum.uge1 += datoCykelInt1;
        }
        else if (datoCykel[i] <= 13 && datoCykel[i] >= 7){
            var datoCykelInt2 = parseInt("" + cykle[i]);
            datoCykelSum.uge2 += datoCykelInt2;
        }
        else if (datoCykel[i] <= 20 && datoCykel[i] >= 14){
            var datoCykelInt3 = parseInt("" + cykle[i]);
            datoCykelSum.uge3 += datoCykelInt3;
        }
        else if (datoCykel[i] <= 27 && datoCykel[i] >= 21){
            var datoCykelInt4 = parseInt("" + cykle[i]);
            datoCykelSum.uge4 += datoCykelInt4;
        }
        else if (datoCykel[i] <= 34 && datoCykel[i] >= 28){
            var datoCykelInt5 = parseInt("" + cykle[i]);
            datoCykelSum.uge5 += datoCykelInt5;
        }
        else if (datoCykel[i] <= 41 && datoCykel[i] >= 35){
            var datoCykelInt6 = parseInt("" + cykle[i]);
            datoCykelSum.uge6 += datoCykelInt6;
        }
    }
    
    for (var i = 0; i < gaa.length; i++){
        if (datoGaa[i] <= 6){
            var datoGaaInt1 = parseInt("" + gaa[i]);
            datoGaaSum.uge1 += datoGaaInt1;
        }
        else if (datoGaa[i] <= 13 && datoGaa[i] >= 7){
            var datoGaaInt2 = parseInt("" + gaa[i]);
            datoGaaSum.uge2 += datoGaaInt2;
        }
        else if (datoGaa[i] <= 20 && datoGaa[i] >= 14){
            var datoGaaInt3 = parseInt("" + gaa[i]);
            datoGaaSum.uge3 += datoGaaInt3;
        }
        else if (datoGaa[i] <= 27 && datoGaa[i] >= 21){
            var datoGaaInt4 = parseInt("" + gaa[i]);
            datoGaaSum.uge4 += datoGaaInt4;
        }
        else if (datoGaa[i] <= 34 && datoGaa[i] >= 28){
            var datoGaaInt5 = parseInt("" + gaa[i]);
            datoGaaSum.uge5 += datoGaaInt5;
        }
        else if (datoGaa[i] <= 41 && datoGaa[i] >= 35){
            var datoGaaInt6 = parseInt("" + gaa[i]);
            datoGaaSum.uge6 += datoGaaInt6;
        }
    }
    
    for (var i = 0; i < lobe.length; i++){
        if (datoLobe[i] <= 6){
            var datoLobeInt1 = parseInt("" + lobe[i]);
            datoLobeSum.uge1 += datoLobeInt1;
        }
        else if (datoLobe[i] <= 13 && datoLobe[i] >= 7){
            var datoLobeInt2 = parseInt("" + lobe[i]);
            datoLobeSum.uge2 += datoLobeInt2;
        }
        else if (datoLobe[i] <= 20 && datoLobe[i] >= 14){
            var datoLobeInt3 = parseInt("" + lobe[i]);
            datoLobeSum.uge3 += datoLobeInt3;
        }
        else if (datoLobe[i] <= 27 && datoLobe[i] >= 21){
            var datoLobeInt4 = parseInt("" + lobe[i]);
            datoLobeSum.uge4 += datoLobeInt4;
        }
        else if (datoLobe[i] <= 34 && datoLobe[i] >= 28){
            var datoLobeInt5 = parseInt("" + lobe[i]);
            datoLobeSum.uge5 += datoLobeInt5;
        }
        else if (datoLobe[i] <= 41 && datoLobe[i] >= 35){
            var datoLobeInt6 = parseInt("" + lobe[i]);
            datoLobeSum.uge6 += datoLobeInt6;
        }
    }

    
      var data6 = new google.visualization.DataTable();
      data6.addColumn('timeofday', 'Time of Day');
      data6.addColumn('number', 'Cykel');
      data6.addColumn('number', 'Løb');
    data6.addColumn('number', 'Gå');
    
    
    data6.addRows([
        [{v: [1, 0, 0], f: "Uge 1"}, Number(datoCykelSum.uge1), Number(datoLobeSum.uge1), Number(datoGaaSum.uge1)],
        [{v: [2, 0, 0], f: "Uge 2"}, Number(datoCykelSum.uge2), Number(datoLobeSum.uge2), Number(datoGaaSum.uge2)],
        [{v: [3, 0, 0], f: "Uge 3"}, Number(datoCykelSum.uge3), Number(datoLobeSum.uge3), Number(datoGaaSum.uge3)],
        [{v: [4, 0, 0], f: "Uge 4"}, Number(datoCykelSum.uge4), Number(datoLobeSum.uge4), Number(datoGaaSum.uge4)],
        [{v: [5, 0, 0], f: "Uge 5"}, Number(datoCykelSum.uge5), Number(datoLobeSum.uge5), Number(datoGaaSum.uge5)],
        [{v: [6, 0, 0], f: "Uge 6"}, Number(datoCykelSum.uge6), Number(datoLobeSum.uge6), Number(datoGaaSum.uge6)]
    ]);
    
    options6 = {
        title: 'Motion i løbet af forløbet i km.',
            width:'450',
            height:'450'
        //isStacked: true
    };

      var chart = new google.visualization.ColumnChart(
      document.getElementById('chart_div6'));
      chart.draw(data6, options6);

    }


      

      function drawChart7() {
    var datoCykelSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var datoLobeSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var datoGaaSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};

    for (var i = 0; i < cykle.length; i++){
        if (datoCykel[i] <= 6){
            var datoCykelInt1 = parseInt("" + cykle[i]);
            datoCykelSum.uge1 += datoCykelInt1;
        }
        else if (datoCykel[i] <= 13 && datoCykel[i] >= 7){
            var datoCykelInt2 = parseInt("" + cykle[i]);
            datoCykelSum.uge2 += datoCykelInt2;
        }
        else if (datoCykel[i] <= 20 && datoCykel[i] >= 14){
            var datoCykelInt3 = parseInt("" + cykle[i]);
            datoCykelSum.uge3 += datoCykelInt3;
        }
        else if (datoCykel[i] <= 27 && datoCykel[i] >= 21){
            var datoCykelInt4 = parseInt("" + cykle[i]);
            datoCykelSum.uge4 += datoCykelInt4;
        }
        else if (datoCykel[i] <= 34 && datoCykel[i] >= 28){
            var datoCykelInt5 = parseInt("" + cykle[i]);
            datoCykelSum.uge5 += datoCykelInt5;
        }
        else if (datoCykel[i] <= 41 && datoCykel[i] >= 35){
            var datoCykelInt6 = parseInt("" + cykle[i]);
            datoCykelSum.uge6 += datoCykelInt6;
        }
    }
    
    for (var i = 0; i < gaa.length; i++){
        if (datoGaa[i] <= 6){
            var datoGaaInt1 = parseInt("" + gaa[i]);
            datoGaaSum.uge1 += datoGaaInt1;
        }
        else if (datoGaa[i] <= 13 && datoGaa[i] >= 7){
            var datoGaaInt2 = parseInt("" + gaa[i]);
            datoGaaSum.uge2 += datoGaaInt2;
        }
        else if (datoGaa[i] <= 20 && datoGaa[i] >= 14){
            var datoGaaInt3 = parseInt("" + gaa[i]);
            datoGaaSum.uge3 += datoGaaInt3;
        }
        else if (datoGaa[i] <= 27 && datoGaa[i] >= 21){
            var datoGaaInt4 = parseInt("" + gaa[i]);
            datoGaaSum.uge4 += datoGaaInt4;
        }
        else if (datoGaa[i] <= 34 && datoGaa[i] >= 28){
            var datoGaaInt5 = parseInt("" + gaa[i]);
            datoGaaSum.uge5 += datoGaaInt5;
        }
        else if (datoGaa[i] <= 41 && datoGaa[i] >= 35){
            var datoGaaInt6 = parseInt("" + gaa[i]);
            datoGaaSum.uge6 += datoGaaInt6;
        }
    }
    
    for (var i = 0; i < lobe.length; i++){
        if (datoLobe[i] <= 6){
            var datoLobeInt1 = parseInt("" + lobe[i]);
            datoLobeSum.uge1 += datoLobeInt1;
        }
        else if (datoLobe[i] <= 13 && datoLobe[i] >= 7){
            var datoLobeInt2 = parseInt("" + lobe[i]);
            datoLobeSum.uge2 += datoLobeInt2;
        }
        else if (datoLobe[i] <= 20 && datoLobe[i] >= 14){
            var datoLobeInt3 = parseInt("" + lobe[i]);
            datoLobeSum.uge3 += datoLobeInt3;
        }
        else if (datoLobe[i] <= 27 && datoLobe[i] >= 21){
            var datoLobeInt4 = parseInt("" + lobe[i]);
            datoLobeSum.uge4 += datoLobeInt4;
        }
        else if (datoLobe[i] <= 34 && datoLobe[i] >= 28){
            var datoLobeInt5 = parseInt("" + lobe[i]);
            datoLobeSum.uge5 += datoLobeInt5;
        }
        else if (datoLobe[i] <= 41 && datoLobe[i] >= 35){
            var datoLobeInt6 = parseInt("" + lobe[i]);
            datoLobeSum.uge6 += datoLobeInt6;
        }
    }  
        var data7 = google.visualization.arrayToDataTable([
        ['Uge', 'Cykel', 'Løbe','Gå'],
            
        ['Uge 1', Number(datoCykelSum.uge1), Number(datoLobeSum.uge1), Number(datoGaaSum.uge1)],
        [ 'Uge 2',Number(datoCykelSum.uge1)+Number(datoCykelSum.uge2),Number(datoLobeSum.uge1)+ Number(datoLobeSum.uge2), Number(datoGaaSum.uge1)+Number(datoGaaSum.uge2)],
        [ 'Uge 3',Number(datoCykelSum.uge1)+Number(datoCykelSum.uge2)+Number(datoCykelSum.uge3), Number(datoLobeSum.uge1)+ Number(datoLobeSum.uge2)+Number(datoLobeSum.uge3), Number(datoGaaSum.uge1)+Number(datoGaaSum.uge2)+Number(datoGaaSum.uge3)],
        [ 'Uge 4',Number(datoCykelSum.uge1)+Number(datoCykelSum.uge2)+Number(datoCykelSum.uge3)+Number(datoCykelSum.uge4), Number(datoLobeSum.uge1)+ Number(datoLobeSum.uge2)+Number(datoLobeSum.uge3)+Number(datoLobeSum.uge4), Number(datoGaaSum.uge1)+Number(datoGaaSum.uge2)+Number(datoGaaSum.uge3)+Number(datoGaaSum.uge4)],
        [ 'Uge 5',Number(datoCykelSum.uge1)+Number(datoCykelSum.uge2)+Number(datoCykelSum.uge3)+Number(datoCykelSum.uge4)+Number(datoCykelSum.uge5), Number(datoLobeSum.uge1)+ Number(datoLobeSum.uge2)+Number(datoLobeSum.uge3)+Number(datoLobeSum.uge4)+Number(datoLobeSum.uge5), Number(datoGaaSum.uge1)+Number(datoGaaSum.uge2)+Number(datoGaaSum.uge3)+Number(datoGaaSum.uge4)+Number(datoGaaSum.uge5)],
        [ 'Uge 6',Number(datoCykelSum.uge1)+Number(datoCykelSum.uge2)+Number(datoCykelSum.uge3)+Number(datoCykelSum.uge4)+Number(datoCykelSum.uge5)+Number(datoCykelSum.uge6), Number(datoLobeSum.uge1)+ Number(datoLobeSum.uge2)+Number(datoLobeSum.uge3)+Number(datoLobeSum.uge4)+Number(datoLobeSum.uge5)+Number(datoLobeSum.uge6), Number(datoGaaSum.uge1)+Number(datoGaaSum.uge2)+Number(datoGaaSum.uge3)+Number(datoGaaSum.uge4)+Number(datoGaaSum.uge5)+Number(datoGaaSum.uge6)]
    ]);
        var options7 = {
          title: 'Motion i løbet af forløbet i km.',
            width:'450',
            height:'450',
          curveType: 'function',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div7'));

        chart.draw(data7, options7);
      }

      
 
            
      function drawChart8() {
    var grpdatoCykelSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var grpdatoLobeSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};
    var grpdatoGaaSum = {uge1:0, uge2:0, uge3:0, uge4:0, uge5:0, uge6:0};

    for (var i = 0; i < cykle.length; i++){
        if (grpdatoCykel[i] <= 6){
            var grpdatoCykelInt1 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge1 += grpdatoCykelInt1;
        }
        else if (grpdatoCykel[i] <= 13 && cykle[i] >= 7){
            var grpdatoCykelInt2 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge2 += grpdatoCykelInt2;
        }
        else if (grpdatoCykel[i] <= 20 && grpdatoCykel[i] >= 14){
            var grpdatoCykelInt3 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge3 += grpdatoCykelInt3;
        }
        else if (grpdatoCykel[i] <= 27 && grpdatoCykel[i] >= 21){
            var grpdatoCykelInt4 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge4 += grpdatoCykelInt4;
        }
        else if (grpdatoCykel[i] <= 34 && grpdatoCykel[i] >= 28){
            var grpdatoCykelInt5 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge5 += grpdatoCykelInt5;
        }
        else if (grpdatoCykel[i] <= 41 && grpdatoCykel[i] >= 35){
            var grpdatoCykelInt6 = parseInt("" + grpCykel[i]);
            grpdatoCykelSum.uge6 += grpdatoCykelInt6;
        }
    }
      
    for (var i = 0; i < gaa.length; i++){
        if (grpdatoGaa[i] <= 6){
            var grpdatoGaaInt1 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge1 += grpdatoGaaInt1;
            
        }
        
        else if (grpdatoGaa[i] <= 13 && grpdatoGaa[i] >= 7){
            var grpdatoGaaInt2 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge2 += grpdatoGaaInt2;
           
        }
        else if (grpdatoGaa[i] <= 20 && grpdatoGaa[i] >= 14){
            var grpdatoGaaInt3 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge3 += grpdatoGaaInt3;
            
        }
        else if (grpdatoGaa[i] <= 27 && grpdatoGaa[i] >= 21){
            var grpdatoGaaInt4 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge4 += grpdatoGaaInt4;
            
        }
        else if (grpdatoGaa[i] <= 34 && grpdatoGaa[i] >= 28){
            var grpdatoGaaInt5 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge5 += grpdatoGaaInt5;
           
        }
        else if (grpdatoGaa[i] <= 41 && grpdatoGaa[i] >= 35){
            var grpdatoGaaInt6 = parseInt("" + grpGaa[i]);
            grpdatoGaaSum.uge6 += grpdatoGaaInt6;
            }
    }
          
          
    for (var i = 0; i < lobe.length; i++){
        if (grpdatoLobe[i] <= 6){
            var grpdatoLobeInt1 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge1 += grpdatoLobeInt1;
        }
        else if (grpdatoLobe[i] <= 13 && grpdatoLobe[i] >= 7){
            var grpdatoLobeInt2 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge2 += grpdatoLobeInt2;
        }
        else if (grpdatoLobe[i] <= 20 && grpdatoLobe[i] >= 14){
            var grpdatoLobeInt3 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge3 += grpdatoLobeInt3;
        }
        else if (grpdatoLobe[i] <= 27 && grpdatoLobe[i] >= 21){
            var grpdatoLobeInt4 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge4 += grpdatoLobeInt4;
        }
        else if (grpdatoLobe[i] <= 34 && grpdatoLobe[i] >= 28){
            var grpdatoLobeInt5 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge5 += grpdatoLobeInt5;
        }
        else if (grpdatoLobe[i] <= 41 && grpdatoLobe[i] >= 35){
            var grpdatoLobeInt6 = parseInt("" + grpLobe[i]);
            grpdatoLobeSum.uge6 += grpdatoLobeInt6;
        }
    }  
          
        var data8 = google.visualization.arrayToDataTable([
        ['Uge', 'Cykel', 'Løbe','Gå'],
            
        ['Uge 1', Number(grpdatoCykelSum.uge1), Number(grpdatoLobeSum.uge1), Number(grpdatoGaaSum.uge1)],
        [ 'Uge 2',Number(grpdatoCykelSum.uge1)+Number(grpdatoCykelSum.uge2),Number(grpdatoLobeSum.uge1)+ Number(grpdatoLobeSum.uge2), Number(grpdatoGaaSum.uge1)+Number(grpdatoGaaSum.uge2)],
        [ 'Uge 3',Number(grpdatoCykelSum.uge1)+Number(grpdatoCykelSum.uge2)+Number(grpdatoCykelSum.uge3), Number(grpdatoLobeSum.uge1)+ Number(grpdatoLobeSum.uge2)+Number(grpdatoLobeSum.uge3), Number(grpdatoGaaSum.uge1)+Number(grpdatoGaaSum.uge2)+Number(grpdatoGaaSum.uge3)],
        [ 'Uge 4',Number(grpdatoCykelSum.uge1)+Number(grpdatoCykelSum.uge2)+Number(grpdatoCykelSum.uge3)+Number(grpdatoCykelSum.uge4), Number(grpdatoLobeSum.uge1)+ Number(grpdatoLobeSum.uge2)+Number(grpdatoLobeSum.uge3)+Number(grpdatoLobeSum.uge4), Number(grpdatoGaaSum.uge1)+Number(grpdatoGaaSum.uge2)+Number(grpdatoGaaSum.uge3)+Number(grpdatoGaaSum.uge4)],
        [ 'Uge 5',Number(grpdatoCykelSum.uge1)+Number(grpdatoCykelSum.uge2)+Number(grpdatoCykelSum.uge3)+Number(grpdatoCykelSum.uge4)+Number(grpdatoCykelSum.uge5), Number(grpdatoLobeSum.uge1)+ Number(grpdatoLobeSum.uge2)+Number(grpdatoLobeSum.uge3)+Number(grpdatoLobeSum.uge4)+Number(grpdatoLobeSum.uge5), Number(grpdatoGaaSum.uge1)+Number(grpdatoGaaSum.uge2)+Number(grpdatoGaaSum.uge3)+Number(grpdatoGaaSum.uge4)+Number(grpdatoGaaSum.uge5)],
        [ 'Uge 6',Number(grpdatoCykelSum.uge1)+Number(grpdatoCykelSum.uge2)+Number(grpdatoCykelSum.uge3)+Number(grpdatoCykelSum.uge4)+Number(grpdatoCykelSum.uge5)+Number(grpdatoCykelSum.uge6), Number(grpdatoLobeSum.uge1)+ Number(grpdatoLobeSum.uge2)+Number(grpdatoLobeSum.uge3)+Number(grpdatoLobeSum.uge4)+Number(grpdatoLobeSum.uge5)+Number(grpdatoLobeSum.uge6), Number(grpdatoGaaSum.uge1)+Number(grpdatoGaaSum.uge2)+Number(grpdatoGaaSum.uge3)+Number(grpdatoGaaSum.uge4)+Number(grpdatoGaaSum.uge5)+Number(grpdatoGaaSum.uge6)]
    ]);
          console.log("keabena");
         console.log(Number(grpdatoCykelSum.uge2));
          var options8 = {
          title: 'Gruppens motion i løbet af forløbet i km.',
            width:'450',
            height:'450',
          curveType: 'function',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div8'));

        chart.draw(data8, options8);
      }


