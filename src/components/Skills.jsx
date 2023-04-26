import React from 'react'

const Skills = (props) => {
  var colo = props.perc;
  console.log(colo);
  return (
    <div className="skills " >
      <div className="outer" >

        <div className="inner">
            {props.perc}
      </div>
        </div>
        <div className="name"   >wordpress</div>
    </div>
  )
}

export default Skills