export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} ChronoCoder. Building the decentralized future, one block at a time.
        </p>
      </div>
    </footer>
  );
}
