import React, { useState, useEffect } from "react";

const categories = [
  "Food",
  "Clothing",
  "Languages",
  "Dance",
  "Music",
  "Festivals",
  "Architecture",
  "Arts & Crafts",
];

const eras = [
  "Ancient India",
  "Maratha",
  "Mughal",
  "Rajput",
  "Sikh",
  "South India",
];

const CultureForm = ({ initialData = {}, onSubmit, loading }) => {

  const [formData, setFormData] = useState({

    name: "",
    slug: "",
    category: "",
    era: "",
    region: "",
    image: "",
    shortDescription: "",
    description: "",
    gallery: "",
    interestingFacts: "",
    displayOrder: 0,
    isFeatured: false,

  });

  useEffect(() => {

    if (Object.keys(initialData).length > 0) {

      setFormData({

        ...initialData,

        gallery: initialData.gallery?.join(", ") || "",

        interestingFacts:
          initialData.interestingFacts?.join(", ") || "",

      });

    }

  }, [initialData]);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: type === "checkbox" ? checked : value,

    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit({

      ...formData,

      gallery: formData.gallery
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      interestingFacts: formData.interestingFacts
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

    });

  };

  return (

    <form
      className="culture-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >

        <option value="">Select Category</option>

        {categories.map((item) => (

          <option key={item} value={item}>

            {item}

          </option>

        ))}

      </select>

      <select
        name="era"
        value={formData.era}
        onChange={handleChange}
        required
      >

        <option value="">Select Era</option>

        {eras.map((item) => (

          <option key={item} value={item}>

            {item}

          </option>

        ))}

      </select>

      <input
        type="text"
        name="region"
        placeholder="Region"
        value={formData.region}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <textarea
        name="shortDescription"
        rows="3"
        placeholder="Short Description"
        value={formData.shortDescription}
        onChange={handleChange}
      />

      <textarea
        name="description"
        rows="6"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <textarea
        name="gallery"
        rows="3"
        placeholder="Gallery URLs (comma separated)"
        value={formData.gallery}
        onChange={handleChange}
      />

      <textarea
        name="interestingFacts"
        rows="3"
        placeholder="Interesting Facts (comma separated)"
        value={formData.interestingFacts}
        onChange={handleChange}
      />

      <input
        type="number"
        name="displayOrder"
        value={formData.displayOrder}
        onChange={handleChange}
      />

      <label className="checkbox-row">

        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />

        Featured Item

      </label>

      <button
        className="save-btn"
        disabled={loading}
      >

        {loading ? "Saving..." : "Save Culture"}

      </button>

    </form>

  );

};

export default CultureForm;