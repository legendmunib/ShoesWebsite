import { useLocation, useNavigate } from "react-router-dom";

function Buttons({ name }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active =
    (name === "All" && location.pathname === "/") ||
    location.pathname === `/${name}`;

  return (
    <div className="buttondiv">
      <button
        className={`button1 ${active ? "selected" : ""}`}
        onClick={() => navigate(name === "All" ? "/" : `/${name}`)}
      >
        {name}
      </button>
    </div>
  );
}

export default Buttons;
