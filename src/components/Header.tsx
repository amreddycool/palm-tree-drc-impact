import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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

  const pageLinks = [
    { label: "Events", path: "/events" },
    { label: "Team", path: "/team" },
  ];

  const countries = [
    { label: "USA", path: "/countries/usa" },
    { label: "UK", path: "/countries/uk" },
    { label: "DRC", path: "/countries/drc" },
    { label: "South Africa", path: "/countries/south-africa" },
    { label: "Australia", path: "/countries/australia" },
    { label: "India", path: "/countries/india" },
  ];

  return (
    <header className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Universal Palm Tree Women" 
              className="h-12 cursor-pointer"
              onClick={() => handleNavigation("/")}
            />
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
            {pageLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Countries
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card z-50">
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.path}
                    onClick={() => handleNavigation(country.path)}
                    className="cursor-pointer"
                  >
                    {country.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              {pageLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Countries</p>
                {countries.map((country) => (
                  <button
                    key={country.path}
                    onClick={() => handleNavigation(country.path)}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left block w-full py-2"
                  >
                    {country.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
