import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "../../../api/axios";

import CultureForm from "./CultureForm";

import "./Culture.css";

const EditCulture = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [culture, setCulture] = useState({});

  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Existing Culture
  // ==========================

  useEffect(() => {

    fetchCulture();

  }, []);

  const fetchCulture = async () => {

    try {

      const { data } = await axios.get(`/culture/${id}`);

      setCulture(data);

    }

    catch (error) {

      console.log(error);

      alert("Unable to load culture item.");

    }

    finally {

      setLoading(false);

    }

  };

  // ==========================
  // Update Culture
  // ==========================

  const handleUpdate = async (formData) => {

    try {

      setLoading(true);

      await axios.put(

        `/culture/${id}`,

        formData

      );

      alert("Culture Updated Successfully!");

      navigate("/admin/culture");

    }

    catch (error) {

      console.log(error);

      alert("Update Failed");

    }

    finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="admin-page">

      <div className="admin-header">

        <h1>Edit Culture</h1>

      </div>

      <CultureForm

        initialData={culture}

        onSubmit={handleUpdate}

        loading={loading}

      />

    </div>

  );

};

export default EditCulture;