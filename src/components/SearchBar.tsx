import React from 'react'
import { Form, Input, Label, Segment } from 'semantic-ui-react'

interface SearchBarPropsType {
}

interface SearchBarStateType {
    term: string
}

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {
    state = {
        term: ''
    }

    onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(`term is: ${this.state.term}`);
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <Label>Image Search</Label>
                        <Input type="text"
                            placeholder="hahaha"
                            value={ this.state.term }
                            onChange={ (event) => { this.setState({ term: event.target.value }) } } />
                    </div>
                </Form>
            </Segment>
        )
    }
}

export default SearchBar;
