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
							<h5 className="card-title">Lorem Picsum</h5>
							<p className="card-text">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt quidem corrupti, provident sequi optio aliquid fugiat numquam quis quisquam perspiciatis sunt, beatae ut sapiente expedita voluptatem consequuntur? Nesciunt, voluptatibus.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="https://picsum.photos/"
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
							<h5 className="card-title">Lorem Picsum</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex totam assumenda illo ullam saepe. Nobis quod animi maxime explicabo incidunt iusto perspiciatis quae aperiam, sed earum reiciendis eum obcaecati.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="https://picsum.photos/"
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
							<h5 className="card-title">Lorem Picsum</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex blanditiis necessitatibus cum voluptate, unde assumenda ea odit at quis excepturi consequatur nulla facilis distinctio voluptatem quia, qui eos suscipit debitis.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="https://picsum.photos/"
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
							<h5 className="card-title">Lorem Picsum</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus provident pariatur corrupti sunt veniam praesentium! Numquam natus eligendi eos rerum earum, ullam laborum esse, dolorem nihil, quam possimus eaque.
							</p>
						</div>
						<div className="card-footer">
							<a
								className="btn btn-primary btn-lg"
								href="https://picsum.photos/"
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