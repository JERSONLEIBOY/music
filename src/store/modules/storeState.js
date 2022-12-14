import getters from '../getters'
import actions from '../actions'
import { loadSearch, loadFavorite, loadPlay } from '@/utils/cache'
import {playMode} from '@/utils/config'
const storeState = {
  namespaced: true,
  state: {
    isLogin: false,
    singer: {},
    fullScreen: false,
    playing: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {},
    topList: {},
    searchHistory: loadSearch(),
    favoriteList: loadFavorite(),
    playHistory: loadPlay()
  },
  getters,
  mutations: {
    SET_ISLOGIN: (state, isLogin) => {
      state.isLogin = isLogin
    },
    SET_SINGER: (state, singer) => {
      state.singer = singer
    },
    SET_SEARCH_HISTORY: (state, searchHistory) => {
      state.searchHistory = searchHistory
    },
    SET_FULL_SCREEN: (state, fullScreen) => {
      state.fullScreen = fullScreen
    },
    SET_PLAYLIST: (state, playlist) => {
      state.playlist = playlist
    },
    SET_SEQUENCE_LIST: (state, sequenceList) => {
      state.sequenceList = sequenceList
    },
    SET_PLAYING_STATE: (state, playing) => {
      state.playing = playing
    },
    SET_PLAY_MODE: (state, mode) => {
      state.mode = mode
    },
    SET_CURRENT_INDEX: (state, currentIndex) => {
      state.currentIndex = currentIndex
    },
    SET_DISC: (state, disc) => {
      state.disc = disc
    },
    SET_TOP_LIST: (state, topList) => {
      state.topList = topList
    },
    SET_FAVORITE_LIST: (state, favoriteList) => {
      state.favoriteList = favoriteList
    },
    SET_PLAY_HISTORY: (state, playHistory) => {
      state.playHistory = playHistory
    }
  },
  actions
}
export default storeState