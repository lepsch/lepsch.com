import fs from "node:fs/promises"
import path from "node:path"
import { glob } from "glob"

const PHP = `<?php
session_set_cookie_params(["SameSite" => "Strict"]);
session_start();
?>
`

const main = async () => {
  const result = await glob(path.join(import.meta.dirname, "build", "**", "index.html"), {
    ignore: ["**/securimage/**", "**/tarteaucitronjs/**"],
  })
  for (const file of result) {
    console.log("Patching file", file)
    /** @type {string} */
    const contents = await fs.readFile(file, "utf8")
    await fs.writeFile(file, `${PHP}${contents}`)
    await fs.rename(file, file.replace("index.html", "index.php"))
  }
}

try {
  await main()
} catch (err) {
  console.error(err)
  process.exit(1)
}
