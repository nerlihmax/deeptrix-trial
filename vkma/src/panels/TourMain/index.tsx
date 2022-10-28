import { useState } from 'react';
import * as datefns from 'date-fns';
import { ru } from 'date-fns/locale';
import { useTour } from '@/apis/tour';
import { useRouter, useRouterPayload } from '@/contexts/Router';
import { GuideCell } from '@/components/GuideCell';
import {
    Icon24CalendarOutline,
    Icon24ClockOutline,
    Icon24PlaceOutline,
    Icon24RoubleBadgeOutline,
    Icon24UsersOutline,
} from '@vkontakte/icons';
import {
    Button,
    Card,
    Div,
    Gallery,
    Group,
    Header,
    HorizontalScroll,
    PanelHeader,
    PanelHeaderBack,
    Paragraph,
    RichCell,
    ScreenSpinner,
    Separator,
    SimpleCell,
    Subhead,
    Text,
    Title,
} from '@vkontakte/vkui';

export type TourMainPayload = {
    id: string;
};

export const TourMain = () => {
    const { go } = useRouter();
    const { id } = useRouterPayload<TourMainPayload>();
    const { data: tour } = useTour(id);

    const [willVisit, setWillVisit] = useState(false);

    const toggleWillVisit = () => {
        setWillVisit((prev) => !prev);
    };

    const goHome = () => {
        go('home', 'home-main', {});
    };

    if (!tour) {
        return <ScreenSpinner state="loading" />;
    }

    return (
        <>
            <PanelHeader
                before={<PanelHeaderBack onClick={goHome} />}
                separator={false}
            />
            <Div className="flex flex-col gap-4">
                <Card>
                    <Gallery showArrows isDraggable={false}>
                        {tour.images.map((image) => (
                            <img
                                className="w-full rounded-lg"
                                src={image}
                                key={image}
                            />
                        ))}
                    </Gallery>
                </Card>
                <Title className="font-bold">{tour.name}</Title>
                <Paragraph className="text-vkui-text-secondary">
                    {tour.description}
                </Paragraph>
            </Div>
            <Separator />
            <Group header={<Header>Информация</Header>}>
                <SimpleCell before={<Icon24CalendarOutline />}>
                    <div className="flex flex-col gap-1">
                        <Subhead className="text-vkui-text-secondary">
                            Дата и время
                        </Subhead>
                        <Text>
                            {datefns.format(
                                datefns.parseISO(tour.datetime),
                                'dd LLLL, H:m',
                                { locale: ru }
                            )}
                        </Text>
                    </div>
                </SimpleCell>
                <RichCell
                    before={
                        <Icon24ClockOutline fill="var(--vkui--color_icon_accent)" />
                    }
                >
                    <div className="flex flex-col gap-1">
                        <Subhead className="text-vkui-text-secondary">
                            Время прохождения маршрута
                        </Subhead>
                        <Text>3 часа - на машине</Text>
                        <Text>5 часов - пешком</Text>
                        <Text>8 часов - максимальное посещение</Text>
                    </div>
                </RichCell>
                <SimpleCell before={<Icon24PlaceOutline />}>
                    <div className="flex flex-col gap-1">
                        <Subhead className="text-vkui-text-secondary">
                            Место начала
                        </Subhead>
                        <Text>{tour.address}</Text>
                    </div>
                </SimpleCell>
                <SimpleCell before={<Icon24UsersOutline />}>
                    <div className="flex flex-col gap-1">
                        <Subhead className="text-vkui-text-secondary">
                            Количество участников
                        </Subhead>
                        <Text>{tour.visitorsCount}</Text>
                    </div>
                </SimpleCell>
                <SimpleCell before={<Icon24RoubleBadgeOutline />}>
                    <div className="flex flex-col gap-1">
                        <Subhead className="text-vkui-text-secondary">
                            Цена
                        </Subhead>
                        <Text>{tour.cost === 0 ? 'Бесплатно' : tour.cost}</Text>
                    </div>
                </SimpleCell>
            </Group>
            <Group header={<Header>Дополнительно</Header>}>
                <HorizontalScroll>
                    <div className="flex gap-2 pl-3 w-max">
                        {tour.features.map((feature) => (
                            <span
                                key={feature}
                                className="py-2 px-4 bg-[#D0E6FF] flex items-center justify-center rounded-3xl font-light break-keep"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </HorizontalScroll>
            </Group>
            <Group header={<Header>Гид</Header>}>
                <GuideCell guide={tour.guide} />
            </Group>
            <Div>
                <Button
                    mode={willVisit ? 'secondary' : 'primary'}
                    size="l"
                    stretched
                    onClick={toggleWillVisit}
                >
                    {willVisit ? 'Я иду' : 'Пойти'}
                </Button>
            </Div>
        </>
    );
};
