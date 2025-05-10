import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function InteractiveBlockchainSection() {
  const [transactionData, setTransactionData] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [currentBlock, setCurrentBlock] = useState<any>(null);

  const handleSignTransaction = () => {
    if (transactionData.trim() !== "") {
      setIsSigned(true);
    }
  };

  const handleAddToBlockchain = () => {
    if (isSigned) {
      setIsAdded(true);
      setCurrentBlock({
        id: Math.random().toString(16).slice(2, 10),
        data: transactionData,
        timestamp: new Date().toISOString()
      });
    }
  };

  const resetDemo = () => {
    setTransactionData("");
    setIsSigned(false);
    setIsAdded(false);
    setCurrentBlock(null);
  };

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Interactive Blockchain Experience
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-10"
        >
          Explore how blockchain technology powers my real-world projects
        </motion.p>
        
        <Tabs defaultValue="bytus" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="bytus" className="px-4 py-2 mx-2 rounded-md">Bytus Banking</TabsTrigger>
            <TabsTrigger value="tetra" className="px-4 py-2 mx-2 rounded-md">Tetra Gold</TabsTrigger>
            <TabsTrigger value="blockxpay" className="px-4 py-2 mx-2 rounded-md">BlockXpay</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bytus">
            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div 
                variants={fadeIn("right", "tween", 0.3, 1)}
                className="lg:w-1/2"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">Bytus Cryptocurrency Banking</h3>
                <p className="text-gray-400 mb-6">
                  Experience how secure transactions work in a cryptocurrency banking system. Add transaction data, sign with a private key, and see how the transaction is verified and added to the blockchain.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <Card className="bg-card p-4 md:w-1/2">
                    <h4 className="text-white font-medium mb-2">Previous Block</h4>
                    <p className="font-mono text-xs text-gray-400 mb-2">0x8fe7c...</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      <li>Transfer: 0.5 BTC</li>
                      <li>Exchange: 10 ETH → USD</li>
                    </ul>
                  </Card>
                  
                  <Card className="bg-card p-4 md:w-1/2">
                    <h4 className="text-white font-medium mb-2">Current Block</h4>
                    {isAdded && currentBlock ? (
                      <div className="animate-fadeIn">
                        <p className="font-mono text-xs text-gray-400 mb-2">0x{currentBlock.id}...</p>
                        <ul className="list-disc list-inside text-gray-400 text-sm">
                          <li>{currentBlock.data}</li>
                        </ul>
                      </div>
                    ) : (
                      <p className="text-gray-400">Waiting...</p>
                    )}
                  </Card>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="transaction-data" className="block text-gray-300 mb-1">Transaction Data</label>
                    <input 
                      type="text" 
                      id="transaction-data" 
                      placeholder="Enter transaction data..." 
                      className="w-full p-2 bg-card rounded-md border border-gray-700 focus:border-primary focus:outline-none text-white"
                      value={transactionData}
                      onChange={(e) => setTransactionData(e.target.value)}
                      disabled={isAdded}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    {isAdded ? (
                      <motion.button 
                        className="bg-gradient text-white px-4 py-2 rounded-md transition-colors duration-200"
                        onClick={resetDemo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Reset Demo
                      </motion.button>
                    ) : (
                      <>
                        <motion.button 
                          className={`bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-md transition-colors duration-200 ${isSigned ? 'opacity-50' : ''}`}
                          onClick={handleSignTransaction}
                          disabled={isSigned || !transactionData.trim()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Sign Transaction
                        </motion.button>
                        <motion.button 
                          className={`${isSigned ? 'bg-secondary hover:bg-secondary/90' : 'bg-card text-gray-400'} text-white px-4 py-2 rounded-md transition-colors duration-200`}
                          onClick={handleAddToBlockchain}
                          disabled={!isSigned}
                          whileHover={isSigned ? { scale: 1.05 } : {}}
                          whileTap={isSigned ? { scale: 0.95 } : {}}
                        >
                          Add To Blockchain
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="lg:w-1/2 bg-card rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">How Bytus Banking Works</h3>
                <p className="text-gray-400 mb-6">
                  Bytus Cryptocurrency Banking employs a secure multi-signature verification system for all transactions. This simulation demonstrates the simplified process of creating, signing, and adding a transaction to the blockchain.
                </p>
                
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Enter transaction data</h4>
                      <p className="text-gray-400 text-sm">Create a new banking transaction</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Sign the transaction</h4>
                      <p className="text-gray-400 text-sm">Cryptographically secure your transaction</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Add to blockchain</h4>
                      <p className="text-gray-400 text-sm">Permanently record the transaction</p>
                    </div>
                  </li>
                </ol>
                
                <p className="mt-6 text-xs text-gray-500">
                  These interactive demonstrations simplify complex blockchain concepts for educational purposes. The actual implementations involve more sophisticated security measures and technical components.
                </p>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="tetra">
            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="bg-card rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Tetra Gold</h3>
              <p className="text-gray-400">This demonstration is coming soon. Please check back later.</p>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="blockxpay">
            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="bg-card rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">BlockXpay</h3>
              <p className="text-gray-400">This demonstration is coming soon. Please check back later.</p>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
