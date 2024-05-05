import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NewsCard extends Component {
  render() {
    const { description, urlToImage, title } = this.props;

    return (
      <Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              urlToImage === null
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzIgPOkO5hBaQwbs1pqVZLDCxPsXS6pYhvQ&s"
                : urlToImage
            }
            alt="urlToImage"
          />
          <Card.Body>
            <Card.Title className="col-20 text-truncate">
              {title === "[Removed]" ? " Not title " : title}
            </Card.Title>
            <Card.Text className="col-30 text-truncate ">
              {description === "[Removed]" ? " Not description" : description}
            </Card.Text>
            <Link className="btn btn-primary">Go somewhere</Link>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default NewsCard;
