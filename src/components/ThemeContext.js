import React from "react"
import { useState, useEffect } from "react"

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: '#07575B',
        color: 'white'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}

const ThemeContext = React.createContext(initialState)

function ThemeProvide({ children }) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? themes.dark : themes.light
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvide, ThemeContext}