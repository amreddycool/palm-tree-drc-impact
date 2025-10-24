import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Partnerships", section: "partnerships" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 
              className="text-xl md:text-2xl font-bold text-foreground cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              Universal Palm Tree Women
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("/events")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Events
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation("/events")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Events
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
