export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-6 a4:py-12 max-w-a4 min-h-a4 bg-white mx-auto space-y-4">
      {children}
    </main>
  );
}
