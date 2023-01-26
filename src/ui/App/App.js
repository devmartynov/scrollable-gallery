import Section from './../Section';
import Gallery from './../Gallery';
import Header from './../Header';
import Footer from './../Footer';
import Block from './../Block';
import useImagesRepository from '../../data/useImagesRepository';

import './App.css';

function App() {
    const blockImages = useImagesRepository().getMainImages();

    return (
        <div className="App">
            <Header className='App__header' />

            <Section
                title='ut aliquip ex ea commodo consequat'
                initial={true}
            >
                <Block
                    className='Section__block'
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    text={'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </br> Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                    image={blockImages[2].image}
                />
                <Block
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    text={'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </br> Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                    image={blockImages[0].image}
                    reverted={true}
                />
            </Section>

            <Gallery />

            <Section title='ut aliquip ex ea commodo consequat'>
                <Block
                    className='Section__block'
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    text={'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </br> Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                    image={blockImages[3].image}
                />
                <Block
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    text={'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </br> Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                    image={blockImages[1].image}
                    reverted
                />
            </Section>

            <Footer />
        </div>
    );
}
export default App;
