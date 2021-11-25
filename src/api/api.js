import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "473f79f8-62ae-4e43-9cda-f75899814654"
    }
});

export const profileAPI = {
    getUsersID(userId){
        return instance.get(`profile/` + userId)
        .then(response => response.data);
    }
};

export const authAPI = {
    getLogin(){
        return instance.get(`auth/me`)
    }
};

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    userFollow(u){
         return instance.delete(`follow/${u.id}`)
         .then(response => response.data);
    },
    userUnfollow(u){
        return instance.post(`follow/${u.id}`)
        .then(response => response.data);
    }
};
