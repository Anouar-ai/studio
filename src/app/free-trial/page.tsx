
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Check, Mail, Globe, Tv, Smartphone, StickyNote } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { countries, iptvApps } from "@/lib/site";
import { submitFreeTrialForm } from "@/app/actions";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

export default function FreeTrialPage() {
  const { toast } = useToast();
  const initialState = { message: null, errors: null };
  const [state, dispatch] = useActionState(submitFreeTrialForm, initialState);

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && state.errors) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <main className="bg-muted/20 dark:bg-card/30">
      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Free Trial - Experience Premium Streaming Today!</h1>
                <p className="lead text-muted-foreground">
                    Take advantage of our 24-hour IPTV free trial to explore the best in entertainment. Enjoy high-quality streaming with access to thousands of channels, on-demand shows, and live sports—completely risk-free! Sign up today and get your trial delivered instantly to your email.
                </p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Why Choose Our Free IPTV Trial?</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold">Instant Access</h3>
                                <p className="text-muted-foreground">Fill out the simple form, and receive your IPTV trial immediately.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold">Premium Service</h3>
                                <p className="text-muted-foreground">Discover the seamless performance of a reliable IPTV provider.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold">No Obligations</h3>
                                <p className="text-muted-foreground">Try our service before you commit to a subscription.</p>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <div className="prose dark:prose-invert max-w-none">
                <h2 className="font-headline text-3xl">IPTV Trial Setup</h2>
                <div className="space-y-8 mt-8">
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                            <div className="w-px flex-grow bg-border" />
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">Download an IPTV Player</h3>
                            <p className="text-muted-foreground">Get an IPTV-compatible application via the App Store, Google Play, or APK download.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                         <div className="flex flex-col items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                            <div className="w-px flex-grow bg-border" />
                        </div>
                         <div>
                            <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">Sign Up for the Free Trial</h3>
                            <p className="text-muted-foreground">Provide your details using the form on this page.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                         <div>
                            <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">Enjoy Premium IPTV</h3>
                            <p className="text-muted-foreground">Access your free IPTV trial in minutes.</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">APPLY NOW</CardTitle>
                <CardDescription>
                  Experience our cutting-edge IPTV services with a complimentary
                  24-hour free trial.
                </CardDescription>
              </CardHeader>
              <form action={dispatch}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your free trial will be sent here"
                        className="pl-10"
                      />
                    </div>
                    {state.errors?.email && (
                      <p className="text-sm text-destructive">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                     <div className="relative">
                       <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Select name="country">
                        <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                            {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                                {country}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    {state.errors?.country && (
                      <p className="text-sm text-destructive">
                        {state.errors.country[0]}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="device">Your Device Type</Label>
                     <div className="relative">
                       <Tv className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Select name="device">
                        <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select your device" />
                        </SelectTrigger>
                        <SelectContent>
                             <SelectItem value="Android Box">Android Box</SelectItem>
                             <SelectItem value="Smart TV">Smart TV</SelectItem>
                             <SelectItem value="Firestick">Firestick</SelectItem>
                             <SelectItem value="iOS">iOS</SelectItem>
                             <SelectItem value="Windows">Windows</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                     {state.errors?.device && (
                      <p className="text-sm text-destructive">
                        {state.errors.device[0]}
                      </p>
                    )}
                  </div>

                   <div className="space-y-2">
                    <Label htmlFor="application">IPTV Application</Label>
                     <div className="relative">
                       <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Select name="application">
                        <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select your application" />
                        </SelectTrigger>
                        <SelectContent>
                           {iptvApps.map((app) => (
                            <SelectItem key={app} value={app}>
                                {app}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                     {state.errors?.application && (
                      <p className="text-sm text-destructive">
                        {state.errors.application[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="note">Note !</Label>
                    <div className="relative">
                       <StickyNote className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Textarea
                            id="note"
                            name="note"
                            placeholder="Any suggestions or questions?"
                            className="pl-10"
                        />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>

        <section className="py-16 sm:py-24">
            <div className="prose dark:prose-invert max-w-none text-center">
                <h2 className="font-headline text-3xl font-bold">IPTV Free Trial Overview</h2>
                <p className="lead text-muted-foreground">
                    Unlock a World of Entertainment with Our Exclusive 24-Hour IPTV Free Trial. Experience the future of television on your terms. Try it now, risk-free!
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Stable and Reliable</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our free trial lets you explore a stable, high-quality IPTV service.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>16,000+ Live Channels</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Access to a massive library of global channels even during your trial.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Latest Movies on VOD</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Enjoy a huge VOD library featuring over 40,000+ movies.</p>
                    </CardContent>
                </Card>
            </div>
             <div className="mt-12 text-center">
                <Button asChild>
                    <Link href="/pricing">View Subscription Plans</Link>
                </Button>
            </div>
        </section>
      </Container>
    </main>
  );
}
    