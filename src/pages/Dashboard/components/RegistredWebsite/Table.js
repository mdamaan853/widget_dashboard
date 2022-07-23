import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <>
          <h2 className="mb-3">Registred Website</h2>
      <Table striped>
        <thead>
          <tr>
            <th>sno</th>
            <th>Websites Name</th>
            <th>Company Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>www.w3school.com</td>
            <td>w3 school</td>
            <td>23 may</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>www.lexadmin.com</td>
            <td>Lexa</td>
            <td>4 June</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>www.unzip.com</td>
            <td>unzip</td>
            <td>8 Dec</td>
          </tr>
        </tbody>
      </Table>
      </>
    );
  }
}