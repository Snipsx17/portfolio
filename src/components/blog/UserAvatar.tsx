import { Avatar, AvatarFallback, AvatarImage } from '@components/ui';
import userImage from '@images/avatar.jpg';

export const UserAvatar = ({
  userName,
  size,
}: {
  userName: string;
  size: 'sm' | 'lg';
}) => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar
        className={`${
          size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-16 h-16' : ''
        }`}
      >
        <AvatarImage src={userImage.src} alt="@uhernandez" />
        <AvatarFallback>UH</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-p">{userName}</p>
        <small className="font-p text-zinc-500">Web Developer</small>
      </div>
    </div>
  );
};
