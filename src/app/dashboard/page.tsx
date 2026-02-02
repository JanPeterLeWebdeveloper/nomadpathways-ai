import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  // Redirect to role-specific dashboards
  if (session.user.role === "nomadapprentice") {
    redirect("/dashboard/apprentice");
  } else if (session.user.role === "nomadpreneur") {
    redirect("/dashboard/preneur");
  } else if (session.user.role === "company") {
    redirect("/dashboard/company");
  }

  // Default fallback to login if role is unknown
  redirect("/login");
}
