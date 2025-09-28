# Resizable Navbar Component

This component is based on the Aceternity UI Resizable Navbar. It provides a responsive navigation bar that changes its appearance based on scroll position and screen size.

## Features

- Responsive design (works on both desktop and mobile)
- Scroll-aware behavior (changes appearance when scrolling)
- Smooth animations using Framer Motion
- Mobile menu with hamburger toggle
- Customizable navigation items

## Usage

```tsx
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/navbar";

export default function MyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      <NavBody visible={visible}>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={() => setVisible(false)} />
        <NavbarButton href="#" variant="primary">
          Get Started
        </NavbarButton>
      </NavBody>

      <MobileNav visible={visible}>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-full px-4 py-2 text-left text-neutral-600 dark:text-neutral-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="#"
            variant="primary"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
```

## Components

- `Navbar` - Main container component
- `NavBody` - Desktop navigation bar
- `NavItems` - Navigation links for desktop
- `MobileNav` - Mobile navigation container
- `MobileNavHeader` - Header for mobile navigation
- `MobileNavMenu` - Mobile menu dropdown
- `MobileNavToggle` - Hamburger menu toggle
- `NavbarLogo` - Logo component
- `NavbarButton` - Action button with variants

## Props

### Navbar Props

| Prop      | Type      | Description            |
| --------- | --------- | ---------------------- |
| children  | ReactNode | Child components       |
| className | string    | Additional CSS classes |

### NavItems Props

| Prop        | Type                           | Description                   |
| ----------- | ------------------------------ | ----------------------------- |
| items       | {name: string, link: string}[] | Navigation items              |
| className   | string                         | Additional CSS classes        |
| onItemClick | () => void                     | Callback when item is clicked |

### NavbarButton Props

| Prop      | Type                                             | Description                |
| --------- | ------------------------------------------------ | -------------------------- |
| href      | string                                           | Link URL                   |
| as        | React.ElementType                                | Element type (a or button) |
| children  | ReactNode                                        | Button content             |
| className | string                                           | Additional CSS classes     |
| variant   | "primary" \| "secondary" \| "dark" \| "gradient" | Button style variant       |
