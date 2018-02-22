import React from 'react';

function Chirp(props) {
    return (
//     <div>
//         <div class="card p-10">
//             <div class="card-block">
//                 <h4 class="card-title"></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">Username: { props.chirp.username }</h6>
//                 <p class="card-text">Message: { props.chirp.message }</p>
//             </div>
//         </div>
//     </div>
//     );
// }

<div class="card card-inverse">
  <div class="card-block">
    <h3 class="card-title">Name: { props.chirp.name }</h3>
    <h6 class="card-subtitle mb-2 text-muted">Username: { props.chirp.username }</h6>
    <p class="card-text">Message: { props.chirp.message }</p>
  </div>
</div>);}

export default Chirp;