export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} My Site. All rights reserved.</p>
      </div>
    </footer>
  );
}
