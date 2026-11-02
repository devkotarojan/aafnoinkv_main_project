"use client";

import {
  Clock,
  Mail,
  MessageSquare,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SupportOption {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Support options
const supportOptions: SupportOption[] = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us at 1-800-123-4567",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "support@example.com",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Within 24 hours",
  },
];

// Frequently asked questions
const faqs = [
  {
    question: "What are your business hours?",
    answer:
      "Our customer service team is available Monday through Friday, 9:00 AM to 6:00 PM EST. For urgent matters, we offer 24/7 emergency support.",
  },
  {
    question: "How can I track my support ticket?",
    answer:
      "You can track your support ticket by logging into your account and visiting the 'Support Tickets' section. You'll receive email notifications for any updates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
  },
  {
    question: "How long does it take to resolve issues?",
    answer:
      "Response times vary based on issue complexity. We aim to respond to all inquiries within 24 hours and resolve critical issues within 48 hours.",
  },
];

export default function CustomerService() {
  return (
    <section className="py-16 justify-items-center">
      <div className="container">
        {/* Page heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            How can we help you?
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Our dedicated support team is here to assist you with any questions
            or concerns you may have.
          </p>
        </div>

        {/* Support Options */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportOptions.map((option) => (
            <Card
              key={option.title}
              className="flex flex-col items-center p-6 text-center"
            >
              <option.icon className="mb-4 size-8 text-primary" />
              <h3 className="mb-2 font-semibold">{option.title}</h3>
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mx-auto mb-16 max-w-2xl">
          <Card className="p-6">
            <h2 className="mb-6 text-2xl font-semibold">
              Send us a message
            </h2>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full" variant="default">Send Message</Button>
            </form>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}