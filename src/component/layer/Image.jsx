import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({href , src , alt , className , imageClass}) => {
  return (
    <Link to={href} className={` ${className} `}>
      <picture >
        <img src={src} alt={alt}  className={` block ${imageClass}`}/>
      </picture>
    </Link>
  );
};

export default Image;
