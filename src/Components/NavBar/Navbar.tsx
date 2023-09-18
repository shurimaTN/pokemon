"use client"
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

export default function PokeNavbar({user}:any) {
  return (
    <Navbar
      fluid
      rounded
      style={{position:"sticky"}}
    >
      <Navbar.Brand
        href="/"
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      {user &&  <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://images6.fanpop.com/image/photos/37700000/Pikachu-Fan-Art-pokemon-37703237-500-500.png" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>}
        {!user && <Navbar.Link href="/login">
          Log in
        </Navbar.Link>}
        {!user && <Navbar.Link href="/register">
            Register
        </Navbar.Link>}
      </Navbar.Collapse>
    </Navbar>
  )
}


