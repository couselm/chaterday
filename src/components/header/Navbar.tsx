import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '../ui/navigation-menu'
import { ThemeToggle } from '../theme/ThemeToggle'
import { LanguageSelector } from '../language-selector'

export default function Component() {
  const navLinks = [
    { name: 'Chat', href: '/' },
    { name: 'Profile', href: '/settings' },
  ]

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" prefetch={false}>
            <img src="assets/logo.png" alt="Chaterday Logo" className="h-10 w-10" />
          </Link>
          <div className="grid gap-6 py-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} prefetch={false}>
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <img src="assets/logo.png" alt="Chaterday Logo" className="h-10 w-10" />
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuLink key={link.name} asChild>
              <Link to={link.href} prefetch={false}>
                {link.name}
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-2">
        <Link to="/sign-in">
          <Button variant="outline">Sign in</Button>
        </Link>
        <Link to="/sign-up">
          <Button>Sign Up</Button>
        </Link>
        <Button size={'icon'} asChild className="rounded-full">
          <ThemeToggle />
        </Button>
        <LanguageSelector />
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
