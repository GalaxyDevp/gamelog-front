import { Link } from "react-router";

interface NavItem {
  label: string;
  href: string;
}
const MobileMenu = ({ items }: { items: NavItem[] }) => {
  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;
