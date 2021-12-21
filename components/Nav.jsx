/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import NavStyles from "./styles/NavStyles"

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/shirts/clubs">
        <a>Clubs</a>
      </Link>
      <Link href="/shirts/national">
        <a>National</a>
      </Link>
      <Link href="/shirts/players">
        <a>Players</a>
      </Link>
      <Link href="/shirts/collections">
        <a>Collections</a>
      </Link>
      <Link href="/new-in">
        <a>New In</a>
      </Link>
    </NavStyles>
  )
}
