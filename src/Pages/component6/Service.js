import React, { useState, useEffect } from "react";
import "./Service.css";
import Souvenir from "./pic/Souvenir.png";
import rb_1 from "./pic/rb_1.png";
import rb_2 from "./pic/rb_2.png";
import axios from "axios";

const Service = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders on component mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(response.data);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Error fetching orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading Service & Products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="service-9451">
        {/* <!-- Header --> */}
        <header className="service-header-9451">
          <div className="header-img-8452">
            <img src={Souvenir} className="header-img-8450" />
          </div>
        </header>

        {/* <!-- Search Box --> */}
        <nav className="search-box-7850">
          <div className="search-box-7851">
            <input type="text" placeholder="Search for paper cups..." />
            <button>Search</button>
          </div>
        </nav>

        {/* <!-- Services Section --> */}
        <h2 className="services-5340">Services near you ✨</h2>
        {products && products.length !== 0 ? (
          <div className="categories-container">
            {Object.entries(products).map(([categoryId, category]) => (
              <section className="category-section" key={categoryId}>
                <h2 className="category-title">{category.category_name}</h2>
                <div className="products-grid">
                  {category.items.map((product) => (
                    <div className="card-9231" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        width="100"
                        height="100"
                        className="product-image"
                      />
                      <div className="card-content-4913">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="price-1342">Starting at Rs {product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
        <p className="no-orders">No Products found.</p>
        )}

        {/* <!-- Suggestion Section --> */}
        <h1 className="services-5341">
          Write us a suggestion or else have a chat with us ✨
        </h1>
        <div className="suggestion-boxes-7824">
          <div className="suggestion-6734">
            <h5 className="services-5343">
              Suggest any other type of advertisements{" "}
            </h5>
            <img src={rb_1} />
            <textarea placeholder="Write your suggestion..."></textarea>
            <button>Send</button>
          </div>
          <div className="suggestion-6734">
            <h5 className="services-5343">
              {" "}
              Have any question/query in mind?{" "}
            </h5>
            <img src={rb_2} />
            <textarea placeholder="Write your query..."></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
