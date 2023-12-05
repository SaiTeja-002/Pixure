// import React from 'react';

// const ImageComponent = ({ imageUrl, maxWidthThreshold, maxHeightThreshold }) => {
//   const style = {};
  
//   // Check if width or height exceeds the threshold
//   if (maxWidthThreshold && maxHeightThreshold) {
//     style.maxWidth = `${maxWidthThreshold}px`;
//     style.maxHeight = `${maxHeightThreshold}px`;
//   } else if (maxWidthThreshold) {
//     style.maxWidth = `${maxWidthThreshold}px`;
//   } else if (maxHeightThreshold) {
//     style.maxHeight = `${maxHeightThreshold}px`;
//   }

//   return (
//     <img src={imageUrl} alt="Example" style={style} />
//   );
// };

// export default ImageComponent;


import React, { useEffect, useState } from 'react';

const ImageComponent = ({ imageUrl }) => {
  const [maxWidthThreshold, setMaxWidthThreshold] = useState(null);
  const [maxHeightThreshold, setMaxHeightThreshold] = useState(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newMaxWidthThreshold = screenWidth * 0.3;
    const newMaxHeightThreshold = screenHeight * 0.3;

    setMaxWidthThreshold(newMaxWidthThreshold);
    setMaxHeightThreshold(newMaxHeightThreshold);

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const newScreenHeight = window.innerHeight;

      const adjustedMaxWidthThreshold = newScreenWidth * 0.3;
      const adjustedMaxHeightThreshold = newScreenHeight * 0.3;

      setMaxWidthThreshold(adjustedMaxWidthThreshold);
      setMaxHeightThreshold(adjustedMaxHeightThreshold);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <img src={imageUrl} alt="SelectedImage" style={{ maxWidth: `${maxWidthThreshold}px`, maxHeight: `${maxHeightThreshold}px` }} />
  );
};

export default ImageComponent;
