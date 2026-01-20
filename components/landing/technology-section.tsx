export function TechnologySection() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Battle-Tested Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built on technologies trusted by enterprises worldwide. Designed for
            reliability, scalability, and performance.
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <TechBadge name=".NET 10" description="Backend" />
          <TechBadge name="React" description="Frontend" />
          <TechBadge name="PostgreSQL" description="Database" />
          <TechBadge name="Kafka" description="Messaging" />
          <TechBadge name="Docker" description="Deployment" />
          <TechBadge name="Kubernetes" description="Orchestration" />
        </div>

        {/* Enterprise features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <EnterpriseFeature
            title="99.9% Uptime"
            description="SLA-ready architecture with built-in redundancy"
          />
          <EnterpriseFeature
            title="SOC 2 Ready"
            description="Security controls for enterprise compliance"
          />
          <EnterpriseFeature
            title="Global Scale"
            description="Multi-region deployment support"
          />
          <EnterpriseFeature
            title="24/7 Support"
            description="Enterprise support plans available"
          />
        </div>

        {/* Powered by Actaer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a
              href="https://www.actaer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Actaer
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function TechBadge({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-muted/50 border border-border/50">
      <span className="font-semibold">{name}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  );
}

function EnterpriseFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
