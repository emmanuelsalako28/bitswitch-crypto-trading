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
              Bitswitch is a digital asset trading platform focused on delivering a reliable and user-friendly Bitcoin trading experience.
            </p>
          </div>

          {[
            { title: "Product", links: ["Trade", "Markets", "Wallet", "API"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            {
              title: "Support",
              links: ["Help Center", "Fees", "Security", "Contact Support"],
              extra: (
                <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="mailto:support@bitswitch.com" className="hover:text-primary transition-colors">support@bitswitch.com</a>
                  <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp: +234 803 582 6698</a>
                </div>
              )
            },
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
              {col.extra && col.extra}
            </div>
          ))}
        </div>

        <div className="border-t border-border py-8 text-xs text-muted-foreground leading-relaxed">
          <p className="mb-4">
            <strong>Disclaimer:</strong> Cryptocurrency trading involves risk. Prices may fluctuate, and users should trade responsibly.
          </p>
          <p>
            Bitswitch complies with all applicable AML/KYC regulations. User identity verification is required for all accounts to ensure a secure trading environment.
          </p>
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
