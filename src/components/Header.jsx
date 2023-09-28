import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div>Header</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
