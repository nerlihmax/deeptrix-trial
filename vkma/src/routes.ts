export const HOME_VIEW = 'home';
export const HOME_MAIN_PANEL = 'home-main';

export const TOUR_VIEW = 'tour';
export const TOUR_MAIN_PANEL = 'tour-main';

export const DEFAULT_VIEW: View = HOME_VIEW;
export const DEFAULT_PANEL: Panel = HOME_MAIN_PANEL;

export const routes = {
    [HOME_VIEW]: [HOME_MAIN_PANEL],
    [TOUR_VIEW]: [TOUR_MAIN_PANEL],
} as const;

export type Routes = typeof routes;
export type View = keyof Routes;
export type Panel = Routes[View][number];
