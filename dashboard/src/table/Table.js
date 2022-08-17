//import React, { useState, useEffect } from "react";
import "./Table.css";

const jobsData = [
    {id: 1, datetime: "2021-06-03 08:19:33", status: "COMPLETE", provider_id: 1, avg_cost_per_page: 550, materials_turned_in_at: "2021-06-13 10:43:33", provider_rating: true, location_type: "REMOTE", latitude: null, longitude: null}
]

function Table() {

//function Table (jobs){
    // const [data, setData] = useState(null);

    // async function fetchJobsData(id){
    //     const response = await fetch('/jobs');
    //     setData(await response.json)
    // }

    // useEffect(() => {
    //     fetchJobsData(jobs.id);
    //   }, [jobs.id]);

    //   if (!data) {
    //     return "loading...";
    //   }

    fetch('/jobs')
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

    

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