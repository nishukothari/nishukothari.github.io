import React from "react";
import ExpandButton from "./ExpandButton";
import "../public/styles/ProjectView.css";
import projectData from "../public/json/projects.json";
import { Col, Row, Table } from "react-bootstrap";
import FilterDropdown from "./FilterDropdown";

const FEATURED = "Featured";

class ProjectView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      displayedRows: new Array(),
      tagsMap: new Map(),
      languagesMap: new Map(),
      categoriesMap: new Map(),
      openSet: new Set(),
      featured: new Set(),
      categoryFilter: null,
      languageFilter: null,
      tagFilter: null,
      defaultCategory: true,
      defaultLanguage: true,
      defaultTag: true,
    };

    this.initializeRows = this.initializeRows.bind(this);
    this.updateRows = this.updateRows.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.addToOpenSet = this.addToOpenSet.bind(this);
    this.removeFromOpenSet = this.removeFromOpenSet.bind(this);
  }

  componentDidMount() {
    if (this.state.loading) {
      this.setState({
        loading: false,
      });
    }
    this.initializeRows();
    this.updateRows(null, null, null);
  }

  initializeRows() {
    for (let i = 0; i < projectData["projArray"].length; ++i) {
      const project = projectData["projArray"][i];
      let featured = false;
      //Tag Handling
      for (let j = 0; j < project["tags"].length; ++j) {
        const tag = project["tags"][j];
        if (tag == FEATURED) {
          this.state.featured.add(project["key"]);
          featured = true;
        } else {
          if (this.state.tagsMap.has(tag)) {
            this.state.tagsMap.get(tag).add(project["key"]);
          } else {
            this.state.tagsMap.set(tag, new Set());
            this.state.tagsMap.get(tag).add(project["key"]);
          }
        }
      }

      //Language Handling
      for (let j = 0; j < project["languages"].length; ++j) {
        const language = project["languages"][j];
        if (this.state.languagesMap.has(language)) {
          this.state.languagesMap.get(language).add(project["key"]);
        } else {
          this.state.languagesMap.set(language, new Set());
          this.state.languagesMap.get(language).add(project["key"]);
        }
      }

      //Category Handling
      const category = project["category"];
      if (this.state.categoriesMap.has(category)) {
        this.state.categoriesMap.get(category).add(project["key"]);
      } else {
        this.state.categoriesMap.set(category, new Set());
        this.state.categoriesMap.get(category).add(project["key"]);
      }
    }
  }

  updateRows(categoryFilter, tagFilter, languageFilter) {
    let featuredRows = [];
    let nonFeaturedRows = [];
    for (let i = 0; i < projectData["projArray"].length; ++i) {
      const project = projectData["projArray"][i];
      const key = project["key"];
      const descriptionClass = "Description" + project["key"];
      if (categoryFilter) {
        const filteredCategorySet =
          this.state.categoriesMap.get(categoryFilter);
        if (filteredCategorySet) {
          if (!filteredCategorySet.has(key)) {
            if (this.state.openSet.has(descriptionClass))
              this.removeFromOpenSet(descriptionClass);
            continue;
          }
        }
      }

      if (tagFilter) {
        const filteredTagSet = this.state.tagsMap.get(tagFilter);
        if (filteredTagSet) {
          if (!filteredTagSet.has(key)) {
            if (this.state.openSet.has(descriptionClass))
              this.removeFromOpenSet(descriptionClass);
            continue;
          }
        }
      }

      if (languageFilter) {
        const languageTagSet = this.state.languagesMap.get(languageFilter);
        if (languageTagSet) {
          if (!languageTagSet.has(key)) {
            if (this.state.openSet.has(descriptionClass))
              this.removeFromOpenSet(descriptionClass);
            continue;
          }
        }
      }

      const featuredDisplay = this.state.featured.has(key) ? "✅" : "";
      const isOpen = this.state.openSet.has(descriptionClass);
      if (featuredDisplay !== "") {
        featuredRows.push(
          <tr>
            <th scope="row">
              <ExpandButton
                open={isOpen}
                projectKey={descriptionClass}
                addToSet={(adds) => {
                  this.addToOpenSet(adds);
                }}
                removeFromSet={(removes) => this.removeFromOpenSet(removes)}
              />
            </th>
            <td>{project["name"]}</td>
            <td>{project["category"]}</td>
            <td>{featuredDisplay}</td>
          </tr>
        );
        featuredRows.push(
          <tr>
            <td className="Description" id={descriptionClass} colSpan="100%">
              {project["description"]} <br />
              <br /> {"Languages: " + project["languages"].join(", ")}
            </td>
          </tr>
        );
      } else {
        nonFeaturedRows.push(
          <tr>
            <th scope="row">
              <ExpandButton
                open={isOpen}
                projectKey={descriptionClass}
                addToSet={(adds) => {
                  this.addToOpenSet(adds);
                }}
                removeFromSet={(removes) => this.removeFromOpenSet(removes)}
              />
            </th>
            <td>{project["name"]}</td>
            <td>{project["category"]}</td>
            <td>{featuredDisplay}</td>
          </tr>
        );
        nonFeaturedRows.push(
          <tr>
            <td className="Description" id={descriptionClass} colSpan="100%">
              {project["description"]} <br />
              <br /> {"Languages: " + project["languages"].join(", ")}
            </td>
          </tr>
        );
      }
    }

    this.state.displayedRows.splice(0, this.state.displayedRows.length);
    this.setState({
      displayedRows: featuredRows.concat(nonFeaturedRows),
    });
  }

  addToOpenSet(openedTab) {
    this.state.openSet.add(openedTab);
  }

  removeFromOpenSet(openedTab) {
    this.state.openSet.delete(openedTab);
  }

  resetFilters() {
    this.setState(
      {
        openSet: new Set(),
      },
      () => {
        this.updateRows(null, null, null);
        this.setState({
          defaultTag: true,
          defaultCategory: true,
          defaultLanguage: true,
          categoryFilter: null,
          languageFilter: null,
          tagFilter: null,
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      const categories = Array.from(this.state.categoriesMap.keys());
      const languages = Array.from(this.state.languagesMap.keys());
      const tags = Array.from(this.state.tagsMap.keys());
      return (
        <div>
          <Col>
            <Row className="ButtonRow">
              <Col className="ButtonCol">
                <FilterDropdown
                  cleared={this.state.defaultCategory}
                  defaultText="Project Type"
                  setFilter={(filter) => {
                    this.updateRows(
                      filter,
                      this.state.tagFilter,
                      this.state.languageFilter
                    );
                    this.state.categoryFilter = filter;
                    this.setState({ defaultCategory: false });
                  }}
                  items={categories}
                  buttonText={this.state.categoryFilter}
                  id="typeDropdown"
                />
              </Col>
              <Col className="ButtonCol">
                <FilterDropdown
                  cleared={this.state.defaultLanguage}
                  defaultText="Programming Language"
                  setFilter={(filter) => {
                    this.updateRows(
                      this.state.categoryFilter,
                      this.state.tagFilter,
                      filter
                    );
                    this.state.languageFilter = filter;
                    this.setState({ defaultLanguage: false });
                  }}
                  items={languages}
                  buttonText={this.state.languageFilter}
                  id="languageDropdown"
                />
              </Col>
              <Col className="ButtonCol">
                <FilterDropdown
                  cleared={this.state.defaultTag}
                  defaultText="Tag"
                  setFilter={(filter) => {
                    this.updateRows(
                      this.state.categoryFilter,
                      filter,
                      this.state.languageFilter
                    );
                    this.state.tagFilter = filter;
                    this.setState({ defaultTag: false });
                  }}
                  items={tags}
                  buttonText={this.state.tagFilter}
                  id="tagDropdown"
                />
              </Col>
              <Col className="ButtonCol">
                <button className="FilterButton" onClick={this.resetFilters}>
                  Reset Filters
                </button>
              </Col>
            </Row>

            <Row className="MobileButtons">
              <FilterDropdown
                cleared={this.state.defaultCategory}
                defaultText="Project Type"
                setFilter={(filter) => {
                  this.updateRows(
                    filter,
                    this.state.tagFilter,
                    this.state.languageFilter
                  );
                  this.state.categoryFilter = filter;
                  this.setState({ defaultCategory: false });
                }}
                items={categories}
                buttonText={this.state.categoryFilter}
                id="typeDropdown"
              />
            </Row>
            <Row className="MobileButtons">
              <FilterDropdown
                cleared={this.state.defaultLanguage}
                defaultText="Programming Language"
                setFilter={(filter) => {
                  this.updateRows(
                    this.state.categoryFilter,
                    this.state.tagFilter,
                    filter
                  );
                  this.state.languageFilter = filter;
                  this.setState({ defaultLanguage: false });
                }}
                items={languages}
                buttonText={this.state.languageFilter}
                id="languageDropdown"
              />
            </Row>
            <Row className="MobileButtons">
              <FilterDropdown
                cleared={this.state.defaultTag}
                defaultText="Tag"
                setFilter={(filter) => {
                  this.updateRows(
                    this.state.categoryFilter,
                    filter,
                    this.state.languageFilter
                  );
                  this.state.tagFilter = filter;
                  this.setState({ defaultTag: false });
                }}
                items={tags}
                buttonText={this.state.tagFilter}
                id="tagDropdown"
              />
            </Row>
            <Row className="MobileButtons">
              <button className="FilterButton" onClick={this.resetFilters}>
                Reset Filters
              </button>
            </Row>
          </Col>
          <Table>
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Featured</th>
              </tr>
            </thead>
            <tbody>{this.state.displayedRows}</tbody>
          </Table>
        </div>
      );
    }
  }
}

export default ProjectView;
