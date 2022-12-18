interface LinkProps {
  id: number;
  title: string;
  href: string;
}

export const links: LinkProps[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'About',
    href: '/about',
  },
  {
    id: 3,
    title: 'Translation',
    href: '/translation',
  },
  {
    id: 4,
    title: 'Donate',
    href: '/donate',
  },
];
