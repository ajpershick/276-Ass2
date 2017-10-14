
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
              49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// Stores input from text box into a var

function getData(parameter)
{
    return document.getElementById(parameter).value;
}

function checkNum(evt, parameter)
{
    var Max = getData('Max');
    var aPlus = getData('A+');
    var a = getData('A');
    var aMinus = getData('A-');
    var bPlus = getData('B+');
    var b = getData('B');
    var bMinus = getData('B-');
    var cPlus = getData('C+');
    var c = getData('C');
    var cMinus = getData('C-');
    var d = getData('D');
    var f = getData('F');
    var i;
    var j;
    var array = [Max, aPlus, a, aMinus, bPlus, b, bMinus, cPlus, c, cMinus, d, f];

    for (j=0; j < array.length-1; j++)
    {
        if (Number(array[j+1]) > Number(array[j]))
        {
            window.alert(array[j+1] + ' is greater than ' + array[j] + '. You will see incorrect results until you fix this!');
            return;
        }
    }

    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    // Don't validate the input if below arrow, delete and backspace keys were pressed
    if(key === 37 || key === 38 || key === 39 || key === 40 || key === 8 || key === 46 || key === 190)  { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        return;
    }
    var x = parameter.value;
    var regex ='^[0-9]+(([\,\.]?[0-9]+)*)?$';
    if (!x.match(regex)) {
        window.alert("You must input numbers for grades!");
        return false;
    }
    else
        return x;
}


function push(x, y)
{
    document.getElementById(x).innerHTML = y;
}

// Stores number of each range in each var (val#)

function calculate()
{

    var Max = getData('Max');
    var aPlus = getData('A+');
    var a = getData('A');
    var aMinus = getData('A-');
    var bPlus = getData('B+');
    var b = getData('B');
    var bMinus = getData('B-');
    var cPlus = getData('C+');
    var c = getData('C');
    var cMinus = getData('C-');
    var d = getData('D');
    var f = getData('F');
    var i;
    var j;

    var val1='', val2='', val3='', val4='', val5='', val6='',
        val7='', val8='', val9='', val10='', val11='';

    for (i=0; i < grades.length; i++)
    {
        if (grades[i] >= aPlus && aPlus != '')
            val1 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= a && a != '')
            val2 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= aMinus && aMinus != '')
            val3 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= bPlus && bPlus != '')
            val4 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= b && b != '')
            val5 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= bMinus && bMinus != '')
            val6 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= cPlus && cPlus != '')
            val7 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if(grades[i] >= c && c != '')
            val8 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= cMinus && cMinus != '')
            val9 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] >= d && d != '')
            val10 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
        else if (grades[i] < d && f != '')
            val11 += "<div class='col-xs-1 glyphicon glyphicon-user'><div/>";
    }
    push('hist1', val1);
    push('hist2', val2);
    push('hist3', val3);
    push('hist4', val4);
    push('hist5', val5);
    push('hist6', val6);
    push('hist7', val7);
    push('hist8', val8);
    push('hist9', val9);
    push('hist10', val10);
    push('hist11', val11);
}

window.onload = function()
{
    calculate();
};

