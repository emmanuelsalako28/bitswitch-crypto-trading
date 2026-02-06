import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold mb-3">
              <img src={logo} alt="Bitswitch logo" className="h-7 w-7 object-contain" />
              <span>Bit</span>
              <span className="text-gradient-orange">switch</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The modern platform for digital asset trading. Fast, secure, simple.
            </p>
          </div>

          {[
            { title: "Product", links: ["Trade", "Markets", "Wallet", "API"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["Help Center", "Contact", "Status", "Legal"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Bitswitch. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
