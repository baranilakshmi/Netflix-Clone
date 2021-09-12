import faqsData from '../fixtures/faqs.json'
import { Accordion } from '../components'
import { OptForm } from '../components'

const FaqsContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email address"/>
                    <OptForm.Button>
                        TRT IT NOW
                    </OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>
                        Ready to waatch? Enter your email to create or restart your membership.
                    </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}

export default FaqsContainer

