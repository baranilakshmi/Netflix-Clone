import {
    Container,
    Button,
    Text,
    Input,
    Break
} from '../styles/optForm'

const OptForm = ({ children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptForm.Input = ({...restProps}) => {
    return <Input {...restProps} />
}

OptForm.Button = ({children, ...restProps}) => {
    return(
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = ({...restProps}) => {
    return <Break {...restProps} />
}

export default OptForm