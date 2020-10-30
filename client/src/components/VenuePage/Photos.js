import React from 'react';


function Photos(props) {

	const photos = props.photos.map( e =>{
		return(
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
				<div>Photos</div>
				<hr className="seprating" />
				<div class="row text-center text-lg-left">
					{photos}
					</div>
				</div>
			</div>

	)


};
export default Photos;