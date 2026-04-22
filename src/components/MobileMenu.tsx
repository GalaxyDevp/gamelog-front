import { Link, useNavigate } from "react-router";
import kaelix from "../assets/images/kaelixDebonair.jpg";

interface NavItem {
  label: string;
  href: string;
}
type Props = {
  items: NavItem[];
  close: () => void;
};

const MobileMenu = ({ items, close }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <div
            className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer"
            onClick={() => {
              navigate("/profile");
              close();
            }}
          >
            <img src={kaelix} className="w-14 h-14 rounded-full" />
            <div className="flex flex-col">
              <p className="text-2xl font-bold">Kaelix</p>
              <p className="text-sm text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li>
              <Link to={item.href} onClick={close}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;
