import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SectionWhyEvos from "../components/Home/SectionWhyEvos";
import SectionQuickOrder from "../components/Home/SectionQuickOrder";

export default function Home() {
  document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS"
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:5174/products");

      if (!response) {
        throw new Error("Error while getting response");
      }

      const categoriedProducts = response.data.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      }, {});

      setProducts(categoriedProducts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (e, id) => {
    e.preventDefault()

    let cartItems = JSON.parse(localStorage.getItem("cart") || JSON.stringify([]));
    cartItems.push(id)

    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  return (
    <React.Fragment>
      <main className="font-inter leading-[22px]">
        <section className="bg-[#32724e] text-white py-32">
          <div className="container max-w-[1360px] w-full">
            <div className="flex items-center justify-between">
              <div className="w-[530px]">
                <h1 className="leading-[50.6px] text-[40px] font-black">1 000 000 Подарков от EVOS!</h1>
                <div className="flex items-center gap-2 my-[25px]">
                  <img src="/src/assets/images/hero_icon1.svg" alt="hero icons" />
                  <img src="/src/assets/images/hero_icon2.svg" alt="hero icons" />
                  <img src="/src/assets/images/hero_icon3.svg" alt="hero icons" />
                  <img src="/src/assets/images/hero_icon4.svg" alt="hero icons" />
                  <img src="/src/assets/images/hero_icon5.svg" alt="hero icons" />
                </div>
                <p className="text-[18px] leading-[28.8px] font-normal tracking-[0.00938em]">Главные призы — Квартира в ЖК Darkhan Residence, Автомобиль Kia Sonet,  Свыше 100 подарков от сети магазинов idea, 6 путевок в Дубаи от партнера Uchar Bek и много призов от Uzum, TerraPro, Mark Formelle, AllPlay и многих других партнеров</p>
                <div className="flex flex-wrap items-center gap-4 mt-[45px] mb-[65px]">
                  <button className="text-[16px] font-semibold leading-[25px] border-2 rounded-md tracking-[0.00938em] w-[205px] h-[52px] transition-all duration-300 bg-[#259b07] border-[#71be5e]"><Link to="/">Наше меню</Link></button>
                  <button className="text-[16px] font-semibold leading-[25px] border-2 rounded-md tracking-[0.00938em] w-[205px] h-[52px] transition-all duration-300 bg-[#259b07] border-[#71be5e]"><Link to="/evosapp">APP Evos -&gt;</Link></button>
                  <button className="text-[16px] font-semibold leading-[25px] border-2 rounded-md tracking-[0.00938em] w-[205px] h-[52px] transition-all duration-300 bg-[#259b07] border-[#71be5e]"><Link to="/composition">Состав продукта</Link></button>
                  <button className="text-[16px] font-semibold leading-[25px] border-2 rounded-md tracking-[0.00938em] w-[205px] h-[52px] transition-all duration-300 hover:bg-[#259b07] border-[#749f87]"><Link to="/partners">Партнерам</Link></button>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img src="/src/assets/images/user1.svg" alt="user 1" width={52} height={52} />
                    <img src="/src/assets/images/user2.svg" alt="user 2" width={52} height={52} className="relative right-5" />
                    <img src="/src/assets/images/user3.svg" alt="user 3" width={52} height={52} className="relative right-9" />
                  </div>
                  <p className="text-[14px] leading-[22px] font-normal tracking-[0.00938em] relative right-4"><span className="font-bold">200K+</span> положительных отзывов каждый месяц</p>
                </div>
              </div>
              <img src="/src/assets/images/hero_img.png" alt="hero img" width={628} height={628} className="rounded-3xl" />
            </div>
          </div>
        </section>
        <section className="pt-[50px]">
          <div className="container max-w-[1360px] w-full">
            {Object.keys(products).map((category) => (
              <div key={category}>
                <h2 className="text-[40px] font-bold mb-[24px]">{category}</h2>
                <ul className="flex flex-wrap justify-start gap-8 pb-[48px]">
                  {products[category].map((product) => (
                    <li
                      key={product.id}
                      className="max-w-[300px] w-full bg-white py-4 hover:shadow-lg rounded transition-all duration-250"
                    >
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.imgPath}
                          alt={product.name}
                          className="w-[300px] h-[218px] object-cover"
                        />
                        <div className="flex flex-col mt-[20px] px-4">
                          <h3 className="truncate font-medium mb-[20px] text-[20px]">
                            {product.name}
                          </h3>
                          <p className="line-clamp-2 text-[#9aa6ac] font-medium text-[16px] leading-[18px] tracking-[0.08px] h-[36px] mb-[16px]">
                            {product.description}
                          </p>
                          <ins className="no-underline text-[#077855] text-[16px] font-bold tracking-[0.41px] mb-[35px]">
                            {product.cost} сум
                          </ins>
                          <button
                            className="bg-[#f6f8f9] text-[17px] text-medium hover:bg-[#ffcd00] transition-all duration-200 tracking-[0.15008px] py-3.5 rounded"
                            onClick={(e) => addToCart(e, product.id)}
                          >
                            В корзину
                          </button>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <SectionWhyEvos />
        <SectionQuickOrder />
      </main>
    </React.Fragment>
  );
}
