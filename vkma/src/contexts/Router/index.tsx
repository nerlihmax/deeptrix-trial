import { DEFAULT_PANEL, DEFAULT_VIEW, Panel, Routes, View } from '@/routes';
import { createContext, FC, useContext, useState } from 'react';

type Go = <
    TPayload extends object,
    TView extends View,
    TPanel extends Routes[TView][number]
>(
    view: TView,
    panel: TPanel,
    payload: TPayload
) => void;

type RouterContextValue = {
    activeView: View;
    activePanel: Panel;
    payload: object;
    go: Go;
};

const RouterContext = createContext<RouterContextValue>({
    activeView: DEFAULT_VIEW,
    activePanel: DEFAULT_PANEL,
    payload: {},
    go: () => {},
});

export const RouterProvider: FC = ({ children }) => {
    const [activeView, setActiveView] = useState<View>(DEFAULT_VIEW);
    const [activePanel, setActivePanel] = useState<Panel>(DEFAULT_PANEL);
    const [payload, setPayload] = useState<object>({});

    const go: Go = (view, panel, payload) => {
        setActiveView(view);
        setActivePanel(panel);
        setPayload(payload);
    };

    return (
        <RouterContext.Provider
            value={{
                activeView,
                activePanel,
                payload,
                go,
            }}
        >
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = () => useContext(RouterContext);
export const useRouterPayload = <T,>() =>
    useContext(RouterContext).payload as T;
