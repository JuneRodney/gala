"use client";
import Link from "next/link";

export default function NewPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>Delete user using rpc</button>
      <Link href="/users">Users</Link>
    </main>
  );
}
