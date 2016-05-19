import React from 'react';

// Components
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => (
					<Photo
						{...this.props}
						key={i}
						i={i}
						post={post} />
				))}
			</div>
		);
	}
});

export default PhotoGrid;
