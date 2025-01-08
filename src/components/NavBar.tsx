import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br/>
      <Link href="/auth/CreateUser">Create User</Link>
      <br/>
      <Link href="/findUser/GetAll">Find User</Link>
      <br/>
    </nav>
  )
}