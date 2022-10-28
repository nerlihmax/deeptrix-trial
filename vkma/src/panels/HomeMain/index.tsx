import { useAllTours } from '@/apis/tour';
import { Vk } from '@/atoms/vk';
import { useRouter } from '@/contexts/Router';
import { TourMainPayload } from '@/panels/TourMain';
import {
    Avatar,
    CardGrid,
    ContentCard,
    Div,
    PanelHeader,
    ScreenSpinner,
    Separator,
    Spacing,
    Title,
} from '@vkontakte/vkui';
import { useSnapshot } from 'valtio';

export const HomeMain = () => {
    const tours = useAllTours();
    const { go } = useRouter();
    const { user } = useSnapshot(Vk);

    const diveInTour = (id: string) => () => {
        const payload: TourMainPayload = { id };
        go('tour', 'tour-main', payload);
    };

    if (!user || !tours.data) {
        return <ScreenSpinner state="loading" />;
    }

    return (
        <>
            <PanelHeader separator={false}>Экскурсии</PanelHeader>
            <Div className="flex flex-row items-center justify-start gap-4">
                <Avatar src={user.avatar} />
                <Title>Привет, {user.firstName}!</Title>
            </Div>
            <Spacing>
                <Separator />
            </Spacing>
            <Div>
                <CardGrid size={'m'}>
                    {tours.data?.map((tour) => (
                        <ContentCard
                            header={tour.name}
                            src={tour.images[0]}
                            onClick={diveInTour(tour.id)}
                            key={tour.id}
                        />
                    ))}
                </CardGrid>
            </Div>
        </>
    );
};
