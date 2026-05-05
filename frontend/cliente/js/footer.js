const footerTemplate = `
<footer class="footer">
  <div class="container">
    <p>&copy; 2026 EV Manutenção - Ar Condicionado. Todos os direitos reservados.</p>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.innerHTML = footerTemplate;
  }
});