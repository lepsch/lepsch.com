import { Link } from "react-router"
import "./Contacts.scss"

export function Contacts() {
  return (
    <div className="Contacts">
      <Link to="https://github.com/lepsch">GitHub</Link>
      <Link to="mailto:lepsch@gmail.com">Email</Link>
      <Link to="https://www.linkedin.com/in/lepsch/">LinkedIn</Link>
    </div>
  )
}
