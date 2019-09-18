import React, { Component } from "react";
import "./style.css";
import api from "../../services/service";
import { Link } from "react-router-dom";
class Main extends Component {
  state = {
    photos: [],
    pagesInfo: {},
    page: 1
  };
  componentDidMount() {
    this.loadPhoto();
  }
  loadPhoto = async (page = 1) => {
    const response = await api.get(`/photo?page=${page}`);
    const { docs: photos, ...pagesInfo } = response.data;
    this.setState({ photos, pagesInfo, page });
    window.scroll(0, 0);
  };
  handleNext = () => {
    const { page, pagesInfo } = this.state;
    if (page === pagesInfo.pages) return;
    const pageNumber = page + 1;
    this.loadPhoto(pageNumber);
  };
  handlePrev = () => {
    const { page } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadPhoto(pageNumber);
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            {this.state.photos.map(photo => (
              <div className="col-sm-12 col-md-6 col-lg-4 main" key={photo._id}>
                <img
                  className="img-main"
                  src={`http://localhost:3000/${photo.imgPath}`}
                  alt=""
                />
                <div className="photo-description">
                  <p className="category">{photo.title}</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nisi non doloribus earum.
                  </p>
                  <Link className="btn  btn-details" to={`/${photo._id}`}>
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-left btn-buttons">
              <div className="btn btn-prev" onClick={this.handlePrev}>
                Prev
              </div>
              <div className="btn btn-next" onClick={this.handleNext}>
                Next
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
