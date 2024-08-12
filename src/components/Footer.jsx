const Footer = () => {
return (
    <footer className="bg-gray-800 text-white py-6 h-28 dark:bg-gray-900">
        <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400 dark:text-gray-500">&copy; 2024 Voting App. All rights reserved.</p>
        <nav className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 mx-2">Terms of Service</a>
          <a href="/contact" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 mx-2">Contact Us</a>
        </nav>
      </div>
    </footer>
);
};

export default Footer;
