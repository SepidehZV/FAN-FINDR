import React from 'react';


function Photos(props) {

	if (props.photos[0]) {
		const photos = props.photos.map(e => {
			return (
				<div class="col-lg-3 col-md-4 col-6">
					<a href="#" class="d-block mb-4 h-100">
						<img class="img-fluid img-thumbnail" src={e.photo_url} alt="" />
					</a>
				</div>
			);
		})
		return (

			<div className="conrinerforPadding">
				<div class="col">
					<h3>Photos</h3>
					<hr className="seprating" />
					<div class="row text-center text-lg-left">
						{photos}
					</div>
				</div>
			</div>

		)
	} else {
		return (

			<div className="conrinerforPadding">
				<div class="col">
					<h3>Photos</h3>
					<hr className="seprating" />
					<div class="row text-center text-lg-left">
						<div class="col-lg-3 col-md-4 col-6">
							<a href="#" class="d-block mb-4 h-100">
								<img class="img-fluid img-thumbnail" src="https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99136_1280.png" alt="" />
							</a>
						</div>
						<div class="col-lg-3 col-md-4 col-6">
							<a href="#" class="d-block mb-4 h-100">
								<img class="img-fluid img-thumbnail" src="https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99136_1280.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>

		)
	}

};
export default Photos;