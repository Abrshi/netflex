import React from 'react';
import "./props.css";

function RowProps(props) {
  return (
    <div className='propsouterdiv'>
      
        <div>
          
        </div>
        <div className="listofmoves">
          <div className="singlmove" style={{ backgroundImage: `url(${props.bgpath})` }}></div>
        </div>

    </div>
    
  );
}

export default RowProps;
