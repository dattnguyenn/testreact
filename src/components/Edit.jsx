import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';

const Edit = () => {
  const { id } = useParams();
  return (
    <>
      <h3>{`ID #${id}`}</h3>
      <ProductForm />
    </>
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
