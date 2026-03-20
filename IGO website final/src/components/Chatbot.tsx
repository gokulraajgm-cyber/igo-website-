import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { companyInfo, services, courses, projects, faqs } from "@/data/siteData";

const knowledgeBase = `
Company: ${companyInfo.name}. ${companyInfo.description}
Phone: ${companyInfo.phone}. Email: ${companyInfo.email}. Location: ${companyInfo.address}.
Services: ${services.map(s => s.title).join(", ")}.
Courses: ${courses.map(c => `${c.title} (${c.duration})`).join(", ")}.
Projects: ${projects.map(p => p.title).join(", ")}.
FAQ: ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(" ")}
`;

type Msg = { role: "user" | "assistant"; content: string };

const quickReplies = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) return `Hello! Welcome to IGO Agritech Farms. How can I help you today? I can tell you about our projects, courses, services, or contact information.`;
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("call")) return `You can reach us at ${companyInfo.phone} or email ${companyInfo.email}. We're located in ${companyInfo.address}. You can also WhatsApp us!`;
  if (lower.includes("course") || lower.includes("training")) return `We offer these training programs:\n${courses.map(c => `• ${c.title} (${c.duration})`).join("\n")}\n\nVisit our Courses page or submit an enquiry to learn more!`;
  if (lower.includes("project")) return `Our key projects include:\n${projects.map(p => `• ${p.title}`).join("\n")}\n\nWould you like details on any specific project?`;
  if (lower.includes("service")) return `We provide:\n${services.map(s => `• ${s.title}`).join("\n")}\n\nAny specific service you're interested in?`;
  if (lower.includes("polyhouse")) return `Our Polyhouse Projects feature state-of-the-art climate-controlled environments. Benefits include year-round production, higher yields, and pest protection. We also offer Polyhouse Training (5 Days).`;
  if (lower.includes("hydroponic")) return `Our Hydroponic Projects use soilless farming technology enabling 90% water savings and faster growth cycles. We offer Hydroponics Training (5 Days) as well.`;
  return `Thank you for your question! For detailed information, please call us at ${companyInfo.phone} or visit our Contact page. I can help with queries about our projects, courses, services, and contact information.`;
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! 👋 I'm the IGO Agritech assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", content: input };
    const reply: Msg = { role: "assistant", content: quickReplies(input) };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-green shadow-xl flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-green px-5 py-4">
              <h3 className="text-primary-foreground font-display font-bold text-lg">IGO Agritech Support</h3>
              <p className="text-primary-foreground/70 text-xs">Ask us anything</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-muted text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={send}
                className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
