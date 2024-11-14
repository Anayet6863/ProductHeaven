// const ViewProduct = ({ product }) => {
//   console.log(product);
//   const { title, price, description,image } = product;
//   console.log(image,title);

//   return (
//     <div>
      
      
      
//       <dialog id="my_modal_1" className="modal">
//         <div className="modal-box">
//           <img src={image}></img>
//           <h3 className="font-bold text-lg">{title}</h3>
//           <p className="py-4">
//             {description}
//           </p>
//           <div className="modal-action">
//             <form method="dialog">
            
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//       {/* <button
//         className="btn"
//         onClick={() => document.getElementById("my_modal_1").showModal()}
//       >
//         open modal
//       </button> */}
     
//     </div>
//   );
// };

// export default ViewProduct;


const ViewProduct = ({ product }) => {
  if (!product) return null; // Render nothing if product is undefined

  const { title, price, description, image } = product;
  return (
    <div>
        {/* <button
        className="btn"
       onClick={() => document.getElementById("my_modal_1").showModal()}
     >
       open modal
       {
       }
       </button> */}
      
      <dialog id="my_modal_1" className="modal" >
        <div className="modal-box">
          <img src={image} alt={title} />
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {
          document.getElementById("my_modal_1").showModal()
       }
    </div>
  );
};

export default ViewProduct;
