import React from 'react'
import './Resume.css'

function Resume() {
    return (
    <div className="wrapper">
		<div className="resume">
			<div className="left">
				<div className="img_holder">
					
				</div>
				<div className="contact_wrap pb">
					<div className="title">
						Contact
					</div>
					<div className="contact">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-mobile-alt" aria-hidden="true"></i></div>
									<div className="text">Mention Phone number</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="far fa-envelope"></i></div>
									<div className="text">mention gmail</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-weebly" aria-hidden="true"></i></div>
									<div className="text">Mention github link</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-map-signs" aria-hidden="true"></i></div>
									<div className="text">Mention address</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="skills_wrap pb">
					<div className="title">
						Skills
					</div>
					<div className="skills">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-html5"></i></div>
									<div className="text">HTML</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-css3-alt"></i></div>
									<div className="text">CSS</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-js"></i></div>
									<div className="text">Javascript</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-react"></i></div>
									<div className="text">React.JS</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="hobbies_wrap pb">
					<div className="title">
						hobbies
					</div>
					<div className="hobbies">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-book"></i></div>
									<div className="text">Reading</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-music"></i></div>
									<div className="text">Music</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-gamepad"></i></div>
									<div className="text">Gaming</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-tree"></i></div>
									<div className="text">Gardening</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="header">
					<div className="name_role">
						<div className="name">
							Your Name
						</div>
						<div className="role">
							Your Role
						</div>
					</div>
                    <hr></hr>
					<div className="about">
						About you 
					</div>
				</div>
				<div className="right_inner">
					<div className="exp">
						<div className="title">
							Education
						</div>
						<div className="exp_wrap">
							<ul>
								<li>
									<div className="li_wrap">
										<div className="date">
											Your graduation date
										</div>
										<div className="info">
											<p className="info_title">
												College Name
											</p>
											
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
											Inter completion date
										</div>
										<div className="info">
											<p className="info_title">
											    Inter college
											</p>
											
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
											10th completion year
										</div>
										<div className="info">
											<p className="info_title">
												School Name
											</p>
											
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="education">
						<div className="title">
							Projects
						</div>
						<div className="education_wrap">
							<ul>
								<li>
									<div className="li_wrap">
										<div className="date">
											start-end date of the Project
										</div>
										<div className="info">
											<p className="info_title">
												Project title
											</p>
											<p className="info_cont">
												Learning outcomes of the Project
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
                                            start-end date of the Project
										</div>
										<div className="info">
											<p className="info_title">
												project title
											</p>
											<p className="info_cont">
												Learning outcomes of the project...
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
											start-end date of the project
										</div>
										<div className="info">
											<p className="info_title">
												Project title
											</p>
											<p className="info_cont">
												Learning outcomes of the projects...
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Resume
