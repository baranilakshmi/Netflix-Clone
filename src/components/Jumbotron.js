import {
    Item,
    Inner,
    Container,
    Title,
    SubTitle,
    Image,
    Pane
} from '../styles/jumbotron'

const Jumbotron = ({ children,direction = 'row', ...restProps}) => {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = ({children, ...restProps}) => {
    return <Container {...restProps}>
        {children}
    </Container>
}

Jumbotron.Pane = ({children, ...restProps}) => {
    return <Pane {...restProps}>
        {children}
    </Pane>
}

Jumbotron.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>
        {children}
    </Title>
}

Jumbotron.SubTitle = ({children, ...restProps}) => {
    return <SubTitle {...restProps}>
        {children}
    </SubTitle>
}

Jumbotron.Image = ({ ...restProps}) => {
    return <Image {...restProps} />
}


export default Jumbotron
