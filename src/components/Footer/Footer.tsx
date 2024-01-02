import React from "react";
import { Text } from "..";

const Footer = () => {
  return (
    <section className="pt-10 pb-8">
      <footer className="footer footer-center p-4">
        <Text variant="small-p" colorStyle="secondary" align="center">
          Designed and coded by yours truly. ❤️ <br />
          Built with Next.JS and Tailwind CSS, deployed with Vercel.
        </Text>
      </footer>
    </section>
  );
};

export default Footer;
