import React from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import imagesApi from '../api/images';
import ImageList from './ImageList';

interface AppPropsType {
}

interface AppStateType {
}

class App extends React.Component<AppPropsType, AppStateType> {
    state = { images: []}
    onSearchSubmit = async (term: string) => {
        const result = await imagesApi.get('search/photos', {
            params: {
                query: term,
            },
        });
        this.setState({images: result.data.results});
    }

    render() {
        return (
            <Container style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </Container>
        );
    }
};

export default App;
