import React from "react";
function Footer(props) {
  return (
    <footer>
      <div>
        <div>
          <img
            src="/images/fiscal.jpg"
            weight="70px"
            height="70px"
            alt="fiscal"
          />
          <section className="redes">
            <h4 className="h4">Seguinos</h4>
            <ul>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google"></i>
              </a>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
