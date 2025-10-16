import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="p-6 bg-background ">

        <div className="mt-0 text-center">
          <div className="flex justify-center gap-4">
            <Button variant="link" className="text-primary">
              Discord
            </Button>
            <Button variant="link" className="text-primary">
              Twitter
            </Button>
            <Button variant="link" className="text-primary">
              GitHub
            </Button>
            <Button variant="link" className="text-primary">
              Telegram
            </Button>
            <Button variant="link" className="text-primary">
              Website
            </Button>
          </div>
        </div>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8">
                  <h1 className="text-2xl font-bold mb-6 align-center">Contact Us</h1>

            <p className="text-muted-foreground mb-8">
              Please fill out the form with your contact information and a detailed message, and
              we will get back to you as soon as possible. Your privacy is important to us, and we
              will never share your information with third parties.
            </p>

            <form className="space-y-6">
              <div>
                <Input placeholder="Full Name *" required />
              </div>
              <div>
                <Input type="email" placeholder="Email *" required />
              </div>
              <div>
                <Input type="tel" placeholder="Phone" />
              </div>
              <div>
                <Textarea placeholder="Your Message *" className="min-h-32" required />
              </div>
              <Button type="submit" className="w-auto">
                SEND MESSAGE
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
