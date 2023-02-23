import "./Card.css";
import { useState } from "react";
const Card = ({ items }) => {
    const {img,name,options} =items
  const [toggle, setToggle] = useState(true);
  return (
    <div  onClick={() => setToggle(!toggle)} className="card">
      
      {toggle ? (
        <>
          <img src={img} alt={name} />
          <h3>{name}</h3>
        </>
      ) : (
        <ul>
          {options.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
//   return (
//     <div className="container">
//       {languages.map((items,index) => {
//   const { name, img, options } = items;

//         return (
//           <div key={index} onClick={() => setToggle(!toggle)} className="card">
//             {toggle ? (
//               <>
//                 <img src={img} alt="" />
//                 <h3>{name}</h3>
//               </>
//             ) : (
//               <ul>
//                 {
//                     options.map((item,i)=>{
//                         return(
//                             <li key={i}>{item}</li>
//                         )
//                     })
//                 }
//               </ul>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
export default Card;
