import React from "react";

let placeHolderImg = "https://picsum.photos/100/100?random=1";
let placeHolderImg1 = "https://picsum.photos/100/100?random=2";
let placeHolderImg2 = "https://picsum.photos/100/100?random=3";
let placeHolderImg3 = "https://picsum.photos/100/100?random=4";

const Cards = () => {
	return (
		<div className="container-fluid">
			<div className="row row-cols-1 row-cols-md-4 g-4">
				<div className="col">
					<div className="card h-100">
						<img
							src={placeHolderImg}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={placeHolderImg1}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={placeHolderImg2}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={placeHolderImg3}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;