import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <VantumLogo className="h-6 w-6" />
              <span className="text-lg font-bold">Vantum</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Enterprise distribution ERP built for scale.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#modules"
                  className="hover:text-foreground transition-colors"
                >
                  Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/releases"
                  className="hover:text-foreground transition-colors"
                >
                  Release Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.actaer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  About Actaer
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.actaer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Actaer
            </a>
            . All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Powered by Actaer</p>
        </div>
      </div>
    </footer>
  );
}

function VantumLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 0L150 0L300 400L200 540L0 0Z" className="fill-primary" />
      <path d="M350 0L500 0L600 540L400 200L350 0Z" className="fill-primary" />
    </svg>
  );
}
