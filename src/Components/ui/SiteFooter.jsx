function SiteFooter() {
  return (
    <footer className="flex items-center justify-center py-6 text-xs text-neutral-500">
      © {new Date().getFullYear()} Rafael Januário
    </footer>
  );
}

export default SiteFooter;