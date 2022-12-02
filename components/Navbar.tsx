import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles["menu-container"]}>
      { /**e 
       *en el map podemos usar el objeto menuITem y no destructurado
       *menuItem.href
       */}
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
