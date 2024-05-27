import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { URL } from "../home/Home";

function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formInputs, setformInputs] = useState({
    title: location.state.title,
    description: location.state.description,
    category: location.state.category,
    status: location.state.status,
    _id: location.state._id,
  });
  async function onformSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!formInputs) {
      alert("fill all the fields");
      return;
    }
    let formempty = false;
    Object.values(formInputs).forEach((input) => {
      if (input === "") {
        formempty = true;
        return;
      }
    });
    if (formempty) {
      alert("fill all the fields");
      return;
    }
    try {
      const response = await axios.post(URL + "posts/update", {
        data: formInputs,
      });
      navigate("/home");
    } catch {
      alert("some error");
    }
  }

  function onformInputChange(e) {
    setformInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="editpost">
      <form>
        <p>Edit Post</p>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example11">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formInputs.title}
            required
            className="form-control"
            placeholder="Title"
            onChange={(e) => onformInputChange(e)}
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example11">
            Description
          </label>
          <textarea
            value={formInputs.description}
            required
            name="description"
            onChange={(e) => onformInputChange(e)}
            type="textarea"
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example11">
            Category
          </label>
          <input
            required
            value={formInputs.category}
            name="category"
            type="text"
            className="form-control"
            placeholder="Category"
            onChange={(e) => onformInputChange(e)}
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example11">
            Status
          </label>
          <select
            name="status"
            value={formInputs.status}
            className="form-control"
            placeholder="Status"
            onChange={(e) => onformInputChange(e)}
          >
            <option value="" selected hidden></option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="text-center pt-1 mb-5 pb-1">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            type="button"
            onClick={onformSubmit}
          >
            Update
          </button>
        </div>

        <div className="d-flex align-items-center justify-content-center pb-4"></div>
      </form>
    </div>
  );
}

export default EditPost;
