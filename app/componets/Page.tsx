import type { PropsWithChildren } from "react"
import clsx from "clsx"
import { Menu } from "./Menu"
import { Content } from "./Content"
import { Footer } from "./Footer"
import "./Page.scss"

export function Page({ className, children }: PropsWithChildren<{ className?: string | undefined }>) {
  return (
    <div className={clsx("Page", className)}>
      <Menu key="menu" />
      <Content>{children}</Content>
      <Footer key="footer" />
    </div>
  )
}
