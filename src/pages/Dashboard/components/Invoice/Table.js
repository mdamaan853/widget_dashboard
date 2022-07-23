import React from 'react';
import { Table } from 'reactstrap';
import DownloadingIcon from "@mui/icons-material/Downloading"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default class Example extends React.Component {
    render() {
        return (
            <>
                <h2 className="mb-3">Invoice</h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th>sno</th>
                            <th>Invoice Number</th>
                            <th>Invoice Name</th>
                            <th>Invoice Date</th>
                            <th>View</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1235678</td>
                            <td>tak io</td>
                            <td>23 may</td>     <td>
                                <VisibilityIcon titleAccess="view" />
                            </td>
                            <td>
                                <DownloadingIcon titleAccess="download" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>4567890</td>
                            <td>mail buffer</td>
                            <td>4 June</td>     <td>
                                <VisibilityIcon titleAccess="view" />
                            </td>
                            <td>
                                <DownloadingIcon titleAccess="download" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>9876543</td>
                            <td>the Bird</td>
                            <td>8 Dec</td>
                            <td>
                                <VisibilityIcon titleAccess="view" />
                            </td>
                            <td>
                                <DownloadingIcon titleAccess="download" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}