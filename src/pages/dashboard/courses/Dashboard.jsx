/** @format */

import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../../components/CourseCard";
import PAGES_URL from "../../../router/router";

const Dashboard = () => {

  return (
    <>
      <h6 className="font-weigt-bold mb-0 px-1">
        All Exams <small className="text-dark-50">| 256 Available Exams</small>
      </h6>
      <div className="d-justify-between mt-2 mt-lg-3 px-1">
        <p className="mb-0 font-weight-medium">Mock Exams</p>
        <Link
          to={PAGES_URL.MOCK_TESTS}
          className="d-block text-success text-underline"
        >
          See All
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {Array.from({ length: 4 }).map((i, idx) => (
          <CourseCard key={idx} />
        ))}
      </div>
      <div className="d-justify-between mt-2 mt-lg-3 px-1">
        <p className="mb-0 font-weight-medium">Paid Exams</p>
        <Link
          to={PAGES_URL.PAID_TESTS}
          className="d-block text-primary text-underline"
        >
          See All
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {Array.from({ length: 8 }).map((i, idx) => (
          <CourseCard key={idx} type="text-primary" />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
