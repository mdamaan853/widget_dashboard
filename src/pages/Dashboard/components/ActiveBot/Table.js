import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <>
          <h2 className="mb-3">Active Bots</h2>
      <Table striped>
        <thead>
          <tr>
            <th>sno</th>
            <th>Bot Id</th>
            <th>Bot Name</th>
            <th>Bot Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1235678</td>
            <td>tak io</td>
            <td>23 may</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>4567890</td>
            <td>mail buffer</td>
            <td>4 June</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>9876543</td>
            <td>the Bird</td>
            <td>8 Dec</td>
          </tr>
        </tbody>
      </Table>
      </>
    );
  }
}