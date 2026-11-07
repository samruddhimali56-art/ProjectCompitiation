import React from "react";

const FooterSocials = () => {
  return (
    <div className="footer-social-section">

      <h3>Connect</h3>

      <p className="social-text">
        Follow EraFlow and explore India's stories.
      </p>

      <div className="social-links">

        {/* Instagram */}
        <a
          href="#"
          aria-label="Instagram"
          className="social-icon"
        >
          <svg viewBox="0 0 24 24">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              className="social-dot"
            />
          </svg>
        </a>


        {/* YouTube */}
        <a
          href="#"
          aria-label="YouTube"
          className="social-icon"
        >
          <svg viewBox="0 0 24 24">
            <path d="M21 8s-.2-1.4-.8-2C19.5 5.2 18.7 5.2 18.3 5.1 15.7 5 12 5 12 5s-3.7 0-6.3.1c-.4.1-1.2.1-1.9.9C3.2 6.6 3 8 3 8s-.2 1.7-.2 3.4v1.2C2.8 14.3 3 16 3 16s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.2.1 6.2.1s3.7 0 6.3-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.7.2-3.4v-1.2C21.2 9.7 21 8 21 8z" />

            <polygon points="10,9 16,12 10,15" />
          </svg>
        </a>


        {/* Facebook */}
        <a
          href="#"
          aria-label="Facebook"
          className="social-icon"
        >
          <svg viewBox="0 0 24 24">
            <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1z" />
          </svg>
        </a>


        {/* X */}
        <a
          href="#"
          aria-label="X"
          className="social-icon"
        >
          <svg viewBox="0 0 24 24">
            <path d="M5 4l14 16M19 4L5 20" />
          </svg>
        </a>

      </div>

    </div>
  );
};

export default FooterSocials;