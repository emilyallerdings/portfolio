import React from 'react';

import {
  Col,
} from "react-bootstrap";


const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className='card shadow-lg p-3 mb-0 bg-white'> 
        <div className="pb-0 text-center ">
          <img className=" bg-white mb-0" src={data.companylogo} alt="" />
          <p className="lead fs-4 mb-0">
            {data.role}
          </p>
        </div>
        <div className="pb-5 text-center">

          <p className="lead fs-5">
            {data.date}
          </p>

          <p className='text-muted '>
            {DynamicNewlineComponent(data.info)}
          </p>
        </div>

      </div>
    </Col>
  );
}

function DynamicNewlineComponent( text ) {
  const lines = text.split('\n');
  return (
    <div>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExperienceCard;