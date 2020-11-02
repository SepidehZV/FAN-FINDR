import React from 'react';


function Photos(props) {

	if (props.photos[0]) {
		const photos = props.photos.map(e => {
			return (
				<div className="col-lg-3 col-md-4 col-6">
					<a href="#" className="d-block mb-4 h-100">
						<img className="img-fluid img-thumbnail" key = {e.photo_url} src={e.photo_url} alt="" />
					</a>
				</div>
			);
		})
		return (

			<div className="conrinerforPadding">
				<div className="col">
					<h3>Photos</h3>
					<hr className="seprating" />
					<div className="row text-center text-lg-left">
						{photos}
					</div>
				</div>
			</div>

		)
	} else {
		return (

			<div className="conrinerforPadding">
				<div className="col">
					<h3>Photos</h3>
					<hr className="seprating" />
					<div className="row text-center text-lg-left">
						<div className="col-lg-3 col-md-4 col-6">
							<a href="#" className="d-block mb-4 h-100">
								<img className="img-fluid img-thumbnail" src="https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99136_1280.png" alt="" />
							</a>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<a href="#" className="d-block mb-4 h-100">
								<img className="img-fluid img-thumbnail" src="https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99136_1280.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>

		)
	}

};
export default Photos;