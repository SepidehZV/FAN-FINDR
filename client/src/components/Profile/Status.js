import React, { useState } from 'react';

export default function Status(props) {

  return (
    <div class="d-flex justify-content-center">
      <h1 className="text--semi-bold">{props.message}</h1>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>

      </div>
    </div>

  );
}