import React, { memo } from  'react';
function SoftwareIcons ({altText,srcImg}){

    return(
        <li>
        <img alt={altText} src={srcImg} ></img>
    </li>
    )
}

export default memo(SoftwareIcons);