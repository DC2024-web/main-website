'use client'
import React from 'react';
import { Button } from 'reactstrap';

interface props {
  link: string;
  title: string;
}
const ViewResourcesButton = (props: props) => {
  const {link, title} = props;
  const handleClick = () => {
    // Define the URL you want to open
    const url = link;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button color="primary" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default ViewResourcesButton;
