import Movie from "../Movie/Movie";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function MovieList(props) {
    return (
        <>
            <h1>Movie List</h1>
            <Row xs={1} md={4} className="g-4">
                {props.trendingMovies.map((trendingMovie) => {
                    return <Col>
                            <Movie trendingMovie={trendingMovie} />
                            </Col>
                })}
            </Row>
            
        </>
    )
}
export default MovieList;