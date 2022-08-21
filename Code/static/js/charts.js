
const myHeaders = new Headers();
myHeaders.append('Accept', 'Header 2');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

const merged_data_url = "http://127.0.0.1:5000/api/v1.0/merged_data";



//function apiTest() {
 // fetch(merged_data_url, myInit)
 // .then((response) => response.json())
  //.then((merged_data) => {
  //  console.log(merged_data)
  //  return response.merged_data
 //});
//}
const counties = []
//Create filter for US states to get unique ones in loop
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 
'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 
'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 
'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

fetch(merged_data_url)
.then(response => {
   return response.json();
})
.then(test_data => console.log(test_data));

var new_data = [];
const housing_pop_dict = {};

d3.json(merged_data_url).then((new_data) => {
    //console.log(new_data);
    new_data.forEach((new_item) => {
      for (let i in new_item) {
    
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
        housing_pop_dict[i] = new_item[i];
      
        housing_pop_list.push(housing_pop_dict);

        if(housing_pop_dict[i]==housing_pop_dict[i]) {
          continue;
        }
      }
    })

  console.log(housing_pop_dict);
});

console.log(new_data);

//async function fetchData() {
//  try {
//    let response = await fetch(merged_data_url);
//    return await response.json();
//} catch (error) {
//    console.log(error);
//}}


let housing_pop_list = [];



console.log(housing_pop_list);

function isEmptyObject(obj) {
  if(typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0){
      return false;
  } else {
      return true;
  }
}
//console.log(isEmptyObject(housing_pop_dict));

//fetchData()
  //.then(merged_data => {
    // console.log({ message: 'Request received!', merged_data })
   // })

//var merged_data = data.json();
//"http://127.0.0.1:5000
const labels = [
    '0',
    '2019',
    '2020',
    '2021'
  ];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [housing_pop_dict["2019 Population"], housing_pop_dict["2020 Population"], housing_pop_dict["2021 Population"]]
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config);