import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCv6yIdj5OauWhRsiXhGzN3JltmLbJGE4c';

// create a component
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {videos: [],
			selectedVideo: null
		};

		this.videoSearch('macanache');
	}

  videoSearch(term) {
		YTSearch( {key: API_KEY, term: term}, (videos) => {
			// this.setState({videos: videos}) ES6 ->
			//this.setState({videos});
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}

	render() {

		const videoSearch = _.debounce( (term) => {this.videoSearch(term)} , 1000 )

		return (
			<div>
			<SearchBar onSearchTermChanged = {videoSearch} />
			<VideoDetail video = {this.state.selectedVideo} />
			<VideoList
			  onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
				videos = {this.state.videos}
			/> // passing props
			</div>
		);
	}
}

// render the component (put the generated HTML code into the DOM)
// ReactDOM.render(App); // ERROR - we ask to render a class component
//ReactDOM.render(<App />) // FIX: now we render an instance BUT ->
												 // 'target component is not a DOM element'
												 // react is said to render the component BUT
												 // not where to put the code

//FIX: put a second argument to tell where to render
ReactDOM.render(<App />, document.querySelector('.container'));
