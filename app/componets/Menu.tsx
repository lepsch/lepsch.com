import { NavLink } from "react-router"
import { canonicalPath, type CanonicalPath } from "~/canonical-path"
import "./Menu.scss"

const menus: Record<CanonicalPath, { label: string }> = {
  home: { label: "Home" },
  projects: { label: "Projects" },
  about: { label: "About" },
  contact: { label: "Contact" },
}

declare global {
  interface ObjectConstructor {
    keys<T>(o: T): (keyof T)[]
    // @ts-ignore
    entries<U, T>(o: { [key in T]: U } | ArrayLike<U>): [T, U][]
  }
}

export function Menu() {
  return (
    <nav className="Menu">
      <ul className="menu-content">
        {Object.entries(menus).map(([name, { label }]) => (
          <li key={name} className="menu-item">
            <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to={canonicalPath[name]}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
