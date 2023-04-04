import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
    const [value, setValue] = useState<T>(() => {
        const jasonValue = localStorage.getItem(key)
        if(jasonValue != null) return JSON.parse(jasonValue)

        if(typeof initialValue === "function"){
            return (initialValue as () => T)()
        } else {
            initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue] as [typeof value, typeof setValue]
}