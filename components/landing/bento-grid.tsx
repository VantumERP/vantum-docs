import { FileJson, Zap, Network, Terminal, Box } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export function BentoGrid() {
  return (
    <section className="container mx-auto max-w-7xl px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Manifest Driven Architecture - Spans 2 cols */}
        <Card className="md:col-span-2 shadow-none border bg-muted/40 hover:bg-muted/60 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <FileJson className="h-5 w-5" />
              </div>
              <CardTitle>Manifest Driven</CardTitle>
            </div>
            <CardDescription className="text-base">
              A single source of truth that links backend logic, frontend UI,
              and workflows together. The system auto-augments manifests during
              development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-card border p-4 font-mono text-xs text-muted-foreground shadow-sm">
              <pre className="overflow-x-auto">
                {`{
  "name": "Contacts",
  "routes": [
    {
      "path": "/api/contacts",
      "method": "GET",
      "permissions": ["Contacts.Read"]
    }
  ]
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* 2. Vertical Slice Architecture */}
        <Card className="shadow-none border bg-muted/40 hover:bg-muted/60 transition-colors">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-md bg-amber-500/10 p-2 text-amber-600 dark:text-amber-500">
                <Zap className="h-5 w-5" />
              </div>
              <CardTitle>Vertical Slices</CardTitle>
            </div>
            <CardDescription>
              Clean modular architecture with .NET 10 & React.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex items-center justify-between rounded bg-background p-3 text-sm font-medium border shadow-sm">
              <span>Back</span>
              <span className="text-muted-foreground font-mono text-xs">
                .NET 10
              </span>
            </div>
            <div className="flex items-center justify-between rounded bg-background p-3 text-sm font-medium border shadow-sm">
              <span>Front</span>
              <span className="text-muted-foreground font-mono text-xs">
                React 19
              </span>
            </div>
          </CardContent>
        </Card>

        {/* 3. Event-Driven Core */}
        <Card className="shadow-none border bg-muted/40 hover:bg-muted/60 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-md bg-blue-500/10 p-2 text-blue-600 dark:text-blue-500">
                <Network className="h-5 w-5" />
              </div>
              <CardTitle>Event-Driven</CardTitle>
            </div>
            <CardDescription>
              Robust messaging infrastructure powered by Wolverine & Kafka.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-2 py-4 text-xs font-medium text-muted-foreground">
              <span className="rounded border bg-background px-3 py-1.5">
                App A
              </span>
              <span className="text-primary/50">→</span>
              <span className="rounded border bg-primary/5 px-3 py-1.5 text-primary">
                Broker
              </span>
              <span className="text-primary/50">→</span>
              <span className="rounded border bg-background px-3 py-1.5">
                App B
              </span>
            </div>
          </CardContent>
        </Card>

        {/* 4. Vantum CLI */}
        <Card className="shadow-none border bg-muted/40 hover:bg-muted/60 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-md bg-green-500/10 p-2 text-green-600 dark:text-green-500">
                <Terminal className="h-5 w-5" />
              </div>
              <CardTitle>Vantum CLI</CardTitle>
            </div>
            <CardDescription>
              First-class CLI to scaffold apps and blueprints instantly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded bg-zinc-950 p-4 font-mono text-xs text-zinc-50 border border-zinc-900">
              <div className="flex items-center gap-2">
                <span className="text-green-500">$</span>
                <span>vantum generate app</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. AppKit */}
        <Card className="shadow-none border bg-muted/40 hover:bg-muted/60 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-md bg-purple-500/10 p-2 text-purple-600 dark:text-purple-500">
                <Box className="h-5 w-5" />
              </div>
              <CardTitle>AppKit</CardTitle>
            </div>
            <CardDescription>
              Declarative .NET attributes for seamless integration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded bg-background border px-3 py-2 font-mono text-xs text-muted-foreground shadow-sm">
              [AppBelongsTo(&quot;Sales&quot;)]
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
