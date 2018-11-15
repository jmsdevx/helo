import React from "react";
import { Link } from "react-router-dom";

// const { props } = this.props;

export default function Nav() {
  // if (props.location.pathname !== "/") {
  return (
    <div className="nav">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/new">New Post</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}
// }
