import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, Send, MessageCircle, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          name: formData.name,
          email: formData.email,
          contact_number: formData.contactNumber,
          messages: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', contactNumber: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "madhurdhadve@gmail.com",
      link: "mailto:madhurdhadve@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8446653644",
      link: "tel:+918446653644"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+91 8446653644",
      link: "https://wa.me/918446653644",
      hasButton: true,
      buttonText: "Chat on WhatsApp"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "@madhur_dhadve",
      link: "https://www.instagram.com/madhur_dhadve?utm_source=ig_web_button_share_sheet&igsh=MTZzZ3Y2b3AyOHhlZw==",
      hasButton: true,
      buttonText: "DM On Insta"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 border-t border-section-border bg-gradient-to-b from-accent/3 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
          Contact & Social
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.instagram.com/madhur_dhadve?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              
              <a
                href="mailto:madhurdhadve@gmail.com"
                className="p-3 rounded-full bg-[#EA4335] hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
              
              <a
                href="https://wa.me/918446653644"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#25D366] hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/madhur-dhadve-5b598433a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#0A66C2] hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="space-y-3">
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-all duration-300 group hover:shadow-lg"
                  >
                    <div className="text-accent-blue mr-4 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-text-secondary">{contact.value}</p>
                    </div>
                  </a>
                  
                  {contact.hasButton && (
                    <Button 
                      onClick={() => window.open(contact.link, '_blank')}
                      size="sm"
                      className="ml-4 bg-gradient-to-r from-foreground to-accent-blue text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {contact.buttonText}
                      {contact.label === "WhatsApp" ? (
                        <MessageCircle className="ml-2 h-3 w-3" />
                      ) : (
                        <Instagram className="ml-2 h-3 w-3" />
                      )}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;