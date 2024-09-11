import { DashboardTemplate } from "../../../components/templates/dashboard-template";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardTemplate>{children}</DashboardTemplate>
    </div>
  );
}
