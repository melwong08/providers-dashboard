import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

let jobsData = [
    {id: 1, dateTime: "2021-06-03 08:19:33", status: "COMPLETE", providerId: 1, avgCostPerPage: 550, materialsTurnInAt: "2021-06-13 10:43:33", providerRating: true, locationType: "REMOTE", latitude: null, longitude: null},
    {id: 2, dateTime: '2021-06-04 03:31:33', status: 'COMPLETE', providerId: 1, avgCostPerPage: 625, materialsTurnInAt: '2021-06-13 15:31:33', providerRating: true, locationType: 'LOCATION_BASED', latitude: '34.0165128', longitude: '-118.4939147'}
]

function Table (){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchJobsData(){
            const response = await axios('/jobs/status/scheduled');
            const dataFromAPI = await response.json();
            setData(dataFromAPI);
        }
        fetchJobsData()
    }, [])

    // fetch('/jobs/status/scheduled')
    // .then((response) => response.json())
    // .then((data) => {
    //     jobsData = data;
    // });

    console.log(data)

    const rows = jobsData.map(({id, dateTime, status, providerId, avgCostPerPage, materialsTurnInAt, providerRating, locationType, latitude, longitude}, index) => (
        <tr key={index}>
            <td>{id}</td>
            <td>{dateTime}</td>
            <td>{status}</td>
            <td>{providerId}</td>
            <td>{avgCostPerPage}</td>
            <td>{materialsTurnInAt}</td>
            <td>{providerRating}</td>
            <td>{locationType}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
        </tr>
    ))

    return (
        <div>
            <h1>Jobs</h1>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;