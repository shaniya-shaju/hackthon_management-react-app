
import axios from 'axios';
import React, { useState } from 'react'

const AddTeam = () => {
    const [input, setInput] = useState({
        team_id: "",
        team_name: "",
        team_leader_name: "",
        leader_email: "",
        leader_phone: "",
        college_name: "",
        number_of_members: "",
        project_title: "",
        problem_statement_track: "",
        technology_stack: "",
        mentor_name: "",
        registration_date: "",
        table: ""
    })

    const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add", input)
      .then((response) => {
        console.log(response.data);
        alert("Team Registered Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration Failed");
      })
  }

    return (
        <div>

            <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="text-center mb-4">Team Registration</h2>

          <div className="row g-3">

            <div className="col-md-6">
              <label>Team ID</label>
              <input
                type="text"
                className="form-control"
                name="team_id"
                value={input.team_id}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Team Name</label>
              <input
                type="text"
                className="form-control"
                name="team_name"
                value={input.team_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Team Leader Name</label>
              <input
                type="text"
                className="form-control"
                name="team_leader_name"
                value={input.team_leader_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Leader Email</label>
              <input
                type="text"
                className="form-control"
                name="leader_email"
                value={input.leader_email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Leader Phone</label>
              <input
                type="text"
                className="form-control"
                name="leader_phone"
                value={input.leader_phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>College Name</label>
              <input
                type="text"
                className="form-control"
                name="college_name"
                value={input.college_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Number of Members</label>
              <input
                type="text"
                className="form-control"
                name="number_of_members"
                value={input.number_of_members}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Project Title</label>
              <input
                type="text"
                className="form-control"
                name="project_title"
                value={input.project_title}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Problem Statement Track</label>
              <input
                type="text"
                className="form-control"
                name="problem_statement_track"
                value={input.problem_statement_track}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Technology Stack</label>
              <input
                type="text"
                className="form-control"
                name="technology_stack"
                value={input.technology_stack}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Mentor Name</label>
              <input
                type="text"
                className="form-control"
                name="mentor_name"
                value={input.mentor_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Registration Date</label>
              <input
                type="text"
                className="form-control"
                name="registration_date"
                value={input.registration_date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Table / Station Number</label>
              <input
                type="text"
                className="form-control"
                name="table"
                value={input.table}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={readValues}
              >
                Register Team
              </button>
            </div>

          </div>

        </div>
      </div>




        </div>
    )
}

export default AddTeam