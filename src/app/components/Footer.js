export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} FikeStore Inc.</p>
        <div className="flex gap-4 text-sm">
          <a href="#terms" className="hover:underline">Terms</a>
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
