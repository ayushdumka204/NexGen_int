import ServicesPage from "./_components/ServicesPage";

export const metadata = {
  title: "Services | NexGen Market Research",
  description:
    "Comprehensive market research services tailored for your business growth.",
};

export default function page() {
  return (
    <main className="bg-white">
      <ServicesPage />
    </main>
  );
}