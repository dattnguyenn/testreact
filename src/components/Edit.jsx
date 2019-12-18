import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

const Edit = () => {
  let { id } = useParams();
  return (
    <Fragment>
      <h3>ID #{id}</h3>
      <ProductForm />
    </Fragment>
  );
};

// class Edit extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h3>ID # {this.props.match.params.id}</h3>
//         <ProductForm />
//       </Fragment>
//     );
//   }
// }

export default Edit;
