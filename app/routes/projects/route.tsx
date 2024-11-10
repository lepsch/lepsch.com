import type { LinksFunction } from "react-router"
import { canonicalPath } from "~/canonical-path"
import { Page, Projects } from "~/componets"
import "./styles.scss"

export const links: LinksFunction = () => [
  { rel: "canonical", href: `https://www.lepsch.com${canonicalPath.projects}` },
]

function ProjectsPage() {
  return (
    <Page className="Projects">
      <Projects />
    </Page>
  )
}

export default ProjectsPage
