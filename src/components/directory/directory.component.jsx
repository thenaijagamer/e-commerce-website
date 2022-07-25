import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSection } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSection,
});

export default connect(mapStateToProps)(DirectoryMenu);
