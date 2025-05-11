import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

export default function CookiesPolicy() {
  return (
    <div className="bg-background min-h-screen">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16"
      >
        <motion.h1 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Cookies Policy
        </motion.h1>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="max-w-4xl mx-auto bg-card/50 rounded-xl p-8 shadow-lg border border-gray-800"
        >
          <div className="prose prose-invert prose-slate max-w-none">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>1. Introduction</h2>
            <p>
              This Cookies Policy explains what cookies are and how ChronoCoder ("we," "our," or "us") uses them on our website. We encourage you to read this policy in order to understand what types of cookies we use, what information we collect using cookies and how that information is used.
            </p>
            
            <h2>2. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you have been to the website before. Cookies are a very common web technology; most websites use cookies and have done so for years. Cookies are widely used to make websites work more efficiently, as well as to provide information to the owners of the website.
            </p>
            <p>
              Cookies are used to measure which parts of the website users visit and how they interact with the content. They also allow us to remember your user preferences, improving your future visits.
            </p>
            
            <h2>3. How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are necessary for technical reasons; some enable a personalized experience for both visitors and registered users; and some allow the display of advertising from selected third party networks. Some of these cookies may be set when a page is loaded, or when a visitor takes a particular action on the website. Many of the cookies we use are only set if you are a registered user, while others are set for all visitors.
            </p>
            
            <h2>4. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work.
            </p>
            
            <h3>Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
            </p>
            
            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
            </p>
            
            <h3>Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
            </p>
            
            <h2>5. How to Control and Delete Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>
            
            <p>Find out how to manage cookies on popular browsers:</p>
            <ul>
              <li><a href="https://support.google.com/accounts/answer/61416" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari (on Mac)</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari (on iOS)</a></li>
            </ul>
            <p>
              To opt out of being tracked by Google Analytics across all websites, visit <a href="http://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p>
              Please be aware that restricting cookies may impact the functionality of our website.
            </p>
            
            <h2>6. California Consumer Privacy Act (CCPA) Compliance</h2>
            <p>
              Under the CCPA, California residents have the right to opt-out of the "sale" of their personal information. While we do not directly sell your personal information in the traditional sense, the CCPA's definition of "sale" may include certain data sharing practices for advertising. Our use of cookies for advertising purposes may be considered a "sale" under the CCPA.
            </p>
            <p>
              If you are a California resident, you have the right to:
            </p>
            <ul>
              <li>Know what personal data is being collected about you</li>
              <li>Know whether your personal data is sold or disclosed and to whom</li>
              <li>Say no to the sale of personal data</li>
              <li>Access your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Not be discriminated against for exercising your privacy rights</li>
            </ul>
            <p>
              To exercise your rights under the CCPA, please contact us at contact@chronocoder.dev.
            </p>
            
            <h2>7. Changes to Our Cookies Policy</h2>
            <p>
              We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page. You are advised to review this Cookies Policy periodically for any changes.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our Cookies Policy, please contact us:
            </p>
            <p>
              Email: contact@chronocoder.dev<br />
              Phone: +1 (302) 308-5960
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex justify-center mt-8"
        >
          <a 
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-200"
          >
            Back to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}