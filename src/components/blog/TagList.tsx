import { Button } from '@components/ui';

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex lg:block">
      {tags.map((tag) => (
        <li className="font-p capitalize mb-2">
          <Button asChild variant={'ghost'}>
            <a href={`/blog/tag/${tag}`} className="text-zinc-500">
              {tag}
            </a>
          </Button>
        </li>
      ))}
      <li className="font-p capitalize mb-2">
        <Button asChild variant={'ghost'}>
          <a href="/blog" className="text-zinc-500">
            All posts
          </a>
        </Button>
      </li>
    </ul>
  );
};
