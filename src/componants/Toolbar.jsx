import React from 'react';

const Toolbar = () => {
	return (
		<div className="container toolbar">
			<div className="row">
				<div className="col-10 create-button">
					<button className="btn btn-dark">Create Article</button>
				</div>
				<div className="col-2 create-button">
					<div
						class="btn-group btn-group-toggle float-right"
						data-toggle="buttons"
					>
						<button className="btn btn-dark sort-buttons">ASC</button>
						<button className="btn btn-dark sort-buttons">DESC</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
