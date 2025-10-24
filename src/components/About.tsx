const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Universal Palm Tree Women UK is a pioneering company spun out of the NGO{" "}
              <a href="https://uptw1.org"><span className="text-primary font-semibold">Universal Palm Tree Women</span></a>, 
              dedicated to the betterment of women and family across the world.
            </p>
            <p>
              Working hand-in-hand with our NGO partner and the DRC Government, we create 
              sustainable investment opportunities that empower women and family transform communities 
              through strategic initiatives in key sectors.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4">
              Together, we're building a future where women and family lead the way in economic development 
              and social progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
