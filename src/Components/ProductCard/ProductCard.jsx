import React, { useEffect, useState } from "react";

const ProductCard = ({ allProducts, search, loading,errorFetch }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);

  const handleViewDetails = (id) => {
    const selected = allProducts.find((product) => product.id === id);
    setSelectedProduct(selected);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  console.log(errorFetch);
  useEffect(() => {
    if(errorFetch){
     setFilterProduct([])
    }else{
      if (search.length == null) {
        setFilterProduct(allProducts);
      } else {
        const filtered = allProducts.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilterProduct(filtered);
      }
    }
    
  }, [search, allProducts]);
  // console.log(allProducts);
  // console.log(filterProduct);
  return (
    <div className="w-fit">
      {filterProduct.length > 0 ? (
        <div className="product-list flex flex-wrap gap-4">
          {filterProduct.map((item) => (
            <div key={item.id} className="card-body max-w-[23%] flex flex-grow border">
              <img
                src={item.image}
                className="h-[400px] rounded-lg"
                alt={item.title}
              />
              <h2 className="text-start text-xl font-semibold">
                <span className="text-2xl font-bold">Product Name:</span>
                <br /> {item.title}
              </h2>
              <h3 className="text-start font-semibold text-xl">
                <span className="font-bold">Price: $</span>
                {item.price}
              </h3>
              <p className="text-start">
                <span>Rating: </span>
                {item.rating?.rate}
              </p>

              <div className="card-actions justify-end mt-auto">
                <button
                  onClick={() => handleViewDetails(item.id)}
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {loading ? (
              <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
              </div>
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      )}

      {isModalOpen && selectedProduct && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[400px] rounded-md"
            />
            <h3 className="font-bold text-lg">
              Product Name:
              <br />
              {selectedProduct.title}
            </h3>
            <p className="py-4 text-center">
              <span className="font-bold">Description:</span>
              <br />
              {selectedProduct.description}
            </p>
            <div className="modal-action">
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ProductCard;
