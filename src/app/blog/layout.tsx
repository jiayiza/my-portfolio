import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <nav className="relative top-6 flex h-10 w-full justify-between px-6 md:px-12">
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

      <div className="mx-auto mt-16 max-w-[700px] px-4">{children}</div>
    </main>
  );
}
