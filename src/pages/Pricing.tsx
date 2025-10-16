import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  const plans = [
    {
      name: "Personal",
      price: "$10",
      billing: "billed yearly",
      monthly: "$15.00 billed monthly",
      features: {
        tokens: "5,500",
        upscales: "1,500",
        backgrounds: "4,000",
        jobs: "+",
        private: "+",
      },
    },
    {
      name: "Premium",
      price: "$15",
      billing: "billed yearly",
      monthly: "$20.00 billed monthly",
      popular: true,
      features: {
        tokens: "12,500",
        upscales: "3,500",
        backgrounds: "8,000",
        jobs: "+",
        private: "+",
      },
    },
    {
      name: "Enterprise",
      price: "$25",
      billing: "billed yearly",
      monthly: "$35.00 billed monthly",
      features: {
        tokens: "20,000",
        upscales: "7,500",
        backgrounds: "15,000",
        jobs: "+",
        private: "+",
      },
    },
  ];

  const faqs = [
    {
      question: "How does it work?",
      answer: "Our platform uses advanced AI to optimize and reveal prompts for various use cases.",
    },
    {
      question: "How long does it take to download updates?",
      answer: "Updates are typically instant and delivered through our cloud infrastructure.",
    },
    {
      question: "Do I need a designer to use this Admin Theme?",
      answer: "No, our platform is designed to be user-friendly for all skill levels.",
    },
    {
      question: "What do I need to do to start selling?",
      answer: "Simply sign up for an account and choose your preferred plan to get started.",
    },
    {
      question: "How much does Extended license cost?",
      answer: "Contact our sales team for enterprise licensing options and pricing.",
    },
    {
      question: "What platforms are compatible?",
      answer: "Our platform works on all modern web browsers and devices.",
    },
  ];

  return (
    <div className="p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-medium mb-4">Simple Pricing, Unbeatable Value</h1>
          <p className="text-muted-foreground text-lg">
            Start small and free, upgrade as you go. Take control of everything.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs defaultValue="yearly" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="yearly">YEARLY</TabsTrigger>
              <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

<div className="grid md:grid-cols-3 gap-8 mb-16">
  {plans.map((plan) => (
    <Card key={plan.name} className="relative">
      {plan.popular && (
        <Badge className="absolute -top-3 right-4 bg-primary">MOST POPULAR</Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-medium">{plan.price}</span>
          <span className="text-muted-foreground">/ month</span>
        </div>
        <div className="text-sm text-muted-foreground">{plan.billing}</div>
        <div className="text-sm text-muted-foreground">{plan.monthly}</div>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <table className="w-full text-sm border border-border rounded-sm overflow-hidden">
            <tbody>
              {Object.entries(plan.features).map(([name, value], i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-none"
                >
                  <td className="p-3 font-light">{name}</td>
                  <td className="p-3 text-right text-muted-foreground">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button
          variant={plan.popular ? "default" : "outline"}
          className="w-full"
        >
          BUY {plan.name.toUpperCase()}
        </Button>
      </CardContent>
    </Card>
  ))}
</div>


        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Many support queries and technical questions will already be answered
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
