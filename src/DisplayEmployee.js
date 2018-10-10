import  React  from  'react';
import "./style.css";

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <quote DisplayCharacter>{employee.quote}</quote>
            <div>{employee.character}</div>
        </div>
    );
};

export  default  DisplayEmployee;
