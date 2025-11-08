export default function Footer() {
  return (
    <footer className="footer text-sm text-[#2e2e2e] sm:footer-horizontal footer-center text-base-content p-4 text-center">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ReLeaf
          Ltd
        </p>
      </aside>
    </footer>
  );
}
