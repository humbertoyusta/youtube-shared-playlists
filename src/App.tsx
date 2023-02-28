import React, {useState} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import useSWR from "swr";
import axios from "axios";
import BodyWrapper from "./components/BodyWrapper";
import Header from "./components/Header";

const fetcher = (url: string) => axios.get(url);

function App() {
    const [search, setSearch] = useState("");

    /* fetch data using useSWR from https://youtube.thorsteinsson.is/api/search?q={search}*/
    // const {data, error, isLoading} = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${search}`, fetcher);
    //
    // if (!error && !isLoading && data)
    //     console.log(data.data);

    return (
        <>
            <Header>
                <SearchBar handleSearchSubmit={(searchString) => setSearch(searchString)} />
            </Header>
            <BodyWrapper>
                {/*{!error && !isLoading && data && data.data.map((video: any) => (*/}
                {/*    <div key={video.id}>*/}
                {/*        <h1>{video.title}</h1>*/}
                {/*        <img src={video.thumbnail} alt={video.title} />*/}
                {/*    </div>*/}
                {/*))}*/}
            </BodyWrapper>
        </>
    );
}

export default App;
