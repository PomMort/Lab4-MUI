import { Card, Container, Icon, Select, TextInput, Textarea } from "react-materialize";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Card>
            <Container>
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit}>
                    <TextInput id="TextInput-38" label="Your Name" />
                    <TextInput id="TextInput-39" label="Your Phone" />
                    <TextInput email id="TextInput-41" label="Email" validate />
                    <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                        <option disabled value="">
                            Choose your favorite movie type
                        </option>
                        <option value="1">
                            Animation
                        </option>
                        <option value="2">
                            Action
                        </option>
                        <option value="3">
                            Horror
                        </option>
                    </Select>
                    <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content" />
                    <button className="btn-contact">Submit</button>
                </form>
            </Container>
        </Card>
    )
}