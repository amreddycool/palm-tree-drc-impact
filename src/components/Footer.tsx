const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          <h3 className="text-2xl font-bold mb-2">Universal Palm Tree Women</h3>
          <p className="opacity-90 mb-4">
            Empowering Women and Family • Building Communities • Creating Sustainable Impact
          </p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Universal Palm Tree Women. All rights reserved.
          </p>
          <p className="text-sm opacity-75 mt-2">
            In partnership with Universal Palm Tree Women NGO and DRC Government
          </p>
          <p className="text-sm opacity-75 mt-2">
            <a href="https://uptw1.org" className="underline hover:text-secondary transition-colors">https://uptw1.org</a>
         </p>
        </div>
        <div>
           <p className="text-sm opacity-75 mt-2">
            Universal Palm Tree Women NGO, Kinshasa, DRC, Company Number: ****, Registered in ***
          </p> 
           <p className="text-sm opacity-75 mt-2">
            UNIVERSAL PALM TREE WOMEN USA LLC, USA, Company Number: CP 575 G (Rev.7-20) Registered in Virginia, USA.
          </p> 
           <p className="text-sm opacity-75 mt-2">
            Universal Palm Tree Women Australia,  Company Number: ****, Registered in ***
          </p> 
           <p className="text-sm opacity-75 mt-2">
            Universal Palm Tree Women UK LTD, Company Number: 16801676, Registered in England and Wales.
          </p>
          <p className="text-sm opacity-75 mt-2">
            <div>
              <a href="https://palmtreewomen.com" className="underline hover:text-secondary transition-colors">https://universalpalmtreewomen.com</a>
            
              
            </div>
          </p>
        </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
