import { Panel, Root, View } from '@vkontakte/vkui';
import { useRouter } from '@/contexts/Router';
import { HomeMain } from '@/panels/HomeMain';
import { TourMain } from '@/panels/TourMain';
import {
    HOME_MAIN_PANEL,
    HOME_VIEW,
    TOUR_MAIN_PANEL,
    TOUR_VIEW,
} from '@/routes';

export const Routes = () => {
    const { activeView, activePanel } = useRouter();

    return (
        <Root activeView={activeView}>
            <View id={HOME_VIEW} activePanel={activePanel}>
                <Panel id={HOME_MAIN_PANEL}>
                    <HomeMain />
                </Panel>
            </View>
            <View id={TOUR_VIEW} activePanel={activePanel}>
                <Panel id={TOUR_MAIN_PANEL}>
                    <TourMain />
                </Panel>
            </View>
        </Root>
    );
};
