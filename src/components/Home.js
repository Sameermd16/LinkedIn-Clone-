import styled from 'styled-components'
import Leftside from './Leftside';
import Rightside from './Rightside';
import Main from './Main';

const Home = (props) => {
    return (
        <Container>
            <Layout>
               <Leftside />
               <Main />
               <Rightside />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    padding-top: 52px;
    max-width: 100%;
`;

const Layout = styled.div`
    /* border: 1px solid black; */
    margin: 25px 0;
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
    grid-template-areas: "leftside main rightside";
    grid-template-rows: auto;
    gap: 25px;
    max-width: 1128px;
    margin: auto;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;




export default Home;