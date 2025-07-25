"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUser();

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    // يمكنك هنا إضافة منطق الإرسال عبر WhatsApp أو البريد
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleWhatsAppSend} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="userPhone">Phone</Label>
            <Input
              id="userPhone"
              type="tel"
              placeholder="Enter your phone number"
              value={userPhone}
              onChange={e => setUserPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Send</Button>
          {/* زر الادمن يظهر فقط إذا كان المستخدم مدير */}
          {user?.role === "admin" && (
            <Link href="/admin" className="font-bold text-brown-800">Admin</Link>
          )}
        </form>
      )}
    </div>
  );
}
