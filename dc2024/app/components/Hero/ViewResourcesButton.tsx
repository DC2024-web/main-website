'use client'
import React from 'react';
import { Button } from 'reactstrap';

const ViewResourcesButton = () => {
  const handleClick = () => {
    // Define the URL you want to open
    const url = 'https://example.com/resources';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button color="primary" onClick={handleClick} outline>
      See Who's Winning
    </Button>
  );
};

export default ViewResourcesButton;
