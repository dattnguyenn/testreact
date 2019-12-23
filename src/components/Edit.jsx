import React, { Component } from 'react';
import ProductForm from './ProductForm';

// const Edit = () => {
//   const { id } = useParams();
//   return (
//     <>
//       <h3>{`ID #${id}`}</h3>
//       <ProductForm />
//     </>
//   );
// };

class Edit extends Component {
  // eslint-disable-next-line react/state-in-constructor
  render() {
    return (
      <>
        <h3>ID # {this.props.match.params.id}</h3>
        <ProductForm />
      </>
    );
  }
}

export default Edit;
