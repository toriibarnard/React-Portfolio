import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.css'; // import 404 page styles

function NotFound() {
  return (
    <div className="text-center">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
