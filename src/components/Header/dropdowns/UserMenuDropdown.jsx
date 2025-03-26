import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <Link to="/orders" className="flex items-center gap-3 text-[17px] pl-1.5 pr-6 py-2 font-medium"><img src="/src/assets/images/orders.svg" alt="orders logo" width={24} height={24} />Мои заказы</Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/login" className="flex items-center gap-3 text-[17px] pl-1.5 pr-6 py-2 font-medium"><img src="/src/assets/images/login.svg" alt="login logo" width={24} height={24} />Войти</Link>
    ),
  },
];

export default function UserMenuDrop() {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div>
        <Space>
          <div className="bg-[#f6f8f9] rounded py-3 px-3">
            <img src="/src/assets/images/profile.svg" alt="profile logo" width={24} height={24} />
          </div>
        </Space>
      </div>
    </Dropdown>
  );
}
