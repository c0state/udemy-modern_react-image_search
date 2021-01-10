import React from 'react'
import { Form, FormField, Input, Label, Segment } from 'semantic-ui-react'

interface SearchBarPropsType {
    onSubmit: any;
}

interface SearchBarStateType {
    term: string;
}

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {
    state = {
        term: ''
    }

    onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <FormField>
                        <Label>Image Search</Label>
                        <Input type="text"
                            placeholder="Search Term"
                            value={ this.state.term }
                            onChange={ event => this.setState({ term: event.target.value }) } />
                    </FormField>
                </Form>
            </Segment>
        )
    }
}

export default SearchBar;
