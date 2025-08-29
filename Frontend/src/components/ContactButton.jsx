import React from "react";

const ContactButton = () => {
  return (
    <a
      href="mailto:yourname@example.com"
      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-orange-600 hover:shadow-xl transition-all duration-300"
    >
      Contact Me
    </a>
  );
};

export default ContactButton;
