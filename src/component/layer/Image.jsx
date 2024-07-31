import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({href , src , alt , className}) => {
  return (
    <Link to={href}>
      <picture >
        <img src={src} alt={alt}  className={` block ${className}`}/>
      </picture>
    </Link>
  );
};

export default Image;
