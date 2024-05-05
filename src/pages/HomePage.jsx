import React, { Component } from "react";
import axios from "axios";
import NewsCard from "../components/card/NewsCard";
import Loading from "../components/Loading";

export class HomePage extends Component {
  state = {
    news: [],
    loading: false,
    currentPage: 1,
    perPage: 12,
  };

  async getNews() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2024-04-05&sortBy=popularity&apiKey=c44bf6cffb194d6aa51e6ec8dcbda66a"
      );
      this.setState({ news: response.data.articles, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getNews();
  }

  onPageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  onNextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  onPrevPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
  };

  render() {
    const { loading, news, currentPage, perPage } = this.state;

    // Pagination
    const indexOfLastArticle = currentPage * perPage;
    const indexOfFirstArticle = indexOfLastArticle - perPage;
    const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
      <div>
        <h1>Top News</h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="d-flex flex-wrap align-items-center gap-4 justify-content-center">
              {currentArticles.map((article, index) => (
                <NewsCard
                  key={index}
                  description={article.description}
                  title={article.title}
                  urlToImage={article.urlToImage}
                />
              ))}
            </div>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <button
                className="btn btn-primary"
                disabled={currentPage === 1}
                onClick={this.onPrevPage}
              >
                Previous Page
              </button>
              <button
                className="btn btn-primary"
                disabled={indexOfLastArticle >= news.length}
                onClick={this.onNextPage}
              >
                Next Page
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default HomePage;
