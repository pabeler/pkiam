import React from 'react';

function CustomImage({src, alt}) {
    const imagePath = "images\\weather-icons\\" + src + ".png";
    return <img src={imagePath} alt={alt} width="100px" height="100px"/>;
}

export default CustomImage;
