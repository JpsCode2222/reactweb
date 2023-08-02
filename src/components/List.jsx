import React from "react";

function List(props){
    return (
        <>
        <div className="row mb-2 justify-content-center">
        <div className="col-md-8">
            <div className="row justify-content-center">
            <div className="col-3">
             <img src={props.img} style={{borderRadius:'50%',width:'100px'}} height="100px" alt="" />
         </div>
         <div className="col-9">
             <h1 className="mt-3">{props.name}</h1>
             <p>{props.email}</p>
         </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default List;
