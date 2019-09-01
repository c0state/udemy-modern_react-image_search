import React from 'react'
import { Form, Input, Label, Segment } from 'semantic-ui-react'

interface SearchBarPropsType {
}

interface SearchBarStateType {
}

class SearchBar extends React.Component<SearchBarPropsType, SearchBarStateType> {
    render() {
        return (
            <Segment>
                <Form>
                    <div className="field">
                        <Label>Image Search</Label>
                        <Input type="text" placeholder="hahaha" />
                    </div>
                </Form>
            </Segment>
        )
    }
}

export default SearchBar;
