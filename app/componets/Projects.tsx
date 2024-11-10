import { Link } from "react-router"
import "./Projects.scss"

export function Projects() {
  return (
    <div className="Projects">
      <Link to="https://force.lepsch.com">FORCE - The Force Project</Link>
      <p className="disabled">Dart Lapack (TBP)</p>
      <p className="disabled">bezier_kit (TBP)</p>
      <p className="disabled">lz4 (TBP)</p>
      <p className="disabled">miniz (TBP)</p>
      <p className="disabled">async_protobuf (TBP)</p>
    </div>
  )
}
