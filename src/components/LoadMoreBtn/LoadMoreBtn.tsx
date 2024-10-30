import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button onClick={onClick} className={s.buttom}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
