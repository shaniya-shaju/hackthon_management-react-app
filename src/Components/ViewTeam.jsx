import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTeam = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3000/view-hackthon")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12">

                        <h2 className="text-center mb-4">
                            Team Registration Details
                        </h2>

                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Team ID</th>
                                    <th>Team Name</th>
                                    <th>Leader Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Members</th>
                                    <th>Project Title</th>
                                    <th>Problem Statement</th>
                                    <th>Tech Stack</th>
                                    <th>Mentor</th>
                                    <th>Registration Date</th>
                                    <th>Table No</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.team_id}</td>
                                        <td>{value.team_name}</td>
                                        <td>{value.leader_name}</td>
                                        <td>{value.leader_email}</td>
                                        <td>{value.leader_phone}</td>
                                        <td>{value.members_no}</td>
                                        <td>{value.project_title}</td>
                                        <td>{value.prblm_stmnt_track}</td>
                                        <td>{value.tech_stack}</td>
                                        <td>{value.mentor_name}</td>
                                        <td>{value.registration_date}</td>
                                        <td>{value.table_no}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTeam;