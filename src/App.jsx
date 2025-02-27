import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const schools = [
    {
      name: "Delhi Public School, RK Puram",
      city: "Delhi",
      board: "CBSE",
      description:
        "A renowned CBSE school with excellent academic and extracurricular programs.",
    },
    {
      name: "The Cathedral & John Connon School",
      city: "Mumbai",
      board: "ICSE",
      description:
        "A prestigious ICSE school known for its rich history and academic excellence.",
    },
    {
      name: "Bishop Cotton Boys' School",
      city: "Bangalore",
      board: "ICSE",
      description: "One of the oldest and most respected schools in Bangalore.",
    },
    {
      name: "Modern School, Barakhamba Road",
      city: "Delhi",
      board: "CBSE",
      description:
        "A top-rated CBSE school with a strong focus on holistic development.",
    },
    {
      name: "St. Joseph's Boys' High School",
      city: "Bangalore",
      board: "ICSE",
      description:
        "A well-established ICSE school with a reputation for academic rigor.",
    },
    {
      name: "Mayo College",
      city: "Ajmer",
      board: "CBSE",
      description:
        "A prestigious boarding school known for its traditions and holistic education.",
    },
  ];

  const handleSearch = () => {
    const filteredSchools = schools.filter((school) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        school.name.toLowerCase().includes(lowerSearchTerm) ||
        school.city.toLowerCase().includes(lowerSearchTerm) ||
        school.board.toLowerCase().includes(lowerSearchTerm)
      );
    });
    setSearchResults(filteredSchools);
  };
  return (
    <>
      <div className="AppDiv">
        <header className="header">
          <h1>Find Your Best School in India</h1>
          <p>Discover the best educational institutions across the nation.</p>
        </header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter school name, city, or board"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="results-container">
          {searchResults.length === 0 && searchTerm !== "" ? (
            <p>No schools found matching your search.</p>
          ) : (
            searchResults.map((school, index) => (
              <div key={index} className="school-card">
                <h2>{school.name}</h2>
                <p>
                  <strong>City:</strong> {school.city}
                </p>
                <p>
                  <strong>Board:</strong> {school.board}
                </p>
                <p>{school.description}</p>
              </div>
            ))
          )}
        </div>
        <footer className="footer">
          <p>&copy; 2024 Best Schools India. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
