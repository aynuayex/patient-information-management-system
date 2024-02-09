import { NavLink } from "react-router-dom";

export default function MainNav() {
  const routes = [
    {
      to: `/`,
      label: "Home",
    },
    {
      to: `/dashboard`,
      label: "Dashboard",
    },
  ];
  return (
    <nav className="flex items-center space-x-8 lg:space-x-32">
      {routes.map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary
            ${
              isActive ? "text-black dark:text-white" : "text-muted-foreground"
            }`
          }
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}
