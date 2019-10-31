import {
    fetchUserInfo,
    fetchCommentItem,
    fetchList
} from "../api";

export default {
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_USER({ commit }, name) {
        try {
            const response = await fetchUserInfo(name);
            commit('SET_USER', response.data);
            return response;
        } catch(error) {
            console.log(error);
        }
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    // Promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },
}
