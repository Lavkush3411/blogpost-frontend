import React, { useState } from "react";
import "./post.scss";
import axios from "axios";
import { URL } from "../../pages/home/Home";
import { queryClient } from "../../App";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const navigate = useNavigate();
  const [deleteDialog, setDeleteDialog] = useState(false);
  async function onFirstDelete() {
    setDeleteDialog(true);
  }
  function onCancelDelete() {
    setDeleteDialog(false);
  }
  async function onDelete(id) {
    setDeleteDialog(false);
    await axios.delete(URL + "posts/delete/" + id);

    queryClient.refetchQueries();
  }
  function onEdit(post) {
    navigate("/editpost/" + post._id, { state: post });
  }
  return (
    <div className="post">
      {deleteDialog && (
        <div className="delete-modal">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            onClick={() => onDelete(post._id)}
          >
            {" "}
            Delete{" "}
          </button>
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
            onClick={onCancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
      <h1>{post.title}</h1>
      <h4>{post.catagory}</h4>
      <h4>{post.createdAt}</h4>
      <h5>{post.status}</h5>
      <div className="buttons">
        <button
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          onClick={() => onEdit(post)}
        >
          Edit
        </button>
        <button
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          onClick={() => onFirstDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
