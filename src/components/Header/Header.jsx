import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressDropdown from "./dropdowns/AddressDropdown";
import LanguageDropdown from "./dropdowns/LanguageDropdown";
import UserMenuDropdown from "./dropdowns/UserMenuDropdown";
import { Button, Drawer } from "antd";
import axios from "axios";

export default function Header() {
  const [cartItems, setCartItems] = useState([]);
  const [cost, setCost] = useState(0);
  const [clear, setClear] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const getProducts = async () => {
    setCartItems([]);
    try {
      let response = await axios.get("http://localhost:5174/products");

      if (!response) {
        throw new Error("Error while getting response");
      }
      response.data.forEach((value) => {
        if (JSON.parse(localStorage.getItem("cart")).includes(value.id)) {
          setCartItems((state) => [...state, value]);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [clear]);

  const deleteProduct = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    const updatedCart = JSON.parse(localStorage.getItem("cart")).filter(
      (id) => id !== product.id
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const totalCost = cartItems.reduce((sum, item) => {
      const cost = parseFloat(item.cost.replace(/\s/g, "") || 0);
      return sum + cost;
    }, 0);
    setCost(totalCost);
  }, [cartItems]);

  return (
    <React.Fragment>
      <header className="bg-white shadow-header py-6 font-inter leading-[18px]">
        <div className="container max-w-[1360px] w-full">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src="/src/assets/images/evos.svg"
                alt="evos logo"
                width={110}
                height={48}
              />
            </Link>
            <nav className="mx-6">
              <ul className="flex items-center gap-4">
                <li>
                  <Link to="/branches">Филиалы</Link>
                </li>
                <li>
                  <Link to="/vacancy">Вакансии</Link>
                </li>
                <li>
                  <Link to="/news">Новости</Link>
                </li>
                <li>
                  <Link to="/about">О нас</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                  <Link to="/certificates">Сертификаты</Link>
                </li>
              </ul>
            </nav>
            <button className="bg-[#ff0000] text-white text-[17px] font-medium w-[120px] py-4 rounded">
              <Link to="/promo">Акция</Link>
            </button>
            <AddressDropdown />
            <Button
              type="text"
              className="flex items-center font-medium bg-[#f6f8f9] py-6 px-3 rounded gap-2 text-[17px]"
              onClick={showDrawer}
            >
              <img
                src="/src/assets/images/bag.svg"
                alt="basket"
                width={24}
                height={24}
                className="relative top-[-1px]"
              />
              Корзина
            </Button>
            <Drawer width={600} onClose={onClose} open={open}>
              <div className="flex items-center justify-between border-b-2 border-[#e0e0e0] pb-4 mb-5">
                <h4 className="text-[22px] font-550 leading-[28px] tracking-[0.35px]">
                  Ваш заказ
                </h4>
                <button
                  className="text-red-600 font-550 text-[20px]"
                  onClick={() => {
                    localStorage.clear();
                    setOpen(false);
                    setClear(true);
                  }}
                >
                  Очистить корзину
                </button>
              </div>
              <ul className="h-[1040px] overflow-scroll">
                {cartItems.map((value) => {
                  return (
                    <li
                      key={value.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center w-[80%]">
                        <span onClick={() => deleteProduct(value)}>
                          <img
                            src="/src/assets/images/bin.svg"
                            alt="bin icon"
                          />
                        </span>
                        <img
                          src={value.imgPath}
                          alt={value.name}
                          width={109}
                          height={100}
                        />
                        <p className="text-[17px] font-medium tracking-[0.00938em] text-black truncate">
                          {value.name}
                        </p>
                      </div>
                      <span className="text-[#077855] text-[20px] font-bold leading-[25px] tracking-[0.38px]">
                        {value.cost} сум
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between">
                <p className="text-[28px] leading-[34px] font-bold relative end">
                  Итого
                </p>
                <span className="text-[#077855] text-[28px] leading-[34px] font-bold">
                  {cost.toLocaleString()} сум
                </span>
              </div>
              <button className="bg-[#077855] text-white text-[17px] tracking-[.41px] w-[100%] py-5 rounded mt-5">
                Оформить заказ
              </button>
            </Drawer>
            <LanguageDropdown />
            <UserMenuDropdown />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
