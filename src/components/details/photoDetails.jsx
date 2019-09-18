import React, { Component } from "react";
import api from "../../services/service";
import "./style.css";
import { Link } from "react-router-dom";
class PhotoDetails extends Component {
  state = {
    photo: {}
  };
  componentDidMount() {
    this.loadPhoto();
  }

  loadPhoto = async () => {
    const { id } = this.props.match.params;
    const { data: photo } = await api.get(`/photo/${id}`);
    this.setState({ photo });
  };
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                className="img-detail"
                src={`http://localhost:3000/${this.state.photo.imgPath}`}
                alt=""
              ></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2>{this.state.photo.title}</h2>
              {this.state.photo.description}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-right btn-details">
              <Link className="btn btn-back" to="/">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoDetails;
