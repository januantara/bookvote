import { api } from "@/lib/axios";
import type { UserProfileResponse } from "@/types/user";


export const userService = {
    getMyProfile: async () => {
        const response = await api.get<UserProfileResponse>('/user/profile');
        return response.data;
    }
}
