import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen">
      <nav className="fixed left-0 top-6 z-40 flex h-10 w-full justify-between px-6 md:px-12">
        <Link
          href={"/"}
          className="flex items-center justify-center rounded-full bg-white px-6 py-1 font-instrument-serif text-xl italic hover:bg-opacity-90"
        >
          JJ scrive...
        </Link>

        <Link href={"/"} className="hover:underline">
          ← Torna alla home
        </Link>
      </nav>

      <section className="mx-auto mt-32 max-w-[800px] px-4">
        <h1>Ultimi post</h1>
      </section>
    </main>
  );
}
