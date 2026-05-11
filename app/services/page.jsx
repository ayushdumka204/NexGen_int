import ServicesPage from "./_components/ServicesPage";

export const metadata = {
  title: "Services | NexGen Market Research",
  description:
    "Qualitative & quantitative research, competitor analysis, surveys, data collection, B2B/B2C research, consulting & market insights services.",
};

export default function page() {
  return (
    <main className="bg-white">
      <ServicesPage />
    </main>
  );
}