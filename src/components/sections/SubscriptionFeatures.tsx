
import { Check, MessageCircle, Shield, Smartphone, Tv, Zap } from "lucide-react";
import { Container } from "../shared/Container";

const features = [
    { 
        icon: Tv, 
        title: "20,000+ Channels",
        description: "Access a massive selection of premium channels from around the world with our IPTV Provider subscription."
    },
    { 
        icon: Zap, 
        title: "Instant Activation",
        description: "Your IPTV Provider is activated immediately after payment. No waiting, just streaming."
    },
    { 
        icon: Check,
        title: "HD/4K Quality",
        description: "Enjoy a superior viewing experience with crystal clear streaming in High Definition and 4K resolution."
    },
    { 
        icon: Shield,
        title: "Anti-Freeze Technology",
        description: "Our IPTV Provider uses advanced anti-freeze tech for smooth, uninterrupted streaming."
    },
    { 
        icon: MessageCircle,
        title: "24/7 Support",
        description: "Get round-the-clock customer support for all our IPTV Provider plans. We're here to help anytime."
    },
    { 
        icon: Smartphone,
        title: "Multi-Device",
        description: "Watch our IPTV Provider on your Smart TV, Android, iOS, Fire Stick, PC, and more."
    },
]

export function SubscriptionFeatures() {
    return (
        <section className="py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Features Included in All IPTV Plans</h2>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, i) => (
                    <li key={i} className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                        <h3 className="mb-2 flex items-center gap-2 font-headline text-xl">
                            <feature.icon size={20} className="text-primary"/> 
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </li>
                ))}
            </ul>
          </Container>
        </section>
    )
}
