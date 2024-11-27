import type { RouteConfig } from "@react-router/dev/routes"
import { flatRoutes } from "@react-router/fs-routes"

const routes: RouteConfig = flatRoutes({
  ignoredRouteFiles: ["**/*.scss"],
})

export default routes;
