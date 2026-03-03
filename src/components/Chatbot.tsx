import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { chatbotConfig } from '../config';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  const responses = chatbotConfig.responses;

  for (const { keywords, response } of responses) {
    const matches = keywords.some((kw) => lower.includes(kw));
    if (matches) return response;
  }

  return chatbotConfig.fallbackResponse;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: chatbotConfig.welcomeMessage,
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button - left on mobile to avoid ScrollToTop overlap */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-400 text-white shadow-lg hover:shadow-gold-500/30 shadow-gold-500/20 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat panel - full width on mobile */}
      <div
        className={`fixed inset-x-4 bottom-20 sm:inset-x-auto sm:left-auto sm:right-6 sm:bottom-24 z-50 w-auto sm:w-[380px] h-[calc(100vh-7rem)] sm:h-[500px] sm:max-h-[70vh] flex flex-col rounded-xl border border-white/10 bg-wine-900/98 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-wine-800/50 rounded-t-xl">
          <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-gold-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg text-white truncate">{chatbotConfig.title}</h3>
            <p className="text-xs text-gold-400 truncate">{chatbotConfig.subtitle}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  msg.role === 'user'
                    ? 'bg-gold-500/90 text-white rounded-br-md'
                    : 'bg-white/10 text-white/95 rounded-bl-md border border-white/5'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3 border border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold-500/70 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-gold-500/70 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-gold-500/70 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 pt-0 flex-shrink-0">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={chatbotConfig.placeholder}
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-12 h-12 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shrink-0"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
