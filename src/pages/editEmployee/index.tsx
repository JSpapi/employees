import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../../services/employees.api";
import s from "./index.module.css";
export const EditEmployee = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useGetEmployeeQuery(id || "");

  return <div>EditEmployee</div>;
};
