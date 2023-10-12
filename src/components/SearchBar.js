//styles
import './SearchBar.css'

import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  //STATES
  const [term, setTerm] = useState("");

  //FUNCTION
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  ///////////////////////

  //FORM
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term:</label>
        <input
          autoComplete="off"
          type="text"
          name="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
