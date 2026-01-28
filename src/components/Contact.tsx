import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, Send, MessageCircle, Linkedin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  contactNumber: z.string()
    .trim()
    .optional()
    .refine((val) => !val || /^[\d\s\+\-\(\)]{10,15}$/.test(val), {
      message: "Please enter a valid phone number (10-15 digits)"
    }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Magnetic Social Icon
const MagneticSocialIcon = ({ href, icon: Icon, bgColor, label }: { href: string; icon: typeof Instagram; bgColor: string; label: string }) => {
  const iconRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMouse = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!iconRef.current || !isMouse) return;
    const rect = iconRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  return (
    <motion.a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl ${bgColor} shadow-lg hover:shadow-2xl group`}
      aria-label={label}
    >
      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white relative z-10" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white/20 rounded-2xl blur-md"
      />
    </motion.a>
  );
};

// Success particle
const SuccessParticle = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, y: 0 }}
    animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], y: [0, -80], x: [(Math.random() - 0.5) * 100] }}
    transition={{ duration: 1.5, delay, ease: "easeOut" }}
    className="absolute top-1/2 left-1/2 pointer-events-none"
  >
    <Sparkles className="w-4 h-4 text-accent-blue" />
  </motion.div>
);

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [showParticles, setShowParticles] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const isMouse = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", contactNumber: "", message: "" }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const { error } = await supabase.from('messages').insert({
        name: data.name.trim(),
        email: data.email.trim(),
        contact_number: data.contactNumber?.trim() || null,
        messages: data.message.trim()
      });
      if (error) throw new Error(error.message || 'Failed to send message');
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 2000);
      toast({ title: "Message sent! 🎉", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "madhurdhadve@gmail.com", link: "mailto:madhurdhadve@gmail.com", color: "from-red-500 to-red-600" },
    { icon: Phone, label: "Phone", value: "+91 8446653644", link: "tel:+918446653644", color: "from-blue-500 to-blue-600" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 8446653644", link: "https://wa.me/918446653644", color: "from-green-500 to-green-600" }
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/madhur_dhadve?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: Instagram, bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500", label: "Instagram" },
    { href: "mailto:madhurdhadve@gmail.com", icon: Mail, bgColor: "bg-gradient-to-br from-red-500 to-red-600", label: "Email" },
    { href: "https://wa.me/918446653644", icon: MessageCircle, bgColor: "bg-gradient-to-br from-green-500 to-green-600", label: "WhatsApp" },
    { href: "https://www.linkedin.com/in/madhur-dhadve-5b598433a", icon: Linkedin, bgColor: "bg-gradient-to-br from-blue-600 to-blue-700", label: "LinkedIn" }
  ];

  const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const leftCardY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const rightCardY = useTransform(scrollYProgress, [0, 0.35], [100, 0]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={isMouse ? { scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] } : { opacity: 0.05 }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-accent-blue rounded-full blur-3xl md:blur-[80px] will-change-transform"
        />
        <motion.div
          animate={isMouse ? { scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] } : { opacity: 0.05 }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl md:blur-[80px] will-change-transform"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-8 md:mb-12">
          <motion.h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 uppercase tracking-tighter inline-block" whileInView={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: "linear-gradient(90deg, #111827, #3b82f6, #8b5cf6, #3b82f6, #111827)", backgroundSize: "200% 100%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Let's Connect 📬
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-20 md:w-24 h-1 bg-gradient-to-r from-accent-blue via-purple-500 to-accent-blue mx-auto rounded-full" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div style={{ y: leftCardY, opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }}>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">Get in Touch</h3>
            <div className="flex justify-start gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.div key={index} initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}>
                  <MagneticSocialIcon {...social} />
                </motion.div>
              ))}
            </div>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }} whileHover={{ scale: 1.02, x: 8 }} className="flex items-center p-3 md:p-4 rounded-xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm hover:border-accent-blue hover:shadow-lg transition-all duration-300 group">
                  <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className={`p-2.5 rounded-lg bg-gradient-to-br ${contact.color} mr-3 shadow-md`}>
                    <contact.icon className="h-4 w-4 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-900">{contact.label}</p>
                    <p className="text-xs text-gray-600">{contact.value}</p>
                  </div>
                  <motion.div initial={{ x: -10, opacity: 0 }} whileHover={{ x: 0, opacity: 1 }} className="text-accent-blue text-sm">→</motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div style={{ y: rightCardY, opacity: useTransform(scrollYProgress, [0, 0.35], [0, 1]) }}>
            <Card className="border-2 border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-black bg-gradient-to-r from-gray-900 to-accent-blue bg-clip-text text-transparent">Send a Message ✉️</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative">
                    {showParticles && Array.from({ length: 12 }).map((_, i) => <SuccessParticle key={i} delay={i * 0.05} />)}
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-sm">Name</FormLabel>
                        <FormControl><Input placeholder="Your name" {...field} className="focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 h-10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-sm">Email</FormLabel>
                        <FormControl><Input type="email" placeholder="your@email.com" {...field} className="focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 h-10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="contactNumber" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-sm">Phone (Optional)</FormLabel>
                        <FormControl><Input type="tel" placeholder="+91 1234567890" {...field} className="focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 h-10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-sm">Message</FormLabel>
                        <FormControl><Textarea rows={3} placeholder="Your message here..." {...field} className="focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 resize-none" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-gradient-to-r from-accent-blue to-purple-600 hover:from-accent-blue/90 hover:to-purple-600/90 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden" disabled={form.formState.isSubmitting}>
                        <motion.div animate={{ x: form.formState.isSubmitting ? ["-100%", "100%"] : "-100%" }} transition={{ duration: 1, repeat: form.formState.isSubmitting ? Infinity : 0, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <span className="relative z-10">{form.formState.isSubmitting ? "Sending..." : "Send Message"}</span>
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;