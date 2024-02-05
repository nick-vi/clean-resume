export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-12 w-a4 min-h-a4 bg-white mx-auto space-y-4">
      {children}
    </main>
  );
}
