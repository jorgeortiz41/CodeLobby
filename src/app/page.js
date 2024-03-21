import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="dark flex flex-col justify-between p-4">
      <div className="flex justify-start pt-36">
        <Hero />
      </div>
    </main>
  );
}
