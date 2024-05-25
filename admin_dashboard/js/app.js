//sideBar Toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
  if(!sidebarOpen){
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen=true;
  }
}

function closeSidebar(){
  if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive")
    sidebarOpen=false;
  }
}

//----------------charts---------

//bar chart

var barChartOptions = {
  series: [{
  data: [2, 5, 7, 9, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar:{
    show: false
  },
},
colors:[
  "#246dec",
  "#cc3c43",
  "#367942",
  "#f5b472",
  "#4f35a1"
],
plotOptions: {
  bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnwidth: '40%',
  }
},
dataLabels: {
  enabled: false
},
legend:{
  show:false
},
xaxis: {
  categories: ['Laptop', 'Monitor', 'Mouse', 'Camera', 'headphones'
  ],
},
yaxis: {
  title:{
    text: "Count"
  }
}
};

var barChart = new ApexCharts(document.querySelector(".bar-chart"), barChartOptions);
barChart.render();

//---------------------------------------Area chart-----------------------------------------//

var areaChartOptions = {
  series: [{
  name: 'Purchase Orders',
  data: [44, 55, 31, 47, 31, 43, 26]
}, {
  name: 'Sales Orders',
  data: [55, 69, 45, 61, 43, 54, 37]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar:{
    show:false,
  },
},
colors:["#4f35a1", "#246dec"],
dataLabels:{
  enabled:false,
},
stroke: {
  curve: 'smooth'
},
labels: ['Jan', 'Feb','Mar','Dec 04','Apr','May','Jun','Jul'],
markers: {
  size: 0
},
yaxis: [
  {
    title: {
      text: 'Purchase Orders',
    },
  },
  {
    opposite: true,
    title: {
      text: 'Sales Or',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
}
};

var areaChart = new ApexCharts(document.querySelector(".area-chart"), areaChartOptions);
areaChart.render();

