import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "../../../api/axios";

import CultureForm from "./CultureForm";

import "./Culture.css";

const AddCulture = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {

    try {

      setLoading(true);

      await axios.post("/culture", formData);

      alert("Culture added successfully!");

      navigate("/admin/culture");

    }

    catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add culture."
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="admin-page">

      <div className="admin-header">

        <h1>Add New Culture</h1>

      </div>

      <CultureForm

        onSubmit={handleSubmit}

        loading={loading}

      />

    </div>

  );

};

export default AddCulture;