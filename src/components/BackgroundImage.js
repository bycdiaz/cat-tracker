import React from 'react';
import styled from 'styled-components';
import paw from '../css/images/catpaw.png';

const ImageDiv = styled.div`
  width: 400px;
  height: 400px;
  z-index: -1;
  background-image: url(${paw});
  transform: rotate(40deg);
  position: absolute;
  margin-left: 60%;
  opacity: 0.7;
`

class BackgroundImage extends React.Component {
  render() {
    return (
      <ImageDiv />
    )
  }
}

export default BackgroundImage;
