import React from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'

interface AppPropsType {
}

interface AppStateType {
}

class App extends React.Component<AppPropsType, AppStateType> {
    render() {
        return (
            <Container style={{ marginTop: "10px" }}>
                <SearchBar />
            </Container>
        );
    }
};

export default App;
