import FormContextProvider from "./FormContextProvider"
import FormTitle from "./FormTitle"

const FormSection = (props) => {
    const {
        children,
        title, 
        icon,
        className,
        titleClassName,
        tag = "h5",
    } = props

    return (
        <div>
            <FormTitle tag={tag} className={titleClassName}> {title} </FormTitle>
            <div>
                <FormContextProvider>
                    {children}
                </FormContextProvider>
            </div>
        </div>
    )


}

export default FormSection