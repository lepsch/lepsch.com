/* eslint-disable react/no-unescaped-entities */
import { Link, type LinksFunction } from "react-router"
import { canonicalPath } from "~/canonical-path"
import { Page } from "~/componets"
import osk from "~/assets/osk.png"
import msx from "~/assets/msx-expert.png"
import xt from "~/assets/pc-xt.png"
import "./styles.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `https://www.lepsch.com${canonicalPath.about}` }]

function AboutPage() {
  return (
    <Page className="About">
      <p>I'm a computer scientist and I'm in love with computers since I was a child.</p>
      <p>
        I think it all started with eletronics when I was 7 years old. I had an analogical and digital eletronics kit
        with a board where I connected wires between resistors, capacitors, transistors, and even chips to build a
        "circuit board". There were various simple experiments to learn the basics of eletronics but the misterious part
        for me was always the digital circuit board with all kinds of chips. I learned things like AND/OR/NOT/NAND/NOR
        logic gates, flip-flops and most of all about 0s and 1s.
      </p>
      <figure>
        <img src={osk} alt="Analogical and digital Occidental Schools Kit" />
        <figcaption>Analogical and digital Occidental Schools Eletronics Kit</figcaption>
      </figure>
      <p>
        The first time I saw a computer I was totally amazed. I was only 9 years old at the time and the computer an{" "}
        <Link to="https://en.wikipedia.org/wiki/MSX">MSX</Link> at my school. It was running a simple car-racing game
        two of my friends were playing. At some point they pressed a combination of keys that made the game stop and a
        screen with multiple lines of text showed up. They started typing something and then run the game again but now
        the car was a bit different. I asked them about what they did and, to my surprise, they said they created the
        entire game themselves. I was astonished. They told me that computers do what you command them to do and showed
        me the lines of code in more detail that made it all possible. That was the first time I was introduced to a
        programming language, the BASIC language. I never thought about how computers really worked before. For me they
        were magical machines that just worked. But that moment was going to mark my life forever.
      </p>
      <figure>
        <img src={msx} alt="MSX Expert Gradiente" />
        <figcaption>MSX Expert Gradiente</figcaption>
      </figure>
      <p>
        This spark made me start reading books about the BASIC language. I was not allowed to take them to school but I
        was eager to try out the things I was reading. The first opportunity I had I memorized a program of just 2 lines
        of code to try it out on the computer. Again, those 2 friends were using the machine and I asked them to write
        the 2 lines for me as I was not familiar with code editing yet. They wrote it for me and hit run. The screen was
        instantly filled with "HELLO WORLD!". And that was the first program I run in a computer.
      </p>
      <p>
        <pre dangerouslySetInnerHTML={{ __html: '10 PRINT "HELLO WORLD!"\n20 GOTO 10' }} />
      </p>
      <p>
        My first computer though was an <Link to="https://en.wikipedia.org/wiki/IBM_Personal_Computer_XT">PC-XT</Link>{" "}
        clone, a decade old already architecture. Clone because Brazil at that time was experiencing the end of what's
        is known as the{" "}
        <Link to="https://pt.wikipedia.org/wiki/Pol%C3%ADtica_Nacional_de_Inform%C3%A1tica">
          "Brazilian computer Market Reserve"
        </Link>
        . A time where importing computers was not allowed. All of it to promote the nacional industry and innovation
        but instead it backfired. After 6 years of its implementation, there was no innovation and most of the nacional
        computers were simply clones costing at least 2 or 3 times the original version.
      </p>
      <figure>
        <img src={xt} alt="PC-XT" />
        <figcaption>PC-XT</figcaption>
      </figure>
      <p>
        Anyway, I had 5¼ floppy drives, 256KB of RAM, no HDD, DOS 3,{" "}
        <Link to="https://en.wikipedia.org/wiki/GW-BASIC">GW-BASIC</Link>, and{" "}
        <Link to="https://archive.org/details/inputmagazine">dozens of books</Link> about programming in BASIC language
        at my hands. This was all I needed to learn programming in BASIC on my own. Since then it never stopped, the
        curiosity about computers kept me moving forward to learn more and more. An infinitude of languages, concepts,
        architectures, frameworks, books later and I'm still learning today. That's breathtaking!
      </p>
      <p>-- Guilherme</p>
    </Page>
  )
}

export default AboutPage
