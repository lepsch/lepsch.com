import { Link } from "react-router"
import "./Projects.scss"

export function Projects() {
  return (
    <div className="Projects">
      <p>DLAPACK - Dart Lapack</p>
      <p>bezier_kit</p>
      <p>lz4</p>
      <p>miniz</p>
      <p>async_protobuf</p>
      <Link to="https://force.lepsch.com">FORCE - The Force Project</Link>
    </div>
  )
}
