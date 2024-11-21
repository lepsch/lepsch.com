import type { LinksFunction } from "react-router"
import { canonicalPath } from "~/canonical-path"
import { Contacts, Page } from "~/componets"
import { BASE_URL } from "~/constants"
import "./styles.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.contact}` }]

function ContactPage() {
  return (
    <Page className="Contact">
      <Contacts />
    </Page>
  )
}

export default ContactPage
