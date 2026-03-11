export default function Footer() {
  return (
    <footer
      className="text-center py-6 px-6"
      style={{ borderTop: "0.5px solid var(--border-light)" }}
    >
      <p className="text-xs text-t-tertiary">
        Designed & built by Daniel Arackal · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
