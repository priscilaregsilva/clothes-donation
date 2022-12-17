import { NavLink } from "react-router-dom";

const styleActive = ({ isActive }) => ({
  borderBottomColor: isActive ? "#ff6d12" : "#fff",
  borderTopColor: isActive ? "#ff6d12" : "#fff",
});

export function Menu() {
  return (
    <ul className="menu">
      <li>
        <NavLink to="/" style={styleActive}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" style={styleActive}>
          Sobre
        </NavLink>
      </li>

      <li>
        <NavLink to="/donative" style={styleActive}>
          Doação
        </NavLink>
      </li>

      <li>
        <NavLink to="/receivedonation" style={styleActive}>
          Receber Doação
        </NavLink>
      </li>
    </ul>
  );
}
