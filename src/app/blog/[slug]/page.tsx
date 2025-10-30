
import { posts } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | IPTV Service Blog`,
    description: post.excerpt,
    keywords: ["IPTV", "Macbook", "macOS", "VLC", "IPTV player", "install IPTV"],
    alternates: {
      canonical: `/blog/${post.id}`,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.image);

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <article>
          <header className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Posted on {new Date().toLocaleDateString()}
            </p>
          </header>

          {postImage && (
            <div className="relative h-64 w-full rounded-xl overflow-hidden md:h-96 mb-12">
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                data-ai-hint={postImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            <p>Setting up IPTV on your MacBook is a straightforward process that unlocks a world of entertainment. This guide will walk you through the necessary steps to start streaming your favorite channels. The most common method involves using an M3U link with a compatible media player, like VLC Media Player.</p>

            <h2 className="font-headline">What You'll Need</h2>
            <ul>
              <li><strong>A MacBook:</strong> Any modern MacBook running macOS will work.</li>
              <li><strong>A Stable Internet Connection:</strong> We recommend a connection of at least 25 Mbps for smooth HD/4K streaming.</li>
              <li><strong>An IPTV Subscription:</strong> You'll need an active subscription with an M3U URL. If you don't have one, you can <Link href="/iptv-subscription">get an IPTV subscription here</Link>.</li>
              <li><strong>A Media Player:</strong> We recommend VLC Media Player, which is free and versatile.</li>
            </ul>

            <h2 className="font-headline">Step 1: Install VLC Media Player</h2>
            <p>VLC is a powerful, free, and open-source media player that can handle a wide variety of formats, including IPTV streams.</p>
            <ol>
                <li>Go to the official VideoLAN website to <a href="https://www.videolan.org/vlc/index.html" target="_blank" rel="noopener noreferrer">download VLC Media Player</a>.</li>
                <li>The website will automatically detect that you're on a Mac and suggest the correct version. Click the "Download VLC" button.</li>
                <li>Once the download is complete, open the `.dmg` file from your Downloads folder.</li>
                <li>Drag the VLC icon into your Applications folder to install it.</li>
            </ol>

            <h2 className="font-headline">Step 2: Add Your M3U Playlist to VLC</h2>
            <p>Once VLC is installed, you can add your IPTV subscription's M3U playlist to start watching.</p>
            <ol>
                <li>Launch VLC Media Player from your Applications folder.</li>
                <li>From the menu bar at the top of the screen, click on **File** and then select **Open Network...** (or use the shortcut `⌘ + N`).</li>
                <li>In the dialog box that appears, paste your M3U playlist URL into the URL field. This URL is provided by your IPTV service provider upon subscription.</li>
                <li>Make sure the "Streaming/Saving" checkbox is **unchecked**.</li>
                <li>Click the **Open** button to load the playlist.</li>
            </ol>
            
            <h2 className="font-headline">Step 3: Access and Navigate Your Channels</h2>
            <p>After a few moments, VLC will load all the channels from your playlist. To see the full list of channels:</p>
            <ul>
                <li>From the menu bar, go to **View** and select **Playlist** (or use the shortcut `⌘ + Option + P`).</li>
                <li>The playlist view will appear on the right side of the VLC window. You can search for channels or browse through the list.</li>
                <li>Double-click on any channel name to start streaming it.</li>
            </ul>

            <div className="my-8 rounded-lg bg-primary/10 p-6 text-center">
              <h3 className="font-headline text-2xl font-bold">Ready to Start Watching?</h3>
              <p className="mt-2 text-muted-foreground">Get your premium IPTV subscription today and unlock thousands of channels in stunning HD and 4K quality!</p>
              <Button asChild className="mt-4">
                  <Link href="/iptv-subscription">Get Your Subscription Now</Link>
              </Button>
            </div>

          </div>

          <div className="text-center mt-16">
            <Link href="/blog" className="text-primary font-semibold hover:underline">
                &larr; Back to Blog
            </Link>
          </div>

        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }));
}
