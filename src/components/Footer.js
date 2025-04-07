import React from "react";

function Footer() {
  return (
    <div className="footer">
      {/* change py-5 to py-3 -> class="py-4 bg-dark */}
      <footer class="py-2 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Company Name 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
