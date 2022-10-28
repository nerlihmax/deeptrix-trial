import { Guide } from '@/entities/guide';
import { formatPhone } from '@/utils/formatPhone';
import {
    Icon16Like,
    Icon16LikeOutline,
    Icon24PhoneOutline,
} from '@vkontakte/icons';
import { RichCell, Avatar } from '@vkontakte/vkui';
import { FC, useState } from 'react';

type Props = {
    guide: Guide;
};

export const GuideCell: FC<Props> = ({ guide }) => {
    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked((prev) => !prev);
    };

    const LikeIcon = liked ? Icon16Like : Icon16LikeOutline;
    const likeIconColor = liked
        ? 'var(--vkui--color_icon_negative)'
        : 'var(--vkui--color_icon_secondary)';

    return (
        <RichCell
            before={<Avatar size={48} src={guide.avatar} />}
            caption={
                <div className="flex flex-row items-center gap-1">
                    <Icon24PhoneOutline
                        fill="var(--vkui--color_icon_accent)"
                        width={16}
                        height={16}
                    />
                    <span className="text-black">
                        {formatPhone(guide.phone)}
                    </span>
                </div>
            }
        >
            <div className="flex flex-row items-center gap-1">
                <span>{`${guide.firstName} ${guide.lastName}`}</span>
                <LikeIcon onClick={toggleLiked} fill={likeIconColor} />
            </div>
        </RichCell>
    );
};
