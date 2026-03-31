const Home = () => {
    return(
        <div>
            <h2>Menu</h2>
            <div className="menuSelection panel">
                <a href="/register" className="btn">
                    Register
                </a>
                <a href="/challenge/testchallengecode" className="btn">
                    Challenge
                </a>

            </div>

        </div>
    );
}

export default Home;