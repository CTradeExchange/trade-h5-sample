import { getCookie, setCookie } from 'cookies-next'
import { PaletteMode } from '@mui/material'
import { __DARK_MODE__, __TOKEN__ } from '@/constant'
import { createModel } from '@rematch/core'
import type { RootModel } from '.'

interface BaseState {
    themeMode: PaletteMode
    token: string | undefined
}

const model = createModel<RootModel>()({
    state: {
        themeMode: getCookie(__DARK_MODE__),
        token: getCookie(__TOKEN__),
    } as BaseState,
    effects: () => ({
        async toggleThemeMode(themeMode) {
            setCookie(__DARK_MODE__, themeMode)
            this.updateThemeMode({
                themeMode,
            })
        },
    }),
    reducers: {
        updateThemeMode: (state, payload) => ({
            ...state,
            ...payload,
        }),
    },
})

export default model
