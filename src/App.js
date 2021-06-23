import "./styles.css";
import { React, useState } from "react";

const booksDB = {
  javascript: [
    { name: "Eloquent javascript", rating: "4/5" },
    { name: "The CSS guide", rating: "4/5" }
  ],

  fiction: [
    { name: "Sherlock Holmes", rating: "5/5" },
    {
      name: "How I Braved Anu aunty & co-founded a million-dollar company",
      rating: "4/5"
    }
  ],
  business: [
    { name: "Marketing by philip kotler", rating: "5/5" },
    { name: "Rich Dad Poor Dad", rating: "5/5" }
  ]
};
function App() {
  const books = Object.keys(booksDB);
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
    console.log(selectedGenre);
  }
  return (
    <div className="App">
      <h1>📚goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {books.map((genre) => {
        return (
          <button
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={() => genreClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {booksDB[selectedGenre].map((book) => (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={book.name}
            >
              <div>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
