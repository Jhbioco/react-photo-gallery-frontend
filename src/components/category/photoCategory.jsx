import React, { Component } from "react";
import api from "../../services/service";
import "./style.css";
import { Link } from "react-router-dom";

class PhotoCategory extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    this.loadPhoto();
  }

  loadPhoto = async () => {
    const { name } = this.props.match.params;
    const { data: photos } = await api.get(`/photo/category/${name}`);
    this.setState({ photos });
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            {this.state.photos.length === 0 && (
              <div className="col-sm-12 col-md-6 col-lg-4 main">
                <p className="category">No photo to show!</p>
              </div>
            )}
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
      </main>
    );
  }
}

export default PhotoCategory;
