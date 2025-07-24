import { useTheme } from "next-themes";

const Logo = ({ className = "h-48" }: { className?: string }) => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/lovable-uploads/path-to-dark-mode-logo.png"
      : "/lovable-uploads/path-to-light-mode-logo.png";

  return (
    <img
      src={logoSrc}
      alt="CRAITES Logo"
      className={className}
    />
  );
};

export default Logo;