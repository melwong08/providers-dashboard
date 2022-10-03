import React, { useState, useEffect } from "react";
import "./Table.css";

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
    }, [])

    const rows = jobsData.map(({id, dateTime, status, providerId, avgCostPerPage, materialsTurnInAt, providerRating, locationType, latitude, longitude}, index) => (
            <tr key={index}>
                <button onClick={() => {
                        setJobId({id}); 
                        console.log({id});
                        fetch(`/providers/:${jobId}`)
                            .then((response) => response.json())
                            .then((res) => {
                                setProvidersData(res)
                            });
                            
                        console.log(providersData)
                    }}>{id}</button>
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

    const subrows = providersData.map(({id, fullName, latitude, longitude}, index) => (
        <tr key={index}>
            <td>{id}</td>
            <td>{fullName}</td>
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
                    {subrows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;