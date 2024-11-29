import { Link } from "react-router"
import { DOMAIN } from "~/constants"
import "./Projects.scss"

export function Projects() {
  return (
    <div className="Projects">
      <Link to={`https://force.${DOMAIN}`}>FORCE - The Force Project</Link>
      <Link to="https://pub.dev/packages/dart_lapack">Dart LAPACK</Link>
      <Link to="https://pub.dev/packages/bezier_kit">bezier_kit - Dart package for Bezier curves</Link>
      <p className="disabled">lz4 (TBP)</p>
      <p className="disabled">miniz (TBP)</p>
      <p className="disabled">async_protobuf (TBP)</p>
    </div>
  )
}
