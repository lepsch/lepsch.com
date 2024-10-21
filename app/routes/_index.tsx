import { Link } from "react-router"
import { Contacts, Page, Projects } from "~/componets"
import { canonicalPath } from "~/canonical-path"
import "./styles.scss"

function HomePage() {
  return (
    <Page className={"Home"}>
      <section>
        <h2>
          <Link to={canonicalPath.projects}>My projects</Link>
        </h2>
        <Projects />
      </section>

      <section>
        <h2>
          <Link to={canonicalPath.about}>About</Link>
        </h2>
        <p>Know a bit more about me</p>
      </section>

      <section>
        <h2>
          <Link to={canonicalPath.contact}>Contact</Link>
        </h2>
        <Contacts />
      </section>
    </Page>
  )
}

export default HomePage
