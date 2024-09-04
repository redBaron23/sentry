import { RadialChart } from "@/components/atoms/charts/radial-chart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <RadialChart name="Server" value={95} />
    </main>
  );
}
