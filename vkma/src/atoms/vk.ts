import { proxy } from 'valtio';
import bridge from '@vkontakte/vk-bridge';

type VkValue = Partial<{
    user: {
        id: number;
        firstName: string;
        lastName: string;
        avatar: string;
    };
}>;

export const Vk = proxy<VkValue>();

export const fetchLaunchParams = async () => {
    // if (__dev__) {
    // Vk.user = {
    //     id: 1,
    //     firstName: 'Максим',
    //     lastName: 'Нерлих',
    //     avatar: '',
    // };
    // return;
    // }

    const { vk_user_id } = await bridge.send('VKWebAppGetLaunchParams');

    const { first_name, last_name, photo_100 } = await bridge.send(
        'VKWebAppGetUserInfo',
        {
            user_id: vk_user_id,
        }
    );

    Vk.user = {
        id: vk_user_id,
        firstName: first_name,
        lastName: last_name,
        avatar: photo_100,
    };
};
