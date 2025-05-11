import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </motion.h1>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="max-w-4xl mx-auto bg-card/50 rounded-xl p-8 shadow-lg border border-gray-800"
        >
          <div className="prose prose-invert prose-slate max-w-none">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to ChronoCoder ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              including any other media form, media channel, mobile website, or mobile application related or connected thereto 
              (collectively, the "Site").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>
            
            <h2>2. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we collect on the Site includes:
            </p>
            
            <h3>Personal Data</h3>
            <p>
              While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact 
              or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content when using our contact form</li>
            </ul>
            
            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, 
              access times, and the pages you have viewed directly before and after accessing the Site.
            </p>
            
            <h3>Mobile Device Data</h3>
            <p>
              Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, 
              if you access the Site from a mobile device.
            </p>
            
            <h2>3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Respond to your inquiries and contact requests.</li>
              <li>Send you a newsletter (if you opt in).</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Perform other business activities as needed.</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            
            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential 
              violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted 
              or required by any applicable law, rule, or regulation.
            </p>
            
            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, 
              data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken 
              reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security 
              measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other 
              type of misuse.
            </p>
            
            <h2>6. Your Rights Regarding Your Information</h2>
            <p>
              You have certain rights related to your personal information. You may:
            </p>
            <ul>
              <li>Request access to your personal information.</li>
              <li>Request correction of your personal information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Request restriction of processing of your personal information.</li>
              <li>Request the transfer of your personal information.</li>
              <li>Object to processing of your personal information.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at contact@chronocoder.dev.
            </p>
            
            <h2>7. California Privacy Rights</h2>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits users who are California residents to 
              request and obtain from us, once a year and free of charge, information about categories of personal information (if any) 
              we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared 
              personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a 
              request, please submit your request in writing to us at the contact information provided below.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              The Site is not intended for individuals under the age of 13. We do not knowingly collect or solicit any information from anyone 
              under the age of 13. If we learn that we have collected personal information from a child under age 13, we will delete that 
              information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact 
              us at the address provided below.
            </p>
            
            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and 
              the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to 
              be informed of how we are protecting your information.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
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