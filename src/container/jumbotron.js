import {Jumbotron} from '../components'
import JumbotronData from '../fixtures/jumbo'

const JumbotronContainer = () => {
    return (
        <Jumbotron.Container>
            {JumbotronData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>

                        <Jumbotron.Title>
                            {item.title}
                        </Jumbotron.Title>

                        <Jumbotron.SubTitle>
                            {item.subtitle}
                        </Jumbotron.SubTitle>

                    </Jumbotron.Pane>

                    <Jumbotron.Pane>

                        <Jumbotron.Image src={item.image} alt={item.alt}/>
                    </Jumbotron.Pane>

                </Jumbotron>

            ))}

        </Jumbotron.Container>
    )
}

export default JumbotronContainer
