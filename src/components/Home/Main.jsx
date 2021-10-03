export function Main({ children }) {
  return (
    <main className="flex flex-1 justify-center py-8 px-6 md:px-16">
      <div className="flex flex-1 flex-col max-w-screen-lg overflow-hidden">
        {children}
      </div>
    </main>
  );
}
