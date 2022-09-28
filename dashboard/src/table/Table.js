import React, { useState, useEffect } from "react";
import "./Table.css";

// let jobsData = [
//     {id: 1, dateTime: "2021-06-03 08:19:33", status: "COMPLETE", providerId: 1, avgCostPerPage: 550, materialsTurnInAt: "2021-06-13 10:43:33", providerRating: true, locationType: "REMOTE", latitude: null, longitude: null},
//     {id: 2, dateTime: '2021-06-04 03:31:33', status: 'COMPLETE', providerId: 1, avgCostPerPage: 625, materialsTurnInAt: '2021-06-13 15:31:33', providerRating: true, locationType: 'LOCATION_BASED', latitude: '34.0165128', longitude: '-118.4939147'}
// ]

function Table (){
    const [jobsData, setJobsData] = useState([]);
    const [providersData, setProvidersData] = useState([]);
    const [jobId, setJobId] = useState([0]);

    useEffect(() => {
        fetch('/jobs/status/scheduled')
            .then((response) => response.json())
            .then((res) => {
                setJobsData(res);
            });

        fetch('/providers')
            .then((response) => response.json())
            .then((res) => {
                setProvidersData(res)
            })
    }, [])

    const subrows = providersData.map(({id, fullName, latitude, longitude}, index) => (
        <tr key={index}>
            <td>{id}</td>
            <td>{fullName}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
        </tr>
    ))

    const rows = jobsData.map(({id, dateTime, status, providerId, avgCostPerPage, materialsTurnInAt, providerRating, locationType, latitude, longitude}, index) => (
            <tr key={index}>
                <button onClick={() => setJobId({id})}>{id}</button>
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
                    {jobId.id}
                </tbody>
            </table>
        </div>
    )
}

export default Table;