import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Workflow,
  Building2,
  Activity,
  Server,
  Puzzle,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Industry Blueprints",
    description:
      "Declarative, versioned configuration bundles that adapt modules to specific industries—healthcare, manufacturing, retail, and more. No forking required.",
    large: true,
  },
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description:
      "Apps defined via JSON manifests with hot-reloading. Add, remove, or customize modules without touching core code.",
    large: false,
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop workflow automation with event-driven process execution. Build complex business logic visually.",
    large: false,
  },
  {
    icon: Building2,
    title: "Enterprise Multi-Tenancy",
    description:
      "Single-tenant or multi-tenant modes with secure isolation. Header-based, subdomain, or query param tenant resolution.",
    large: false,
  },
  {
    icon: Activity,
    title: "Built-in Observability",
    description:
      "First-class metrics, logging, and tracing with Prometheus, Loki, and Grafana integration out of the box.",
    large: false,
  },
  {
    icon: Server,
    title: "Battle-Tested Stack",
    description:
      ".NET 10 backend with CQRS + MediatR, React SPA, PostgreSQL, and Kafka. Technologies trusted by enterprises worldwide.",
    large: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Enterprise. Designed for Distribution.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to run modern distribution operations, backed by
            enterprise-grade infrastructure.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 ${
                feature.large ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
