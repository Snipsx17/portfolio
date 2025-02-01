import { AspectRatio } from '@components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { UserAvatar } from './UserAvatar';
interface Post {
  title: string;
  subtitle: string;
  pubDate: string;
  description: string;
  author: string;
  profession: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
}

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="lg:p-4 flex flex-col gap-4">
      <a href={`blog/post/${post.title.toLowerCase().split(' ').join('-')}`}>
        <AspectRatio ratio={16 / 9}>
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="w-full h-full flex items-center content-center object-cover rounded-md"
          />
        </AspectRatio>
      </a>
      <p className="text-xl text-zinc-700 capitalize">{post.subtitle}</p>
      <h2 className="font-header text-4xl font-bold hover:text-blue">
        <a href={`/blog/post/${post.title.toLowerCase().split(' ').join('-')}`}>
          {post.title}
        </a>
      </h2>
      <a href={`post/${post.title.toLowerCase().split(' ').join('-')}`}>
        <p className="text-zinc-700 line-clamp-5 leading-[2.5rem]">
          {post.description}
        </p>
      </a>
      <UserAvatar userName={post.author} size="sm" />
    </article>
  );
};
