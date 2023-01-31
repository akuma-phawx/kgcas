import React from 'react';
import './error-page-404.styles.scss';
import image404 from '../../assets/404.jpg';

const ErrorPage404 = () => {
  return (
    <div className="error-content">
      <h1>404</h1>
      <p>Whoops - Page not found ! Probably chilling at a beach..</p>
      <img src={image404} alt="Dog at the beach" />
    </div>
  );
};

export default ErrorPage404;
