import { render } from 'react-dom';
import { StrictMode } from 'react';
import { Routes } from '@/components/Routes';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import { RouterProvider } from '@/contexts/Router';
import bridge from '@vkontakte/vk-bridge';
import { fetchLaunchParams } from '@/atoms/vk';

import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/fonts.css';
import './index.css';

// if (!__dev__)
bridge.send('VKWebAppInit');

fetchLaunchParams();

render(
    <StrictMode>
        <ConfigProvider platform="ios">
            <AdaptivityProvider>
                <RouterProvider>
                    <AppRoot>
                        <Routes />
                    </AppRoot>
                </RouterProvider>
            </AdaptivityProvider>
        </ConfigProvider>
    </StrictMode>,
    document.querySelector('#root')
);
