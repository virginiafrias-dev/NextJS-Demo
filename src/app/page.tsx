import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <p>Hola Mundo</p>
        <div>
          <Link href="/users"> Ver usuarios</Link>
        </div>
      </main>
    </div>
  );
}
