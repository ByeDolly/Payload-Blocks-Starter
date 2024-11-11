import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import { cn } from "@/utilities/tailwindMerge"

const navigation = {
  solutions: {
    name: 'Solutions',
    items: [
      { name: 'Analytics', href: '/analytics', description: 'Get insights into your business performance' },
      { name: 'Automation', href: '/automation', description: 'Streamline your workflow processes' },
      { name: 'Security', href: '/security', description: 'Protect your business with enterprise security' },
      { name: 'Integration', href: '/integration', description: 'Connect with your favorite tools' },
    ],
  },
  company: {
    name: 'Company',
    items: [
      { name: 'About', href: '/about', description: 'Learn more about our mission and values' },
      { name: 'Blog', href: '/blog', description: 'Read our latest news and articles' },
      { name: 'Careers', href: '/careers', description: 'Join our growing team' },
      { name: 'Press', href: '/press', description: 'Latest news and media coverage' },
    ],
  },
  resources: {
    name: 'Resources',
    items: [
      { name: 'Documentation', href: '/docs', description: 'Start integrating our products' },
      { name: 'Help Center', href: '/help', description: 'Get help from our support team' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Partners', href: '/partners', description: 'Join our partner ecosystem' },
    ],
  },
  pricing: {
    name: 'Pricing',
    href: '/pricing',
  },
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-gray-50 hover:text-gray-900",
            "focus:bg-gray-50 focus:text-gray-900 focus:outline-none",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1.5">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white supports-[backdrop-filter]:bg-white/95 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Your Brand</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {Object.values(navigation).map((section) => (
                <NavigationMenuItem key={section.name}>
                  {section.items ? (
                    <>
                      <NavigationMenuTrigger>{section.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {section.items.map((item) => (
                            <ListItem
                              key={item.name}
                              title={item.name}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={section.href} legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {section.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex">Get Started</Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2">
                  {Object.values(navigation).map((section) => (
                    section.items ? (
                      <Accordion key={section.name} type="single" collapsible className="w-full">
                        <AccordionItem value={section.name}>
                          <AccordionTrigger className="text-sm">{section.name}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2">
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="text-sm text-bg-gray-100-foreground hover:text-primary"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={section.name}
                        href={section.href}
                        className="flex h-10 items-center text-sm hover:text-primary"
                      >
                        {section.name}
                      </Link>
                    )
                  ))}
                </div>
                <Button className="mt-6 w-full">Get Started</Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 