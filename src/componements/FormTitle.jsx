const FormTitle = (props) => {
    const { 
        tag,
        children,
        className
    } = props

    
    let Tag = tag;
    if (!tag.match(/^h\d/)) {
        console.warn("Invalid tag name! defaulting to h5")
        Tag = "h5"
    }

    
    

    return (
        <Tag className={className}> {children} </Tag>
    )
}

export default FormTitle