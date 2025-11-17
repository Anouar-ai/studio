import { posts } from "@/lib/site-data/posts";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Blog() {
    // We'll just show the 3 most recent posts on the homepage.
    const recentPosts = posts.slice(0, 3);
    
    return (
        <section id="blog" className="py-16 sm:py-24">
            <Container>
                <SectionHeader
                    title="From Our Blog"
                    subtitle="Get the latest tips, tricks, and updates on our IPTV service."
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {recentPosts.map((post, i) => {
                        const postImage = PlaceHolderImages.find(img => img.id === post.image);
                        return (
                            <Reveal key={post.id} delay={i * 0.1}>
                                <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
                                    <CardHeader className="p-0">
                                        {postImage && (
                                            <Link href={post.href}>
                                                <div className="relative h-56 w-full">
                                                    <Image
                                                        src={postImage.imageUrl}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                        data-ai-hint={postImage.imageHint}
                                                    />
                                                </div>
                                            </Link>
                                        )}
                                    </CardHeader>
                                    <CardContent className="flex-1 p-6">
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                        </div>
                                        <CardTitle className="mt-4">
                                            <Link href={post.href}>{post.title}</Link>
                                        </CardTitle>
                                        <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button asChild variant="link" className="p-0">
                                            <Link href={post.href}>Read More <ArrowRight className="ml-2 h-4 w-4"/></Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Reveal>
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild>
                        <Link href="/guides">View All Guides</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
