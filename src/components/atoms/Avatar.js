import React from 'react';

// style
import './avatar.style.scss';

function Avatar({ src }) {
  const style = {
    border: '1px solid red'
  }
  return (
    <img
    style={style}
      className="avatar"
      src={src}
      alt="Avatar"
    />
  )
}

export default Avatar;
