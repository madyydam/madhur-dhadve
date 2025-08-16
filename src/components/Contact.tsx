import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
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
      value: "+91 8452854044",
      link: "tel:+918452854044"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "@madhur_dhadve",
      link: "https://www.instagram.com/madhur_dhadve?utm_source=ig_web_button_share_sheet&igsh=MTZzZ3Y2b3AyOHhlZw=="
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 border-t border-section-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact & Social</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-colors group"
                >
                  <div className="text-accent-blue mr-4 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-text-secondary">{contact.value}</p>
                  </div>
                </a>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full group">
                  Send Message
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