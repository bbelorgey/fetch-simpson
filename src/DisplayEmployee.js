import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <div>{employee.quote}</div>
            <div>{employee.character}</div>
            <div>{employee.characterDirection}</div>
        </div>
    );
};

export  default  DisplayEmployee;
