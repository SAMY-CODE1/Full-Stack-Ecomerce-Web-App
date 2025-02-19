import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../../public/assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
function product() {
  const { productId } = useParams();
  const { currency } = useContext(ShopContext);
  console.log(productId);
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const fetchProductData = () => {
    const prod = products.find((item) => item._id === productId);
    if (prod) {
      setProductData(prod);
    }
  };
  const [RelatedProducts, setRelatedProducts] = useState([]);
  const findReletedProduct = () => {
    if (!productData.category) return;
    const releted = products.filter(
      (p) =>
        p.category === productData.category &&
        p._id !== productId &&
        p.subCategory === productData.subCategory 
    );
    if (releted) {
      setRelatedProducts(releted);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  useEffect(() => {
    findReletedProduct();
  }, [productData]);
  const [selectedSize, setSelectedSize] = useState(null);
  // const handelSelectedSize = (e) => {
  //   setSelectedSize(e);
    console.log(selectedSize);
  // };
  const [addToCart, setAddToCart] = useState();
  const handelAddToCrt = () => {
    setAddToCart();
  };
  return (
    <div className="flex flex-col gap-8 pt-9 pb-8">
      {/* first element */}
      <div className="grid  sm:grid-cols-[1.5fr_5fr_7fr] flex-col  justify-between sm:justify-normal ">
        <div>
          <img
            src={productData.image}
            alt="first-img"
            className=" pt-4 sm:pt-0 sm:pr-4"
          />
        </div>
        <div>
          <img
            src={productData.image}
            alt="secend-img "
            className="pt-4 sm:pt-0 sm:pr-6 hidden sm:block "
          />
        </div>
        <div className="flex flex-col ml-4 gap-6 items-start justify-center ">
          <div>
            <p className="text-2xl pb-3">{productData.name}</p>
            <div className="flex flex-row items-center ">
              <div className="flex flex-row">
                {[...Array(4)].map((_, i) => (
                  <img
                    className="w-3 h-3"
                    key={i}
                    src={assets.star_icon}
                    alt="assets.star_icon"
                  />
                ))}
              </div>

              <img
                className="w-3 h-3"
                src={assets.star_dull_icon}
                alt="assets.star_dull_icon"
              />
              <p className="pl-2">(122)</p>
            </div>
          </div>
          <p className="text-3xl">
            {" "}
            {currency} {productData.price}
          </p>
          <p className="text-gray-500 font-light">{productData.description}</p>
          <div>
            <p>Select Size </p>
            <div>
              {productData.sizes?.map((item, index) => (
                <button
                  className={` px-3 py-1.5   border-[0.5px] m-1 bg-slate-50 ${
                    selectedSize === item ? "border-red-600" : "border-gray-200"
                  } `}
                  onClick={() => setSelectedSize(item) }
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="border-[1px] border-black px-4 py-3 font-light text-black hover:bg-black hover:text-white transition-all ease-in-out text-sm">
            ADD TO CART
          </button>
          <hr className=" border-[0.5px] border-gray-200 w-full" />
        </div>
      </div>
      <div className="flex flex-col w-auto font-light text-gray-400 items-end  ">
        <p>100% Original product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>

      <div>
        {/* duscription */}
        <div className="flex   items-center  mt-10">
          <p className="p-4 font-semibold border-[0.5px] border-gray-400 border-b-0 ">
            Description
          </p>
          <p className="font-light p-4  border-[0.5px] border-gray-400 border-l-0 border-b-0">
            Reviews (122)
          </p>
        </div>
        <div className="border-[0.5px] border-gray-400 p-5 gap-3 flex flex-col ">
          <p className="text-gray-500  ">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="text-gray-500   ">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col gap-5  ">
        {/* related product */}
        <div className="flex items-center gap-2 text-[#414141]">
          <p className="font-semibold text-2xl ">
            <span className="font-extralight text-gray-500 ">RELATED </span>{" "}
            PRODUCTS
          </p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]" />
        </div>

        <div className="grid lg:grid-cols-5 md:grid-col-3 sm:grid-cols-3 grid-cols-1 gap-6 justify-items-center ">
          {/* problrm is her */}
          {RelatedProducts.map((p, index) => (
            <ProductItem
              image={p.image}
              key={index}
              name={p.name}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default product;
