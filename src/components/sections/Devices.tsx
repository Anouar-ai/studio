import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { devices } from "@/lib/site-data/devices";
import { DeviceIcon } from "./DeviceIcon";
import { Reveal } from "../shared/Reveal";
import { Button } from "../ui/button";
import Link from "next/link";

export function Devices() {
  return (
    <section id="devices" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Works on All Your Devices"
          subtitle="Watch on your TV, computer, tablet, or phone. Our IPTV service is compatible with a wide range of devices."
        />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {devices.map((device) => (
              <DeviceIcon key={device.name} name={device.name} iconName={device.icon} href={device.href} />
            ))}
          </div>
        </Reveal>
         <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/guides">View All Setup Guides</Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
