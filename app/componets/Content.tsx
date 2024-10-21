import type { PropsWithChildren } from "react"
import clsx from "clsx"
import "./Content.scss"

export function Content({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <main className={clsx("Content", className)}>{children}</main>
}
