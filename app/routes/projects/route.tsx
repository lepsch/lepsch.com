import type { LinksFunction } from "react-router"
import { canonicalPath } from "~/canonical-path"
import { Page, Projects } from "~/componets"
import { BASE_URL } from "~/constants"
import "./styles.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.projects}` }]

function ProjectsPage() {
  return (
    <Page className="Projects">
      <Projects />
    </Page>
  )
}

export default ProjectsPage
