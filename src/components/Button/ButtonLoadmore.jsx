import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ label, handleLoadmore }) => {
  return (
    <button
      type="button"
      className={css.ButtonLoadMore}
      onClick={this.handleLoadMore}
    >
      {label}
    </button>
  );
};

// export class ButtonLoadMore extends Component {
//   render() {
//     const { label, handleLoadMore } = this.props;
//     return (
//       <button
//         type="button"
//         className={css.ButtonLoadMore}
//         onClick={handleLoadMore}
//       >
//         {label}
//       </button>
//     );
//   }
// }
