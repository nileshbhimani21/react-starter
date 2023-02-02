import React from 'react'
import { Table } from 'react-bootstrap'
import moment from 'moment'

export default function Step4({ data }) {
  return (<>
    <h2 className='text-center text-success'>Data added sunccessfully</h2>
    {data && data !== null && <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"50%"}>First Name</td>
          <td>{data.firstName}</td>
        </tr>
        <tr>
          <td>Middle Name</td>
          <td>{data.middleName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{data.lastName}</td>
        </tr>
        <tr>
          <td>Mobile No</td>
          <td>{data.mobileNo}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td><span className='text-break'>{data.email}</span></td>
        </tr>
        <tr>
          <td>Birthday</td>
          <td>{moment(data.birthday).format("DD-MM-YYYY")}</td>
        </tr>        
        <tr>
          <td>Age</td>
          <td>{data.age}</td>
        </tr>
        <tr>
          <td>Blood Group</td>
          <td>{data.bloodGroup}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{data.height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{data.weight}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{data.gender}</td>
        </tr>
        <tr>
          <td>Marital Status</td>
          <td>{data.maritalStatus}</td>
        </tr>
        <tr>
          <td>Address Line 1</td>
          <td>{data.addressLine1}</td>
        </tr>
        <tr>
          <td>Address Line 2</td>
          <td>{data.addressLine2}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{data.city}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{data.state}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{data.country}</td>
        </tr>
        <tr>
          <td>Pin Code</td>
          <td>{data.pinCode}</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>{data.html}</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>{data.css}</td>
        </tr>
        <tr>
          <td>ES6</td>
          <td>{data.es6}</td>
        </tr>
        <tr>
          <td>React</td>
          <td>{data.react}</td>
        </tr>
        <tr>
          <td>Redux</td>
          <td>{data.redux}</td>
        </tr>
        <tr>
          <td>English</td>
          <td>{data.english}</td>
        </tr>
        <tr>
          <td>Hindi</td>
          <td>{data.hindi}</td>
        </tr>
        <tr>
          <td>Gujarati</td>
          <td>{data.gujarati}</td>
        </tr>
        <tr>
          <td>T & C</td>
          <td>{data.termAndCondition}</td>
        </tr>
      </tbody>
    </Table>}
  </>)
}
