import React from 'react';
import NavBar from '../components/Nav2';

export default function Brand() {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto font-montserrat my-24">
        <h1 className="text-3xl font-bold mb-4">Welcome to Bookwormcorner</h1>
        <p className="mb-4">
          Bookwormcorner was born from a love for stories — not just the ones written in books, but also the ones that live within us. Our founder, a lifelong reader with a passion for discovery, envisioned a place where people could explore a vast collection of books from every genre imaginable. A place where bestsellers stand shoulder to shoulder with hidden gems, where every reader, from the casual page-turner to the insatiable bookworm, feels at home.
        </p>
        <p className="mb-4">
          At Bookwormcorner, we celebrate the magic of books and the joy of reading. We believe that books are more than just pages and ink; they are windows to the past, mirrors of the present, and blueprints for the future. And we are here to help you find your next story, one book at a time.
        </p>
        <p className="mb-8">
          Welcome to Bookwormcorner — your favorite place to read, explore, and belong.
        </p>
        </div>
    </>
  );
}
