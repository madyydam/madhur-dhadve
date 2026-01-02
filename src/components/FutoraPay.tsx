import { useState } from "react";
import { 
  CreditCard, 
  Wallet, 
  BarChart3, 
  Shield, 
  Link2, 
  Receipt, 
  User, 
  Rocket, 
  Palette,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const FutoraPay = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const features = [
    { icon: CreditCard, title: "Smart Payments & Transfers", description: "Instant, secure money transfers powered by AI" },
    { icon: BarChart3, title: "AI-Based Expense Tracking", description: "Automatic categorization and insights" },
    { icon: Wallet, title: "Secure Digital Wallet", description: "Your money, always accessible" },
    { icon: Link2, title: "Payment Links & Invoices", description: "Get paid faster with smart invoicing" },
    { icon: Receipt, title: "Real-Time Analytics Dashboard", description: "Track every transaction instantly" },
    { icon: Shield, title: "Bank-Grade Security", description: "256-bit encryption & fraud protection" },
  ];

  const useCases = [
    { icon: User, title: "For Individuals", description: "Manage personal finances effortlessly with AI-powered insights and automated savings." },
    { icon: Rocket, title: "For Startups & Founders", description: "Streamline payments, invoicing, and financial operations from day one." },
    { icon: Palette, title: "For Creators & Online Businesses", description: "Accept payments, track revenue, and grow your business with smart tools." },
  ];

  return (
    <>
      <section id="futorapay" className="py-20 px-6 border-t border-section-border relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/20 via-transparent to-accent-blue-light/10"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
              💳 FutoraPay
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-2">
              AI-Powered Smart Payments & Financial Management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light mx-auto rounded-full"></div>
          </div>

          {/* Main Product Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-2xl hover:shadow-2xl transition-all duration-500 group">
              <div className="bg-card rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Logo placeholder & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-blue-light flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">FutoraPay</h3>
                      <p className="text-accent-blue font-medium text-sm">FinTech / Payments</p>
                    </div>
                    {/* Status Badge */}
                    <div className="ml-auto">
                      <span className="px-3 py-1 text-xs bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20 animate-pulse">
                        🚧 Under Development
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    A next-generation financial platform designed to simplify payments, track money, and automate financial workflows using AI.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <Button 
                      onClick={() => setIsDialogOpen(true)}
                      className="bg-accent-blue hover:bg-accent-blue/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Explore FutoraPay
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10"
                      disabled
                    >
                      🚀 Launching Soon
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border border-accent-blue/20">
          <div className="relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-accent-blue/20 via-accent-blue/10 to-transparent p-8 pb-12">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue to-accent-blue-light flex items-center justify-center shadow-lg">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
                      FutoraPay – Smart Payments for the AI Generation
                    </DialogTitle>
                    <span className="px-2 py-0.5 text-xs bg-accent-blue/20 text-accent-blue rounded-full mt-2 inline-block">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </DialogHeader>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                A next-generation financial platform designed to simplify payments, track money, and automate financial workflows using AI.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="p-8">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  ⚡
                </span>
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border/50 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-3 group-hover:bg-accent-blue/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-accent-blue" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-1">{feature.title}</h5>
                    <p className="text-sm text-text-secondary">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases Section */}
            <div className="p-8 pt-0">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  🎯
                </span>
                Built For
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl bg-gradient-to-br from-accent-blue/5 to-transparent border border-accent-blue/10 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-blue-light flex items-center justify-center mb-4 shadow-md">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">{useCase.title}</h5>
                    <p className="text-sm text-text-secondary leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Footer */}
            <div className="p-8 pt-4 border-t border-border/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 px-3 py-1.5 text-sm bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20">
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
                    Under Active Development
                  </span>
                  <span className="text-sm text-text-secondary">by Madhur Dhadve</span>
                </div>
                <Button 
                  onClick={() => setIsDialogOpen(false)}
                  variant="outline"
                  className="border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FutoraPay;
