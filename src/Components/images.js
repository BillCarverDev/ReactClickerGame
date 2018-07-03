import React from 'react';

// const images = (props) => {
//     return (
//         // <div class="card bg-secondary m-3" style="width: 11rem;">
//         // <div class="card bg-secondary m-3" style={{"width: 11rem;"}}>
//         // <div class="card bg-secondary m-3">
//         <div className="card bg-secondary m-3" style={{width: 11}}>
//           <a href={"data-value"}><img className="card-img App-logo" src={props.logo} alt="logo" />
//            </a>
//         </div>  
//     )
// }

const images = (props) => {

    return (
        <div className="row">
        <div className="card col-sm ">
        <img className="img-fluid img-thumbnail card-img-top media" style={{width: '250px'}} src={props.source} alt={props.index} />
        </div>
        </div>
    )
}
    

export default images