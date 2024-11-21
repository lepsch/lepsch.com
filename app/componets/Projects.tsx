import { Link } from "react-router"
import { DOMAIN } from "~/constants"
import "./Projects.scss"

export function Projects() {
  return (
    <div className="Projects">
      <Link to={`https://force.${DOMAIN}`}>FORCE - The Force Project</Link>
      <p className="disabled">Dart Lapack (TBP)</p>
      <p className="disabled">bezier_kit (TBP)</p>
      <p className="disabled">lz4 (TBP)</p>
      <p className="disabled">miniz (TBP)</p>
      <p className="disabled">async_protobuf (TBP)</p>
    </div>
  )
}
