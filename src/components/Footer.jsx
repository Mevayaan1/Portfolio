export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-6 lg:px-12 pb-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="border-t border-white/20 mb-6" />
        <div className="flex items-center justify-between">
          <p className="font-primary text-s text-neutral-500/70">
            "Clean code. Real products. Zero shortcuts."
          </p>
          <p className="font-primary text-s text-neutral-500/70">
            © {new Date().getFullYear()} Ayaan Mev Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}