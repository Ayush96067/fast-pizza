import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-400 bg-yellow-500 px-4 py-3 uppercase">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
export default Header;
