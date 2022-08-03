import React from "react";
import ReactDOM from "react-dom";
import { Table } from './lib/index';

const data = [{
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000',
},
{
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Loire',
    dateOfBirth: '01/01/1981',
    street: '1 rue Marue',
    city: 'Paris',
    state: 'France',
    zipCode: '75000',
},
{
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000'
}
]
const labels = ['First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
]

ReactDOM.render(
    <div>
        <h1>table_openclassroom_dervilon</h1>
        <Table data={data} labels={labels} pagination={10} />
    </div>, document.getElementById("root")); 
