import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axios";

function LeaderForm({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [leader, setLeader] = useState({
    // Basic Information
    name: "",
    title: "",
    category: "",

    // Kingdom Information
    empire: "",
    dynasty: "",
    reign: "",
    capital: "",

    // Personal Information
    birth: "",
    death: "",
    father: "",
    mother: "",
    placeOfBirth: "",

    // Biography
    image: "",
    biography: "",

    // Historical Data
    achievements: [""],
    battles: [""],
    quotes: [""],

    timeline: [
      {
        year: "",
        event: "",
      },
    ],

    gallery: [""],

    interestingFacts: [""],
  });

  useEffect(() => {
    if (mode === "edit") {
      fetchLeader();
    }
  }, []);

  const fetchLeader = async () => {
    try {
      const res = await API.get(`/leaders/${id}`);
      setLeader(res.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load leader.");
    }
  };

  // Normal Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLeader((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Arrays
  const handleArrayChange = (field, index, value) => {
    const updated = [...leader[field]];
    updated[index] = value;

    setLeader({
      ...leader,
      [field]: updated,
    });
  };

  const addArrayField = (field) => {
    setLeader({
      ...leader,
      [field]: [...leader[field], ""],
    });
  };

  const removeArrayField = (field, index) => {
    const updated = [...leader[field]];
    updated.splice(index, 1);

    setLeader({
      ...leader,
      [field]: updated,
    });
  };

  // Timeline
  const handleTimelineChange = (index, key, value) => {
    const updated = [...leader.timeline];
    updated[index][key] = value;

    setLeader({
      ...leader,
      timeline: updated,
    });
  };

  const addTimeline = () => {
    setLeader({
      ...leader,
      timeline: [
        ...leader.timeline,
        {
          year: "",
          event: "",
        },
      ],
    });
  };

  const removeTimeline = (index) => {
    const updated = [...leader.timeline];
    updated.splice(index, 1);

    setLeader({
      ...leader,
      timeline: updated,
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (mode === "add") {
        await API.post("/leaders", leader, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Leader Added Successfully!");
      } else {
        await API.put(`/leaders/${id}`, leader, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Leader Updated Successfully!");
      }

      navigate("/admin/leaders");
    } catch (error) {
      console.log(error);
      alert("Operation Failed");
    }
    
  };

    return (
    <form onSubmit={handleSubmit}>

      {/* Hero Information */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">🏛️ Hero Information</h5>
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                name="name"
                value={leader.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Title
              </label>

              <input
                type="text"
                className="form-control"
                name="title"
                value={leader.title}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Category
            </label>

            <select
              className="form-select"
              name="category"
              value={leader.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="King">King</option>
              <option value="Queen">Queen</option>
              <option value="Emperor">Emperor</option>
              <option value="Warrior">Warrior</option>
              <option value="Freedom Fighter">Freedom Fighter</option>
              <option value="Leader">Leader</option>
              <option value="Scientist">Scientist</option>
              <option value="Philosopher">Philosopher</option>
              <option value="Social Reformer">Social Reformer</option>
              <option value="President">President</option>
            </select>

          </div>

        </div>

      </div>

      {/* Kingdom Information */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-success text-white">
          <h5 className="mb-0">👑 Kingdom Information</h5>
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Empire
              </label>

              <input
                className="form-control"
                name="empire"
                value={leader.empire}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Dynasty
              </label>

              <input
                className="form-control"
                name="dynasty"
                value={leader.dynasty}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Reign
              </label>

              <input
                className="form-control"
                name="reign"
                value={leader.reign}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Capital
              </label>

              <input
                className="form-control"
                name="capital"
                value={leader.capital}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Personal Information */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-info text-white">
          <h5 className="mb-0">👤 Personal Information</h5>
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Birth
              </label>

              <input
                className="form-control"
                name="birth"
                value={leader.birth}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Death
              </label>

              <input
                className="form-control"
                name="death"
                value={leader.death}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Father
              </label>

              <input
                className="form-control"
                name="father"
                value={leader.father}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Mother
              </label>

              <input
                className="form-control"
                name="mother"
                value={leader.mother}
                onChange={handleChange}
              />

            </div>

            <div className="col-12">

              <label className="form-label">
                Place of Birth
              </label>

              <input
                className="form-control"
                name="placeOfBirth"
                value={leader.placeOfBirth}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Biography */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">📖 Biography</h5>
        </div>

        <div className="card-body">

          <div className="mb-3">

            <label className="form-label">
              Image URL
            </label>

            <input
              className="form-control"
              name="image"
              value={leader.image}
              onChange={handleChange}
              required
            />

          </div>

          <div>

            <label className="form-label">
              Biography
            </label>

            <textarea
              rows="6"
              className="form-control"
              name="biography"
              value={leader.biography}
              onChange={handleChange}
              required
            />

          </div>

        </div>

      </div>

            {/* Achievements */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-warning">
          <h5 className="mb-0">🏆 Achievements</h5>
        </div>

        <div className="card-body">

          {leader.achievements.map((item, index) => (

            <div className="d-flex mb-2" key={index}>

              <input
                className="form-control me-2"
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "achievements",
                    index,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  removeArrayField("achievements", index)
                }
              >
                ❌
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addArrayField("achievements")}
          >
            + Add Achievement
          </button>

        </div>

      </div>

      {/* Battles */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-danger text-white">
          <h5 className="mb-0">⚔️ Battles</h5>
        </div>

        <div className="card-body">

          {leader.battles.map((item, index) => (

            <div className="d-flex mb-2" key={index}>

              <input
                className="form-control me-2"
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "battles",
                    index,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  removeArrayField("battles", index)
                }
              >
                ❌
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addArrayField("battles")}
          >
            + Add Battle
          </button>

        </div>

      </div>

      {/* Quotes */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">💬 Quotes</h5>
        </div>

        <div className="card-body">

          {leader.quotes.map((item, index) => (

            <div className="d-flex mb-2" key={index}>

              <input
                className="form-control me-2"
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "quotes",
                    index,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  removeArrayField("quotes", index)
                }
              >
                ❌
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addArrayField("quotes")}
          >
            + Add Quote
          </button>

        </div>

      </div>

      {/* Timeline */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">📜 Timeline</h5>
        </div>

        <div className="card-body">

          {leader.timeline.map((item, index) => (

            <div className="row mb-2" key={index}>

              <div className="col-md-3">

                <input
                  className="form-control"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) =>
                    handleTimelineChange(
                      index,
                      "year",
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="col-md-7">

                <input
                  className="form-control"
                  placeholder="Event"
                  value={item.event}
                  onChange={(e) =>
                    handleTimelineChange(
                      index,
                      "event",
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="col-md-2">

                <button
                  type="button"
                  className="btn btn-danger w-100"
                  onClick={() => removeTimeline(index)}
                >
                  ❌
                </button>

              </div>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={addTimeline}
          >
            + Add Timeline
          </button>

        </div>

      </div>

      {/* Gallery */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-success text-white">
          <h5 className="mb-0">🖼️ Gallery</h5>
        </div>

        <div className="card-body">

          {leader.gallery.map((item, index) => (

            <div className="d-flex mb-2" key={index}>

              <input
                className="form-control me-2"
                placeholder="Image URL"
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "gallery",
                    index,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  removeArrayField("gallery", index)
                }
              >
                ❌
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addArrayField("gallery")}
          >
            + Add Image
          </button>

        </div>

      </div>

      {/* Interesting Facts */}

      <div className="card mb-4 shadow-sm">

        <div className="card-header bg-info text-white">
          <h5 className="mb-0">⭐ Interesting Facts</h5>
        </div>

        <div className="card-body">

          {leader.interestingFacts.map((item, index) => (

            <div className="d-flex mb-2" key={index}>

              <input
                className="form-control me-2"
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "interestingFacts",
                    index,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  removeArrayField(
                    "interestingFacts",
                    index
                  )
                }
              >
                ❌
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() =>
              addArrayField("interestingFacts")
            }
          >
            + Add Fact
          </button>

        </div>

      </div>

      <div className="text-end">

        <button
          type="submit"
          className="btn btn-success btn-lg"
        >
          {mode === "add"
            ? "Save Leader"
            : "Update Leader"}
        </button>

      </div>

    </form>
  );
}

export default LeaderForm;