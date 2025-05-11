import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

export default function TermsOfService() {
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
          Terms of Service
        </motion.h1>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="max-w-4xl mx-auto bg-card/50 rounded-xl p-8 shadow-lg border border-gray-800"
        >
          <div className="prose prose-invert prose-slate max-w-none">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on ChronoCoder's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on ChronoCoder's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by ChronoCoder at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>
            
            <h2>3. Disclaimer</h2>
            <p>
              The materials on ChronoCoder's website are provided on an 'as is' basis. ChronoCoder makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, ChronoCoder does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
            
            <h2>4. Limitations</h2>
            <p>
              In no event shall ChronoCoder or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ChronoCoder's website, even if ChronoCoder or a ChronoCoder authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
            
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on ChronoCoder's website could include technical, typographical, or photographic errors. ChronoCoder does not warrant that any of the materials on its website are accurate, complete or current. ChronoCoder may make changes to the materials contained on its website at any time without notice. However ChronoCoder does not make any commitment to update the materials.
            </p>
            
            <h2>6. Links</h2>
            <p>
              ChronoCoder has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ChronoCoder of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2>7. Modifications</h2>
            <p>
              ChronoCoder may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
            
            <h2>9. User Submissions</h2>
            <p>
              Any material, information, or other communication you transmit or post to the website ("Communications") will be considered non-confidential and non-proprietary. ChronoCoder will have no obligations with respect to the Communications. ChronoCoder and its designees will be free to copy, disclose, distribute, incorporate, and otherwise use the Communications and all data, images, sounds, text, and other things embodied therein for any and all commercial or non-commercial purposes.
            </p>
            
            <h2>10. Termination</h2>
            <p>
              ChronoCoder may terminate your access to all or any part of the website at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your ChronoCoder account (if you have one), you may simply discontinue using the website.
            </p>
            
            <h2>11. Miscellaneous</h2>
            <p>
              This Agreement constitutes the entire agreement between ChronoCoder and you concerning the subject matter hereof. If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties' original intent, and the remaining portions will remain in full force and effect. The failure of ChronoCoder to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. The rights and obligations created by this Agreement will be binding on and inure to the benefit of the parties, their successors, and their permitted assigns.
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