import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HowToContent } from "@/lib/how-to";

interface BlogPostCardProps {
  post: HowToContent;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const postImage = PlaceHolderImages.find(
    (img) => img.id === `how-to-${post.id}`
  );

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {postImage && (
        <Link href={`/how-to-work/${post.id}`} className="block">
          <CardHeader className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={postImage.imageHint}
              />
            </div>
          </CardHeader>
        </Link>
      )}
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.keywords.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="flex-1 text-lg font-semibold">
          <Link href={`/how-to-work/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
      </CardContent>
    </Card>
  );
}
