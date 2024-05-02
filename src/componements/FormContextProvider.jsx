import { createContext } from "react"

const context = createContext( {
    titleId: 0,
    errorId: 0,
    error: 0
})

const FormContextProvider = (props) => {
    const { children, ...value } = props

    console.log(value)
    return (
        <context.Provider value={value} >
            {props.children}
        </context.Provider>
    )
}

export default FormContextProvider