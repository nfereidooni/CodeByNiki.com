import TopNav from "@/components/v2/TopNav";

export const metadata = {
  title: "Niki Fereidooni — v2",
  description: "Portfolio redesign v2 — nature-inspired, community-focused.",
};

export default function V2Layout({ children }) {
  return (
    <>
      <TopNav />
      <div className="w-full">{children}</div>
    </>
  );
}
