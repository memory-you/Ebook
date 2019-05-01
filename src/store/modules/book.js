const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1: 不显示 0: 显示字号 1: 显示主题 2: 显示进度 3: 显示目录
    defaultFontSize: 16
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULT_FONT_SIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  }
}

export default book
