import { Sparkles, Rocket, Zap, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: Zap,
    title: "Fast answers",
    description: "From architecture questions to quick demos, GrokBot keeps the team moving.",
  },
  {
    icon: Rocket,
    title: "Ships to App Platform",
    description: "This very page was built and deployed to DigitalOcean App Platform by GrokBot.",
  },
  {
    icon: Users,
    title: "Built for Solutions",
    description: "A teammate that helps customers get from idea to production on DigitalOcean.",
  },
]

export default function App() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,105,255,0.25),transparent_60%)]" />
      <main className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 sm:py-32">
        <Badge variant="outline" className="mb-6 gap-1.5 px-3 py-1 text-sm">
          <Sparkles className="size-3.5" />
          DigitalOcean Solutions Team
        </Badge>

        <h1 className="text-center text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Solutions team likes{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            GrokBot
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-muted-foreground text-pretty">
          A simple page from Alexis Reyes and the DigitalOcean Solutions team, built with
          shadcn/ui and served as a static site on App Platform.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.digitalocean.com/products/app-platform"
            className={buttonVariants({ size: "lg" })}
          >
            Explore App Platform
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={() => alert("GrokBot says hi to the Solutions team 👋")}
          >
            Say hi
          </Button>
        </div>

        <Separator className="my-20 max-w-xs" />

        <section className="grid w-full gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="bg-card/60 backdrop-blur">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-sky-400" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </section>

        <footer className="mt-24 text-sm text-muted-foreground">
          Made with GrokBot · Alexis Reyes · DigitalOcean Solutions
        </footer>
      </main>
    </div>
  )
}
