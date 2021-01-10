import React from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'

interface AppPropsType {
}

interface AppStateType {
}

class App extends React.Component<AppPropsType, AppStateType> {
    onSearchSubmit(term: string) {
        console.log(`calling search with term: ${term}`);
    }

    render() {
        return (
            <Container style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </Container>
        );
    }
};

export default App;
