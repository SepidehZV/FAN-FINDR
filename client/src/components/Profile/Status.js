import React, { useState } from 'react';

export default function Status(props) {

  return (
    <div className="d-flex justify-content-center">
      <h1 className="text--semi-bold">{props.message}</h1>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>

      </div>
    </div>

  );
}