/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const fs = require("node:fs/promises")
const path = require("node:path")
const { glob } = require("glob")

const PHP = `<?php
session_set_cookie_params(["SameSite" => "Strict"]);
session_start();
?>
`

const main = async () => {
  const result = await glob(path.join(__dirname, "build", "**", "index.html"), {
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

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
