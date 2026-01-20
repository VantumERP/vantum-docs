import {
  Users,
  Contact,
  Handshake,
  Package,
  Warehouse,
  GitBranch,
  Bell,
  AlertTriangle,
  Settings,
} from "lucide-react";

const modules = [
  {
    icon: Users,
    name: "User Management",
    description: "Roles, permissions, and RBAC",
  },
  {
    icon: Contact,
    name: "Contacts",
    description: "Contact and address management",
  },
  {
    icon: Handshake,
    name: "Partnerships",
    description: "Partner relationship tracking",
  },
  {
    icon: Package,
    name: "Product Catalog",
    description: "Products, categories, and media",
  },
  {
    icon: Warehouse,
    name: "Inventory",
    description: "Locations, lots, and stock levels",
  },
  {
    icon: GitBranch,
    name: "Workflows",
    description: "Visual process automation",
  },
  {
    icon: Bell,
    name: "Notifications",
    description: "Multi-channel alerts and digests",
  },
  {
    icon: AlertTriangle,
    name: "Alert Management",
    description: "Incident tracking and webhooks",
  },
  {
    icon: Settings,
    name: "Configuration",
    description: "System settings and localization",
  },
];

export function ModulesSection() {
  return (
    <section id="modules" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Core Modules
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive modules covering every aspect of distribution
            operations, from inventory to customer relationships.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.name}
              className="group flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <module.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg">{module.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More modules coming */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              More modules in development: Sales, Purchasing, Finance, and more
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
