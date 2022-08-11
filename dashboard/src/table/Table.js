//import { usePagination, useTable, Column } from "react-table";
import "./Table.css";

function Table() {
    return (
        <div>
            <h1>Jobs</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Date/Time</th>
                    <th>Status</th>
                    <th>Provider Id</th>
                    <th>Average Cost per Page (cents)</th>
                    <th>Materials Turned in At</th>
                    <th>Provider Rating</th>
                    <th>Location Type</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                <tr>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                </tr>
                <tr>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                    <td>Table item</td>
                    <td>Table item 2</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;