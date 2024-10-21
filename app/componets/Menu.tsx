import { NavLink } from "react-router"
import { canonicalPath, type CanonicalPath } from "~/canonical-path"
import "./Menu.scss"

const menus: Record<CanonicalPath, { label: string }> = {
  home: { label: "Home" },
  projects: { label: "Projects" },
  about: { label: "About" },
  contact: { label: "Contact" },
}

export function Menu() {
  return (
    <nav className="Menu">
      <ul className="menu-content">
        {Object.entries(menus).map(([name, { label }]) => (
          <li key={name} className="menu-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={canonicalPath[name as CanonicalPath]}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
