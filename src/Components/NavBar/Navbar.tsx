"use client"
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import Image from 'next/image';
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
        <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://blog.slashgear.dev/angular-pokedex/pokemon-logo.jpg"
          width={100}
          height={100}
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
          theme={{floating:{header:"hover:none"}}}
          style={{backgroundImage:"none"}}
          label={<Avatar alt="User settings" img="https://images6.fanpop.com/image/photos/37700000/Pikachu-Fan-Art-pokemon-37703237-500-500.png" rounded/>}
        >
          <Dropdown.Header className='hover:bg-none'>
            <span className="block text-sm">
              {user.username}
            </span>
          </Dropdown.Header>
          <Dropdown.Item  href='/api/auth/logout'>
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


