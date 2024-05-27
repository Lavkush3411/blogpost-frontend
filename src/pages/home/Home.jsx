import React from "react";
import Post from "../../components/post/Post";
import "./home.scss";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const URL = "https://blogpost-backend-pi.vercel.app/";

async function fetchData() {
  const res = await axios.get(URL + "posts/get");
  return res.data;
}

function Home() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  if (isFetching || isLoading) return <div>Loading</div>;
  return (
    <div className="home">
      <h1>Posts</h1>
      <Link to={"/createPost"}>
        <button
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
        >
          {" "}
          Create Post
        </button>
      </Link>
      {data && data.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default Home;
export { URL };
