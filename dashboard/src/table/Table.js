import React, {useState, useEffect} from "react";
import "./Table.css";
import JobsData from "./JobsData.js";

function Table(props) {
    const [data, setData] = useState(null);

    async function fetchJobsData(id){
        const response = await fetch("/" + id);
        setData(await response.json)
    }

    useEffect(() => {
        fetchJobsData(props.id);
      }, [props.id]);
    
      if (!data) {
        return "loading...";
      }

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
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                    <th>table data</th>
                </tr>
                <JobsData />
            </table>
        </div>
    )
}

export default Table;